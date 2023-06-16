/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Grid,
    Box,
    InputAdornment,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField as Input,
} from '@mui/material';
import moment from 'moment';
import Widget from '../../components/Widget/Widget';
import { Button } from '../../components/Wrappers/Wrappers';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';
import { Typography, Chip, Avatar } from '../../components/Wrappers/Wrappers';
import { UserDetailsModel } from '../../models/UserModel';
import useStyles from './styles';
// Icons
import {
    Add as AddIcon,
    GetApp as DownloadIcon,
    Search as SearchIcon,
    CreateOutlined as CreateIcon,
    HelpOutline as HelpIcon,
    Close as CloseIcon,
} from '@mui/icons-material';
import { DeleteOutline } from '@mui/icons-material';

import mock from './mock';

import { getAllUsers, lockUser, unlockUser } from '../../store/action/UserAction';
import { BASE_URL } from '../../utils/config';

// components
const states: any = {
    sent: 'success',
    pending: 'warning',
    declined: 'secondary',
};

const colors = ['primary', 'secondary', 'warning', 'success', 'info'];

const UserList = () => {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(0);
    // eslint-disable-next-line no-unused-vars
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [usersRows, setUsersRows] = React.useState([]);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [listUser, setListUser] = React.useState<UserDetailsModel[]>([]);
    const [userLock, setUserLock] = React.useState('');
    const [lock, setLock] = React.useState(true);

    const openModal = () => {
        setModalOpen(true);
    };

    const getListUsers = async () => {
        const response = await getAllUsers();
        if (response.code === 200) {
            setListUser(response.data);
        }
    };

    React.useEffect(() => {
        getListUsers();
    }, []);
    React.useEffect(() => {
        console.log(lock);
    }, [lock]);

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleDelete = () => {};

    const classes = useStyles();

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSearch = (e: any) => {
        const newArr = usersRows.filter((c: any) => {
            return c.name.toLowerCase().includes(e.currentTarget.value.toLowerCase());
        });
        setUsersRows(newArr);
    };
    const handleLockUser = async () => {
        if (userLock !== '') {
            const response = await lockUser(userLock);
            if (response.code === 200) {
                sendNotification(response.message, 'success');
                getListUsers();
            } else {
                sendNotification(response.message, 'error');
            }
            setUserLock('');
            setModalOpen(false);
        }
    };
    const handleUnLockUser = async () => {
        if (userLock !== '') {
            const response = await unlockUser(userLock);
            if (response.code === 200) {
                sendNotification(response.message, 'success');
                getListUsers();
            } else {
                sendNotification(response.message, 'error');
            }
            setUserLock('');
            setModalOpen(false);
        }
    };
    const handleSelectUser = (user: UserDetailsModel) => {
        setModalOpen(true);
        setUserLock(user.id);
        if (user.deleted_at) {
            setLock(false);
        } else {
            setLock(true);
        }
    };
    return (
        <Grid container spacing={3}>
            <CustomToast />

            <Dialog open={modalOpen} onClose={closeModal} scroll={'body'} aria-labelledby="scroll-dialog-title">
                <DialogTitle id="alert-dialog-title">{lock ? 'Khóa tài khoản' : 'Mở khóa tài khoản'} </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {lock
                            ? 'Bạn có chắc khóa tài khoản này. Sau khi tài khoản bị khóa, người dùng không thể đăng nhập vô tài khoản này!'
                            : 'Tài khoản sẽ được mở khóa!'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal} color="primary">
                        Hủy
                    </Button>
                    <Button onClick={() => (lock ? handleLockUser() : handleUnLockUser())} color="primary" autoFocus>
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>

            <Grid item xs={12}>
                <Widget inheritHeight>
                    <Box justifyContent={'space-between'} display={'flex'} alignItems={'center'}>
                        <Box>
                            <Link to="../user/new">
                                <Button variant={'contained'} color={'success'}>
                                    <Box mr={1} display={'flex'}>
                                        <AddIcon />
                                    </Box>
                                    Tạo tài khoản
                                </Button>
                            </Link>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
                            <Input
                                style={{ marginTop: 16 }}
                                sx={{
                                    '.MuiInputBase-input': {
                                        padding: '8px 14px',
                                    },
                                }}
                                id="search-field"
                                label="Tìm kiếm"
                                margin="dense"
                                variant="outlined"
                                onChange={(e) => handleSearch(e)}
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
                <Widget inheritHeight noBodyPadding>
                    <TableContainer>
                        <Table className="mb-0">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">STT</TableCell>
                                    <TableCell>TÊN</TableCell>
                                    <TableCell>TÊN ĐĂNG NHẬP</TableCell>
                                    <TableCell>CHỨC NĂNG</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listUser.length ? (
                                    listUser.map((item, index) => (
                                        <TableRow key={item.id}>
                                            <TableCell align="center">{index + 1}</TableCell>
                                            <TableCell className="fw-normal">
                                                <Box display={'flex'} alignItems={'center'}>
                                                    <Avatar
                                                        style={{ marginRight: 20 }}
                                                        color={colors[Math.floor(Math.random() * colors.length)]}
                                                        src={item.avatar && `${BASE_URL}/${item.avatar}`}
                                                    ></Avatar>
                                                    {item.name}
                                                </Box>
                                            </TableCell>
                                            <TableCell>{item.username}</TableCell>

                                            <TableCell>
                                                <Box display={'flex'} alignItems="center">
                                                    <Button
                                                        variant={'contained'}
                                                        color="primary"
                                                        style={{ marginRight: 8 }}
                                                        onClick={() =>
                                                            navigate('/admin/user/edit', {
                                                                state: {
                                                                    id: item.id,
                                                                    name: item.name,
                                                                    username: item.username,
                                                                    role: (item.roles && item.roles[0].name) || '',
                                                                },
                                                            })
                                                        }
                                                    >
                                                        chỉnh sửa
                                                    </Button>
                                                    <Button
                                                        onClick={() => handleSelectUser(item)}
                                                        variant={'contained'}
                                                        color={item.deleted_at ? 'info' : 'secondary'}
                                                    >
                                                        {item.deleted_at ? 'mở khóa' : 'khóa'}
                                                    </Button>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell align="center" colSpan={12}>
                                            Không tìm thấy tài khoản nào
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <TablePagination
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
                        count={100}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    /> */}
                </Widget>
            </Grid>
        </Grid>
    );
};

export default UserList;
