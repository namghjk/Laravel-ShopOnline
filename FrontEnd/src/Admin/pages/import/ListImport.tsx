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
} from '@mui/material';
import { Typography, Button } from '../../components/Wrappers/Wrappers';
import Widget from '../../components/Widget/Widget';
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';
import { formatNumber } from '../../utils/formatHelper';
// Models
import { ImportModel } from '../../models/ImportModel';

//Styles
import useStyles from './styles';

// Icons
import { Add as AddIcon, Edit as EditIcon, Close as CloseIcon } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';

// Contexts
import { getAllImport } from '../../store/action/ImportAction';

const ListImport = () => {
    // Navigate
    const navigate = useNavigate();
    // Styles
    const classes = useStyles();

    // States

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const [lisImport, setListImport] = React.useState<ImportModel[]>([]);
    const [count, setCount] = React.useState(0);

    const [loading, setLoading] = React.useState(false);

    const getImport = async () => {
        const response = await getAllImport(page + 1, rowsPerPage);
        if (response.code === 200) {
            setListImport(response.data);
            setCount(response.additionalData.total_records);
        }
    };
    // Effects
    useEffect(() => {
        getImport();
    }, [page, rowsPerPage]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // const handleDelete = async () => {
    //     setLoading(true);
    //     const response = await deletePartner(deleted.id);
    //     if (response.code === 200) {
    //         sendNotification(response.message, 'success');
    //         getPartner();
    //     } else {
    //         sendNotification(response?.message, 'error');
    //     }
    //     setLoading(false);
    // };

    return (
        <Grid container spacing={3}>
            <CustomToast />

            <Grid item xs={12}>
                <Widget title="Quản lý nhập kho">
                    <Link to="/admin/import/new">
                        <Button variant={'contained'} color={'success'}>
                            <Box mr={1} display={'flex'}>
                                <AddIcon />
                            </Box>
                            Nhập kho
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
                                    <TableCell className={classes.tableHeader}>Người tạo</TableCell>
                                    <TableCell className={classes.tableHeader}>Tổng tiền</TableCell>
                                    <TableCell className={classes.tableHeader}>Ngày tạo</TableCell>
                                    <TableCell className={classes.tableHeader}>Chức năng</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {!loading ? (
                                    lisImport.length ? (
                                        lisImport.map((item, index) => (
                                            <TableRow key={item.id}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell>{item.partner_name}</TableCell>
                                                <TableCell>{item.create_by_name}</TableCell>
                                                <TableCell>{formatNumber(Number(item.total), 2)}đ</TableCell>
                                                <TableCell>
                                                    {moment(item.created_at).format('DD/MM/YYYY hh:mm:ss')}
                                                </TableCell>
                                                <TableCell>
                                                    <Box display={'flex'} alignItems="center">
                                                        <Button
                                                            variant={'contained'}
                                                            color="primary"
                                                            style={{ marginRight: 8 }}
                                                            onClick={() =>
                                                                navigate('detail', {
                                                                    state: {
                                                                        id: item.id,
                                                                        partner_name: item.partner_name,
                                                                        create_by_name: item.create_by_name,
                                                                        note: item.note,
                                                                        created_at: item.created_at,
                                                                        total: item.total,
                                                                    },
                                                                })
                                                            }
                                                        >
                                                            Chi tiết
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

export default ListImport;
