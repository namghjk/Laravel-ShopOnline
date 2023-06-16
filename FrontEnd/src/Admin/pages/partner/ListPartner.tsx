import React, { useEffect } from 'react';

// Components
import {
    Box,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
} from '@mui/material';
import { Typography, Button } from '../../components/Wrappers/Wrappers';
import Widget from '../../components/Widget/Widget';
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';

// Models
import { PartnerModel } from '../../models/PartnerModel';

//Styles
import useStyles from './styles';

// Icons
import { Add as AddIcon, Edit as EditIcon, Close as CloseIcon } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';

// Contexts
import { getAllPartner, deletePartner } from '../../store/action/PartnerAction';

const ListPartner = () => {
    // Navigate
    const navigate = useNavigate();
    // Styles
    const classes = useStyles();

    // States

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const [lisPartner, setListPartner] = React.useState<PartnerModel[]>([]);
    const [count, setCount] = React.useState(0);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [deleted, setDeleted] = React.useState({
        id: '',
        name: '',
    });
    const [loading, setLoading] = React.useState(false);

    const getPartner = async () => {
        setLoading(true);
        const response = await getAllPartner(page + 1, rowsPerPage);
        if (response.code === 200) {
            setListPartner(response.data);
            setCount(response.additionalData.total_records);
        }
        setLoading(false);
    };
    // Effects
    useEffect(() => {
        getPartner();
    }, [page, rowsPerPage]);

    // useEffect(() => {
    //     getPartner();
    // }, []);

    // Handles

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleDelete = async () => {
        setLoading(true);
        const response = await deletePartner(deleted.id);
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            setModalOpen(false);
            getPartner();
        } else {
            sendNotification(response?.message, 'error');
            setModalOpen(false);
        }
        setLoading(false);
    };

    const openModal = (name: string, id: string) => {
        setDeleted({ name: name, id: id });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Grid container spacing={3}>
            <CustomToast />
            <Dialog open={modalOpen} onClose={closeModal} scroll={'body'} aria-labelledby="scroll-dialog-title">
                <DialogTitle id="alert-dialog-title">Bạn có muốn xóa nhà cung cấp này?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Nhà cung cấp "{deleted.name}" sẽ bị xóa.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal} size="small" variant="outlined" color="primary">
                        hủy
                    </Button>
                    <Button
                        onClick={handleDelete}
                        size="small"
                        variant="outlined"
                        loading={loading}
                        loadingIndicator="Deleting…"
                        color="info"
                        autoFocus
                    >
                        xóa
                    </Button>
                </DialogActions>
            </Dialog>
            <Grid item xs={12}>
                <Widget title="Quản lý nhà cung cấp">
                    <Link to="../partner/new">
                        <Button variant={'contained'} color={'success'}>
                            <Box mr={1} display={'flex'}>
                                <AddIcon />
                            </Box>
                            Thêm mới
                        </Button>
                    </Link>
                </Widget>
            </Grid>
            <Grid item xs={12}>
                <Widget>
                    <TableContainer>
                        <Table className="mb-0">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableHeader}>STT</TableCell>
                                    <TableCell className={classes.tableHeader}>Tên nhà cung cấp</TableCell>
                                    <TableCell className={classes.tableHeader}>SĐT</TableCell>
                                    <TableCell className={classes.tableHeader}>Địa chỉ</TableCell>
                                    <TableCell className={classes.tableHeader}>Chức năng</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {!loading ? (
                                    lisPartner.length ? (
                                        lisPartner.map((partner, index) => (
                                            <TableRow key={partner.id}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell>{partner.name}</TableCell>
                                                <TableCell>{partner.phone_number}</TableCell>
                                                <TableCell>{partner.address}</TableCell>
                                                <TableCell>
                                                    <Box display={'flex'} alignItems="center">
                                                        <Button
                                                            variant={'contained'}
                                                            color="primary"
                                                            style={{ marginRight: 8 }}
                                                            onClick={() =>
                                                                navigate('/admin/partner/edit/' + partner.id)
                                                            }
                                                        >
                                                            <EditIcon className={classes.editIcon} />
                                                            sửa
                                                        </Button>
                                                        <Button
                                                            variant={'contained'}
                                                            color="secondary"
                                                            onClick={() => openModal(partner.name, partner.id)}
                                                        >
                                                            <DeleteIcon className={classes.editIcon} />
                                                            <span>xóa</span>
                                                        </Button>
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={12} align="center">
                                                Không tìm thấy nhà cung cấp
                                            </TableCell>
                                        </TableRow>
                                    )
                                ) : (
                                    <TableRow style={{ height: 53 * 5 }}>
                                        <TableCell colSpan={12}>
                                            <Box
                                                width={'100%'}
                                                display="flex"
                                                justifyContent={'center'}
                                                alignItems="center"
                                                position={'absolute'}
                                            >
                                                <CircularProgress />
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        sx={{
                            '.MuiTablePagination-selectLabel': {
                                marginBottom: '0px',
                            },
                            '.MuiTablePagination-displayedRows': {
                                marginBottom: '0px',
                            },
                            '.MuiSelect-select': {
                                lineHeight: '1.5',
                            },
                        }}
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={count}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Widget>
            </Grid>
        </Grid>
    );
};

export default ListPartner;
