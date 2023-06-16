import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Models
// Components
import { Box, CircularProgress, Grid, TextField } from '@mui/material';
import { Button } from '../../components/Wrappers/Wrappers';
import Widget from '../../components/Widget/Widget';
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';

//Styles
import useStyles from './styles';

// Icons
import { Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material';

// Contexts

// Actions
import { createPartner, getPartnerDetail, updatePartner } from '../../store/action/PartnerAction';

const AddPartner = () => {
    // Navigate and params
    const navigate = useNavigate();
    const { id = '' } = useParams();
    // Styles
    const classes = useStyles();

    // States
    const isCreate = window.location.pathname === '/admin/partner/new';
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [partnerEdit, setPartnerEdit] = useState({
        id: '',
        name: '',
        phone_number: '',
        address: '',
    });
    const [newPartner, setNewPartner] = useState({
        name: '',
        phone_number: '',
        address: '',
    });

    const getDetail = async () => {
        const response = await getPartnerDetail(id);
        if (response.code === 200) {
            setPartnerEdit(response.data);
        }
    };

    // Effects
    useEffect(() => {
        const doInnit = async () => {
            if (!isCreate) {
                await getDetail();
            }
            setLoading(false);
        };
        doInnit();
    }, []);

    // Handles

    const createNewPartner = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNewPartner({
            ...newPartner,
            [e.target.id]: e.target.value,
        });
    };
    const editPartner = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (partnerEdit) {
            setPartnerEdit({
                ...partnerEdit,
                [e.target.id]: e.target.value,
            });
        }
    };

    const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        setSaving(true);
        e.preventDefault();
        const response = await createPartner(newPartner);
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            navigate(-1);
        } else {
            sendNotification(response?.message, 'error');
        }
        setSaving(false);
    };

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await updatePartner(partnerEdit);
        if (response?.code === 200) {
            sendNotification(response.message, 'success');
            navigate(-1);
        } else {
            sendNotification(response?.message, 'error');
        }
    };

    return (
        <Grid container>
            <CustomToast />
            <Grid item xs={12}>
                <Widget title={isCreate ? 'Thêm mới nhà cung cấp' : 'Sửa thông tin NCC'}>
                    <Box display={'flex'} justifyContent="center" alignItems={'center'}>
                        <form onSubmit={(e) => (isCreate ? handleCreate(e) : handleUpdate(e))}>
                            {loading ? (
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <CircularProgress size={26} />
                                </Box>
                            ) : (
                                <Box display="flex" flexDirection={'column'} width={700}>
                                    <TextField
                                        id="name"
                                        label="Tên NCC"
                                        name="name"
                                        size="small"
                                        required
                                        variant="outlined"
                                        style={{ marginBottom: 20 }}
                                        value={isCreate ? newPartner.name : partnerEdit.name || ''}
                                        onChange={(e) => (isCreate ? createNewPartner(e) : editPartner(e))}
                                    />
                                    <TextField
                                        id="phone_number"
                                        label="Số điện thoại"
                                        size="small"
                                        name="phone_number"
                                        variant="outlined"
                                        style={{ marginBottom: 20 }}
                                        required
                                        value={isCreate ? newPartner.phone_number : partnerEdit.phone_number || ''}
                                        onChange={(e) => (isCreate ? createNewPartner(e) : editPartner(e))}
                                    />

                                    <TextField
                                        id="address"
                                        label="Địa chỉ"
                                        size="small"
                                        name="address"
                                        variant="outlined"
                                        style={{ marginBottom: 20 }}
                                        required
                                        value={isCreate ? newPartner.address : partnerEdit.address || ''}
                                        onChange={(e) => (isCreate ? createNewPartner(e) : editPartner(e))}
                                    />
                                    <Box display={'flex'} alignItems={'center'} marginTop={3}>
                                        <Button
                                            variant={'contained'}
                                            color={'success'}
                                            style={{ marginRight: '25px' }}
                                            startIcon={<SaveIcon />}
                                            loading={saving}
                                            loadingPosition="start"
                                            type="submit"
                                        >
                                            {isCreate ? 'lưu' : 'sửa'}
                                        </Button>

                                        <Button
                                            variant={'contained'}
                                            color={'primary'}
                                            type="button"
                                            onClick={() => navigate(-1)}
                                        >
                                            hủy
                                        </Button>
                                    </Box>
                                </Box>
                            )}
                        </form>
                    </Box>
                </Widget>
            </Grid>
        </Grid>
    );
};

export default AddPartner;
