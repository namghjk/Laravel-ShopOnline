import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Components
import { Box, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import { Typography, Button } from '../../components/Wrappers/Wrappers';
import Widget from '../../components/Widget/Widget';
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';

//Styles
import useStyles from './styles';

// Actions
import { createRole, getAllPermissions } from '../../store/action/PermissionAction';

const AddRole = () => {
    const navigate = useNavigate();
    const isCreate = window.location.pathname === '/admin/permission/roles/create';
    const [newRole, setNewRole] = useState('');
    const [editRole, setEditRole] = useState('');

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (isCreate) {
            setNewRole(e.target.value);
            navigate(-1);
        } else {
            setEditRole(e.target.value);
        }
    };

    const handleCreate = async () => {
        const response = await createRole({ name: newRole, permissions: '' });
        if (response.code === 200) {
            sendNotification(response.message, 'success');
        } else {
            sendNotification(response.message, 'error');
        }
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <CustomToast />
                <Widget title={isCreate ? 'Thêm nhóm quyền' : 'Sửa nhóm quyền'}>
                    <Box display={'flex'} justifyContent="center" alignItems={'center'}>
                        <Box display="flex" flexDirection={'column'} width={700}>
                            <TextField
                                id="RoleId"
                                label="Mã nhóm quyền"
                                name="RoleId"
                                variant="outlined"
                                size="small"
                                disabled
                                style={{ marginBottom: 35 }}
                            />
                            <TextField
                                id="RoleName"
                                label="Tên nhóm quyền"
                                name="RoleName"
                                variant="outlined"
                                size="small"
                                style={{ marginBottom: 35 }}
                                required
                                value={isCreate ? newRole : editRole}
                                onChange={handleChangeName}
                                // helperText="Please enter your username"
                            />

                            <Box display={'flex'} alignItems={'center'} marginTop={3}>
                                <Button
                                    onClick={handleCreate}
                                    variant={'contained'}
                                    color={'success'}
                                    style={{ marginRight: '25px' }}
                                >
                                    Lưu
                                </Button>
                                <Button variant={'contained'} color={'primary'}>
                                    quay lại
                                </Button>
                            </Box>
                            <Grid container spacing={3}>
                                <Grid item xs={4}></Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Widget>
            </Grid>
        </Grid>
    );
};

export default AddRole;
