import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import { useNavigate, useLocation } from 'react-router-dom';
import useStyles from './styles';
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';

import { Button, Typography } from '../../components/Wrappers/Wrappers';
import Widget from '../../components/Widget/Widget';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { RoleModel } from '../../models/RoleModel';
import { getAllRoles } from '../../store/action/PermissionAction';
import { createUser, giveRoleToUser } from '../../store/action/UserAction';
import { CircularProgress } from '@mui/material';

type NewAccount = {
    name: string;
    username: string;
    password: string;
    is_admin: number;
};

const AddUser = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = React.useState(false);
    const [roleSelected, setRoleSelected] = React.useState('');
    const [detail, setDetail] = React.useState({
        id: '',
        name: '',
        username: '',
    });
    const [newUser, setNewUser] = React.useState<NewAccount>({
        name: '',
        username: '',
        password: '',
        is_admin: 1,
    });
    const [roles, setRoles] = React.useState<RoleModel[]>([]);

    const getRoles = async () => {
        setLoading(true);
        const response = await getAllRoles();
        if (response.code === 200) {
            setRoles(response.data);
        }
        setLoading(false);
    };

    React.useEffect(() => {
        if (!isCreate) {
            getRoles();
            const { id, name, username, role } = location.state;
            setDetail({ id: id, name: name, username: username });
            setRoleSelected(role);
        }
    }, []);
    React.useEffect(() => {}, [roleSelected]);
    const isCreate = window.location.pathname === '/admin/user/new';
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        });
    }
    function handleChangeRole(e: SelectChangeEvent<string>) {
        setRoleSelected(e.target.value);
    }
    const classes = useStyles();

    const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await createUser(newUser);
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            navigate('/admin/user');
        } else {
            sendNotification(response.message, 'success');
        }
    };
    const handleGiveRole = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await giveRoleToUser({ user_id: detail.id, role_name: roleSelected });
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            navigate('/admin/user');
        } else {
            sendNotification(response.message, 'success');
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Widget>
                    <CustomToast />
                    <Grid item justifyContent="center" container>
                        <form onSubmit={(e) => (isCreate ? handleCreate(e) : handleGiveRole(e))}>
                            {loading ? (
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <CircularProgress size={26} />
                                </Box>
                            ) : (
                                <Box display={'flex'} flexDirection={'column'} width={600}>
                                    <Typography variant={'h5'} weight={'medium'} style={{ marginBottom: 30 }}>
                                        {isCreate ? 'Tạo người dùng mới' : 'Phân quyền cho tài khoản'}
                                    </Typography>
                                    <TextField
                                        id="name"
                                        label="Tên người dùng"
                                        size="small"
                                        onChange={handleChange}
                                        name="name"
                                        value={isCreate ? newUser.name : detail.name}
                                        variant="outlined"
                                        style={{ marginBottom: 20 }}
                                        required
                                        disabled={!isCreate}
                                        helperText="Vui lòng điền tên người dùng !"
                                    />
                                    <TextField
                                        id="username"
                                        label="Tên đăng nhập"
                                        onChange={handleChange}
                                        value={isCreate ? newUser.username : detail.username}
                                        name="username"
                                        size="small"
                                        variant="outlined"
                                        style={{ marginBottom: 20 }}
                                        required
                                        disabled={!isCreate}
                                        helperText={'Vui lòng điền tên đăng nhập!'}
                                    />
                                    {isCreate && (
                                        <TextField
                                            id="password"
                                            label="Mậ khẩu"
                                            onChange={handleChange}
                                            name="password"
                                            size="small"
                                            value={newUser.password || ''}
                                            variant="outlined"
                                            style={{ marginBottom: 20 }}
                                            helperText={'Nhập mật khẩu'}
                                            required
                                            type={'password'}
                                        />
                                    )}
                                    {!isCreate && (
                                        <FormControl variant="outlined" style={{ marginBottom: 20 }} size="small">
                                            <InputLabel id="role">Quyền</InputLabel>
                                            <Select
                                                labelId="role"
                                                id="demo-simple-select-outlined"
                                                value={roleSelected}
                                                defaultValue="User"
                                                name="role"
                                                onChange={handleChangeRole}
                                                label="Role"
                                            >
                                                {roles.length &&
                                                    roles.map((role, index) => (
                                                        <MenuItem key={index} value={role.name}>
                                                            {role.name}
                                                        </MenuItem>
                                                    ))}
                                            </Select>
                                            <FormHelperText id={'demo-simple-select-outlined'}>
                                                Vui lòng chọn quyền cho tài khoản!
                                            </FormHelperText>
                                        </FormControl>
                                    )}

                                    <div>
                                        <div>
                                            <Box display={'flex'} justifyContent={'space-between'}>
                                                <Button
                                                    onClick={() => navigate(-1)}
                                                    type="button"
                                                    variant={'outlined'}
                                                    color={'primary'}
                                                >
                                                    quay lại
                                                </Button>
                                                <Button type="submit" variant="contained" color="primary">
                                                    {isCreate ? 'tạo tài khoản' : 'Phân quyền'}
                                                </Button>
                                            </Box>
                                        </div>
                                    </div>
                                </Box>
                            )}
                        </form>
                    </Grid>
                </Widget>
            </Grid>
        </Grid>
    );
};

export default AddUser;
