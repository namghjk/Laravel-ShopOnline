import React, { useEffect, useState } from 'react';

// Components
import {
    Box,
    Grid,
    InputAdornment,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Typography, Button } from '../../components/Wrappers/Wrappers';
import Widget from '../../components/Widget/Widget';
import { Link } from 'react-router-dom';
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';
// Icons
import { Add as AddIcon, Edit as EditIcon, Search as SearchIcon } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
//Styles
import useStyles from './styles';
// Actions
import { getAllRoles, deleteRole } from '../../store/action/PermissionAction';
// Models
import { RoleModel } from '../../models/RoleModel';

const UserRole = () => {
    const classes = useStyles();
    const [roles, setRoles] = useState<RoleModel[]>([]);
    const [loading, setLoading] = useState({ id: 0, loading: false });

    const getRoles = async () => {
        const response = await getAllRoles();
        if (response.code === 200) {
            setRoles(response.data);
        }
    };

    useEffect(() => {
        getRoles();
    }, []);

    const handleDelete = async (id: number) => {
        setLoading({ id: id, loading: true });
        const response = await deleteRole(id);
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            getRoles();
        } else {
            sendNotification(response.message, 'error');
        }
        setLoading({ id: 0, loading: false });
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <CustomToast />
                <Widget variant="h5" title="Nhóm quyền">
                    <Box justifyContent={'space-between'} display={'flex'} alignItems={'center'}>
                        <Box>
                            <Link to="./create">
                                <Button variant={'contained'} color={'success'}>
                                    <Box mr={1} display={'flex'}>
                                        <AddIcon />
                                    </Box>
                                    Thêm mới
                                </Button>
                            </Link>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
                            <TextField
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
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">STT</TableCell>
                                    {/* <TableCell>Mã nhóm</TableCell> */}
                                    <TableCell>Tên nhóm người dùng</TableCell>
                                    {/* <TableCell align="center">Trạng thái</TableCell> */}
                                    <TableCell>Chức năng</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {roles.length ? (
                                    roles.map((role, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="center">{role.id}</TableCell>
                                            <TableCell>{role.name}</TableCell>
                                            <TableCell>
                                                <Box display={'flex'} alignItems="center">
                                                    <Button
                                                        variant={'contained'}
                                                        color="primary"
                                                        style={{ marginRight: 8 }}
                                                    >
                                                        <EditIcon className={classes.editIcon} />
                                                        Sửa
                                                    </Button>
                                                    <Button
                                                        loading={loading.id === role.id && loading.loading}
                                                        variant={'contained'}
                                                        color="secondary"
                                                    >
                                                        <DeleteIcon className={classes.editIcon} />
                                                        <span>Xóa</span>
                                                    </Button>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell align="center" colSpan={12}>
                                            Không tìm thấy nhóm quyền nào
                                        </TableCell>
                                    </TableRow>
                                )}
                                {/* <TableRow>
                                    <TableCell align="center">2</TableCell>
                                    <TableCell>SYSADMIN</TableCell>
                                    <TableCell>System Admin</TableCell>
                                    <TableCell align="center">
                                        <CloseIcon className={classes.unActiveStatus} />
                                    </TableCell>
                                    <TableCell>
                                        <Box display={'flex'} alignItems="center">
                                            <Button variant={'contained'} color="primary" style={{ marginRight: 8 }}>
                                                <EditIcon className={classes.editIcon} />
                                                Edit
                                            </Button>
                                            <Button variant={'contained'} color="secondary">
                                                <DeleteIcon className={classes.editIcon} />
                                                <span>Delete</span>
                                            </Button>
                                        </Box>
                                    </TableCell>
                                </TableRow> */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Widget>
            </Grid>
        </Grid>
    );
};

export default UserRole;
