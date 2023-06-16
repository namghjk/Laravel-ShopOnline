import React, { useEffect } from 'react';
import moment from 'moment';

// Components
import {
    Box,
    CircularProgress,
    Grid,
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
import { formatNumber } from '../../utils/formatHelper';

// Models
import { ImportDetailModel } from '../../models/ImportModel';

//Styles
import useStyles from './styles';

// Icons
import { Add as AddIcon, Edit as EditIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Contexts
import { getDetail } from '../../store/action/ImportAction';
import { BASE_URL } from '../../utils/config';

const ImportDetails = () => {
    // Navigate
    const navigate = useNavigate();
    const location = useLocation();
    const { id, partner_name, create_by_name, total, note, created_at } = location.state;
    // Styles
    const classes = useStyles();

    // States

    const [importDetails, setImportDetails] = React.useState<ImportDetailModel[]>([]);

    const [loading, setLoading] = React.useState(false);

    const getImportDetail = async () => {
        setLoading(true);
        const response = await getDetail(id);
        if (response.code === 200) {
            setImportDetails(response.data);
        }
        setLoading(false);
    };
    // Effects
    useEffect(() => {
        getImportDetail();
    }, []);

    return (
        <Grid container spacing={3}>
            <CustomToast />

            <Grid item xs={12}>
                <Widget title="Chi tiết nhập kho">
                    <Box display={'flex'} justifyContent="center" alignItems={'center'}>
                        <Box display="flex" flexDirection={'column'} width={700}>
                            <TextField
                                id="partner_name"
                                label="Tên Nhà cung cấp"
                                name="partner_name"
                                size="small"
                                variant="outlined"
                                value={partner_name || ''}
                                disabled
                                style={{ marginBottom: 20 }}
                            />
                            <TextField
                                id="create_by_name"
                                label="Người tạo"
                                name="create_by_name"
                                size="small"
                                variant="outlined"
                                disabled
                                value={create_by_name || ''}
                                style={{ marginBottom: 20 }}
                            />
                            <TextField
                                id="created_at"
                                label="Ngày tạo"
                                name="created_at"
                                size="small"
                                variant="outlined"
                                disabled
                                value={created_at || ''}
                                style={{ marginBottom: 20 }}
                            />
                            <TextField
                                id="total"
                                label="Tổng tiền"
                                name="total"
                                size="small"
                                variant="outlined"
                                disabled
                                value={formatNumber(Number(total), 2) + 'đ' || ''}
                                style={{ marginBottom: 20 }}
                            />
                            <TextField
                                id="note"
                                label="Ghi chú"
                                name="note"
                                size="small"
                                variant="outlined"
                                multiline
                                minRows={5}
                                disabled
                                value={note || ''}
                                style={{ marginBottom: 20 }}
                            />
                        </Box>
                    </Box>
                </Widget>
            </Grid>
            <Grid item xs={12}>
                <Widget>
                    <TableContainer>
                        <Table className="mb-0">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableHeader}>STT</TableCell>
                                    <TableCell className={classes.tableHeader}>Hình ảnh</TableCell>
                                    <TableCell className={classes.tableHeader}>Tên sản phẩm</TableCell>
                                    <TableCell className={classes.tableHeader}>Số lượng</TableCell>
                                    <TableCell className={classes.tableHeader}>Giá</TableCell>
                                    <TableCell className={classes.tableHeader}>Tổng tiền</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {!loading ? (
                                    importDetails.length ? (
                                        importDetails.map((item, index) => (
                                            <TableRow key={item.id}>
                                                <TableCell>{index + 1}</TableCell>
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
                                                <TableCell>{formatNumber(Number(item.total), 2)}đ</TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={12} align="center">
                                                Không tìm thấy chi tiết nhập
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
                </Widget>
            </Grid>
        </Grid>
    );
};

export default ImportDetails;
