import React, { useEffect, useState } from 'react';
import moment from 'moment';
// Components
import {
    Box,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    InputAdornment,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
    Slide,
    AppBar,
    Toolbar,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Typography, Button } from '../../components/Wrappers/Wrappers';
import Widget from '../../components/Widget/Widget';
import { Link, useNavigate } from 'react-router-dom';
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';
import { formatNumber } from '../../utils/formatHelper';

// Icons
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
//Styles
import useStyles from './styles';
// Models
import { OrderModel, StatusModel, OrderDetailModel } from '../../models/OrderModel';
// Actions
import { getOrders, getStatus, updateStatus, getOrderDetails } from '../../store/action/OrderAction';
import { BASE_URL } from '../../utils/config';
import { TransitionProps } from '@mui/material/transitions';
import IconButton from '@mui/material/IconButton';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const OrderManagement = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [lisOrder, setListOrder] = useState<OrderModel[]>([]);
    const [listStatus, setListStatus] = useState<StatusModel[]>([]);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalOpen2, setModalOpen2] = React.useState(false);
    const [orderSelected, setOrderSelected] = useState('');
    const [statusSelected, setStatusSelected] = useState('');
    const [orderDetails, setOrderDetails] = useState<OrderDetailModel[]>([]);
    const [detailLoading, setDetailLoading] = useState({ id: '', loading: false });

    const getListOrder = async () => {
        const response = await getOrders();
        if (response.code === 200) {
            setListOrder(response.data);
        }
    };

    const getListStatus = async () => {
        const response = await getStatus();
        if (response.code === 200) {
            setListStatus(response.data);
        }
    };

    useEffect(() => {
        const doInit = async () => {
            await getListOrder();
            await getListStatus();
            setLoading(false);
        };
        doInit();
    }, []);

    const closeModal = () => {
        setModalOpen(false);
    };
    const closeModal2 = () => {
        setModalOpen2(false);
        setOrderDetails([]);
    };

    const handleSelectOrder = (id: string, status: string) => {
        setOrderSelected(id);
        setStatusSelected(status);
        setModalOpen(true);
    };

    const handleSelectStatus = (e: SelectChangeEvent) => {
        setStatusSelected(e.target.value);
    };

    const handleUpdateStatus = async () => {
        const response = await updateStatus({
            id: orderSelected,
            status: statusSelected,
        });
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            getListOrder();
        } else {
            sendNotification(response.message, 'error');
        }
        setModalOpen(false);
    };

    const handleShowDetail = async (id: string) => {
        setDetailLoading({ id: id, loading: true });
        const response = await getOrderDetails(id);
        if (response.code === 200) {
            setOrderDetails(response.data);
            setModalOpen2(true);
        } else {
            sendNotification(response.message, 'error');
        }
        setDetailLoading({ id: '', loading: false });
    };

    return (
        <Grid container spacing={3}>
            <CustomToast />
            <Dialog
                open={modalOpen}
                onClose={closeModal}
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
                fullWidth
                maxWidth={'sm'}
            >
                <DialogTitle id="alert-dialog-title">Chuyển trạng thái đơn hàng</DialogTitle>
                <DialogContent dividers>
                    <FormControl sx={{ mt: 2, width: '100%' }} size="small">
                        <InputLabel htmlFor="status">Trạng thái </InputLabel>
                        <Select
                            autoFocus
                            value={statusSelected}
                            onChange={handleSelectStatus}
                            label="status"
                            // inputProps={{
                            //     name: 'max-width',
                            //     id: 'max-width',
                            // }}
                        >
                            {listStatus.length &&
                                listStatus.map((item, index) => (
                                    <MenuItem value={item.code} key={index}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal} size="small" variant="outlined" color="primary">
                        hủy
                    </Button>
                    <Button
                        size="small"
                        variant="outlined"
                        // loading={loading}
                        // loadingIndicator="Deleting…"
                        color="info"
                        autoFocus
                        onClick={handleUpdateStatus}
                    >
                        Xác nhận
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={modalOpen2}
                onClose={closeModal2}
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
                fullScreen
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={closeModal2} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Chi tiết đơn hàng
                        </Typography>
                        <Button autoFocus color="inherit" onClick={closeModal2}>
                            Đóng
                        </Button>
                    </Toolbar>
                </AppBar>

                <DialogContent dividers>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">STT</TableCell>
                                    <TableCell>Hình ảnh</TableCell>
                                    <TableCell>Tên sản phẩm</TableCell>
                                    <TableCell>Số lượng</TableCell>
                                    <TableCell>Giá</TableCell>
                                    <TableCell>Tổng tiền</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orderDetails.length ? (
                                    orderDetails.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="center">{index + 1}</TableCell>
                                            <TableCell>
                                                <img
                                                    src={`${BASE_URL}/${item.product_img}`}
                                                    alt={item.product_img}
                                                    style={{ width: 100 }}
                                                />
                                            </TableCell>
                                            <TableCell>{item.product_name}</TableCell>
                                            <TableCell>{item.quantity}</TableCell>
                                            <TableCell>{formatNumber(Number(item.price), 2)}đ</TableCell>
                                            <TableCell>{formatNumber(Number(item.total_price), 2)}đ</TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell>Không tìm thấy chi tiết đơn hàng</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
            </Dialog>
            <Grid item xs={12}>
                <Widget variant="h5" title="Quản lý đơn hàng">
                    <Box justifyContent={'space-between'} display={'flex'} alignItems={'center'}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
                            <TextField
                                style={{ marginTop: 16 }}
                                sx={{
                                    '.MuiInputBase-input': {
                                        padding: '8px 14px',
                                    },
                                }}
                                id="search-field"
                                label="Search"
                                margin="dense"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Box>
                </Widget>
            </Grid>
            <Grid item xs={12}>
                <Widget>
                    {loading ? (
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <CircularProgress size={26} />
                        </Box>
                    ) : (
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">STT</TableCell>
                                        <TableCell>Người đặt</TableCell>
                                        <TableCell>Số lượng</TableCell>
                                        <TableCell>Tổng tiền</TableCell>
                                        <TableCell>Tổng thanh toán</TableCell>
                                        <TableCell>Trạng thái</TableCell>
                                        <TableCell>Ngày tạo</TableCell>
                                        <TableCell>Chức năng</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {lisOrder.length &&
                                        lisOrder.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell>{item.customer_name}</TableCell>
                                                <TableCell>{item.total_quantity}</TableCell>
                                                <TableCell>{formatNumber(Number(item.total_price), 2)}đ</TableCell>
                                                <TableCell>{formatNumber(Number(item.total_pay), 2)}đ</TableCell>
                                                <TableCell>{item.status_name}</TableCell>
                                                <TableCell>
                                                    {moment(item.created_at).format('DD/MM/YYYY HH/MM/SS')}
                                                </TableCell>
                                                <TableCell>
                                                    <Box display={'flex'} alignItems="center">
                                                        <Button
                                                            onClick={() => handleSelectOrder(item.id, item.status)}
                                                            variant={'contained'}
                                                            color="primary"
                                                            style={{ marginRight: 8 }}
                                                        >
                                                            duyệt đơn hàng
                                                        </Button>
                                                        <Button
                                                            onClick={() => handleShowDetail(item.id)}
                                                            variant={'contained'}
                                                            color="primary"
                                                            loading={
                                                                detailLoading.id === item.id && detailLoading.loading
                                                            }
                                                            style={{ marginRight: 8 }}
                                                        >
                                                            Chi tiết
                                                        </Button>
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </Widget>
            </Grid>
        </Grid>
    );
};

export default OrderManagement;
