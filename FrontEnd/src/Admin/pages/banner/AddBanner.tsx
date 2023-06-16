import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// Components
import { Box, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import { Typography, Button } from '../../components/Wrappers/Wrappers';
import Widget from '../../components/Widget/Widget';
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
//Styles
import useStyles from './styles';
// Actions
import { createBanner, updateBanner } from '../../store/action/BannnerAction';
import { BASE_URL } from '../../utils/config';

const AddBanner = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isCreate = window.location.pathname === '/admin/banner/add';
    // style
    const classes = useStyles();
    const [image, setImage] = useState({
        file: null as File | null,
        path: '',
    });
    const [order, setOrder] = useState('');
    const [id, setId] = useState('');
    const [active, setActive] = useState('');
    const [bannerActive, setBannerActive] = useState(active);

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const preview = file ? URL.createObjectURL(file) : '';
            setImage({ file: file, path: preview });
        }
    };

    const handleChangeOrder = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setOrder(e.target.value);
    };

    useEffect(() => {
        if (!isCreate) {
            const { id, order_number, image_url, active } = location.state;
            setImage({ ...image, path: image_url });
            setOrder(order_number);
            setId(id);
            setActive(active);
        }
    }, []);

    const handleAddBanner = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const banner = new FormData();
        if (image.file) {
            banner.append('image', image.file as File);
        }
        banner.append('order', order);
        const response = await createBanner(banner);
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            navigate(-1);
        } else {
            sendNotification(response.message, 'error');
        }
    };

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const banner = new FormData();
        banner.append('id', id);
        banner.append('order', order);
        banner.append('active', bannerActive);
        const response = await updateBanner(banner);
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            navigate(-1);
        } else {
            sendNotification(response.message, 'error');
        }
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <CustomToast />
                <Widget title={isCreate ? 'Thêm Banner' : 'Sửa Banner'}>
                    <Box display={'flex'} justifyContent="center" alignItems={'center'}>
                        <form onSubmit={(e) => (isCreate ? handleAddBanner(e) : handleUpdate(e))}>
                            <Box display="flex" flexDirection={'column'} width={700}>
                                <TextField
                                    id="order"
                                    label="Order"
                                    name="order"
                                    variant="outlined"
                                    size="small"
                                    value={order}
                                    onChange={handleChangeOrder}
                                    style={{ marginBottom: 35 }}
                                    required
                                />
                                <Box>
                                    <Button
                                        variant={'outlined'}
                                        color={'primary'}
                                        component="label"
                                        disabled={!isCreate}
                                        style={{ marginRight: 8 }}
                                    >
                                        <CameraAltIcon />
                                        Tải ảnh
                                        <input type="file" hidden accept="image/*" onChange={handleChangeImage} />
                                    </Button>
                                </Box>

                                <Box className={classes.immageBox} marginTop={3}>
                                    {image.path ? (
                                        <img
                                            src={isCreate ? image.path : BASE_URL + '/' + image.path}
                                            className={classes.imagePreview}
                                        />
                                    ) : (
                                        <div className={classes.imageEmpty}>
                                            <AddPhotoAlternateIcon className={classes.emptyIcon} />
                                            <span>Không có hình ảnh nào được chọn !</span>
                                        </div>
                                    )}
                                </Box>
                                <p style={{ color: '#ccc', marginBottom: '4px' }}>
                                    <strong>Tên:</strong>
                                    {(image.file && image.file.name) || (image.path && image.path)}
                                </p>
                                {image.file && (
                                    <p style={{ color: '#ccc' }}>
                                        <strong>Kích cỡ:</strong> {image.file && image.file.size}
                                    </p>
                                )}
                                {!isCreate && (
                                    <div>
                                        <Typography variant="body1">Trạng thái</Typography>
                                        <RadioGroup
                                            row
                                            aria-labelledby="active-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel
                                                value="1"
                                                control={<Radio />}
                                                checked={bannerActive === '1'}
                                                onChange={(e) => setBannerActive((e.target as HTMLInputElement).value)}
                                                label={
                                                    <Typography variant="body1" size="sm">
                                                        Hiện
                                                    </Typography>
                                                }
                                            />
                                            <FormControlLabel
                                                value="0"
                                                control={<Radio />}
                                                checked={bannerActive === '0'}
                                                onChange={(e) => setBannerActive((e.target as HTMLInputElement).value)}
                                                label={
                                                    <Typography variant="body1" size="sm">
                                                        Ẩn
                                                    </Typography>
                                                }
                                            />
                                        </RadioGroup>
                                    </div>
                                )}
                                <Box display={'flex'} alignItems={'center'} marginTop={3}>
                                    <Button
                                        type="submit"
                                        variant={'contained'}
                                        color={'success'}
                                        style={{ marginRight: '25px' }}
                                    >
                                        {isCreate ? 'Lưu' : 'Cập nhật'}
                                    </Button>
                                    <Button type="button" variant={'contained'} color={'primary'}>
                                        quay lại
                                    </Button>
                                </Box>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}></Grid>
                                </Grid>
                            </Box>
                        </form>
                    </Box>
                </Widget>
            </Grid>
        </Grid>
    );
};

export default AddBanner;
