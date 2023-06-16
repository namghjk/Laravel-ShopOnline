import React, { useEffect } from 'react';
import {
    Autocomplete,
    Box,
    Checkbox,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    InputAdornment,
    TextField as Input,
    TextField,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

// Models
import { ProductImage, ProductThumbnail, DetailProductResponse, ProductImageResponse } from './Models';
import { CategoryModel } from '../../models/CategoryModel';

//context
import { useCategoryDispatch, useCategorytState } from '../../store/context/CategoryContext';
import { useProductDispatch } from '../../store/context/ProductContext';
import { getCategories } from '../../store/action/CategoryAction';
import { createProduct, getDetail, updateProduct } from '../../store/action/ProductAction';

// icons
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ImageIcon from '@mui/icons-material/Image';
//components
import Widget from '../../components/Widget/Widget';
import { Typography, Button } from '../../components/Wrappers/Wrappers';
import useStyles from './styles';
import { Skeleton } from 'antd';
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';
import { BASE_URL } from '../../utils/config';

const CreateProduct = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { slug = '' } = useParams();

    const categoryState = useCategorytState();
    const categoryDispatch = useCategoryDispatch();
    const productDispatch = useProductDispatch();

    const [localProduct, setLocalProduct] = React.useState({
        slug: '',
        name: '',
        description: '',
        weight: '',
        size: '',
        unit: '',
        quantity: '',
        price: '',
        price_sale: '',
        category_id: '',
        thumbnail: '',
        deleted_images: '',
    });
    const [detailResponse, setDetailResponse] = React.useState<DetailProductResponse>();
    const [isLoaded, setLoaded] = React.useState(true);
    const [save, setSave] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [listCategories, setListCategories] = React.useState(categoryState.categories);
    const [listImage, setListimage] = React.useState<ProductImage[]>([]);
    const [category, setCategory] = React.useState<CategoryModel | null>(null);
    const [thumbnail, setThumbnail] = React.useState<ProductThumbnail>({
        url: '',
        file: null,
    });
    const [imageDeleted, setImageDeleted] = React.useState<string[]>([]);
    const [newProduct, setNewProduct] = React.useState({
        name: '',
        description: '',
        weight: '',
        size: '',
        unit: '',
        quantity: '',
        price: '',
        price_sale: '',
        category_id: '',
        thumbnail: null,
        images: [],
    });

    // lấy danh sách category

    const getListCategories = async () => {
        await getCategories(categoryDispatch, 1, 30);
    };
    const getProductDetail = async () => {
        const result = await getDetail(productDispatch, slug);
        setDetailResponse(result);
        setLocalProduct(result.data);
        result.additionalData.map((i: ProductImageResponse) => {
            setListimage((prev) => [...prev, { img: i.image_url, title: '', file: '', deleted: false, updated: true }]);
        });
    };
    useEffect(() => {
        const doInit = async () => {
            if (!isCreateProduct) {
                await getProductDetail();
            }
            if (categoryState.categories.length === 0) {
                await getListCategories();
                setLoaded(false);
            }
        };
        doInit();
    }, []);

    useEffect(() => {
        setListCategories(categoryState.categories);
        if (!isCreateProduct) {
            const parentCategory = categoryState.categories.filter((c) => c.id === localProduct.category_id);
            if (parentCategory) {
                setCategory(parentCategory[0]);
            }
        }
    }, [categoryState]);

    const editProduct = (e: any) => {
        setLocalProduct({
            ...localProduct,
            [e.target.id]: e.currentTarget.value,
        });
    };

    const editNewProduct = (e: any) => {
        setNewProduct({
            ...newProduct,
            [e.target.id]: e.currentTarget.value,
        });
    };

    const getEditProduct = async () => {
        setSave(true);
        const update = new FormData();
        update.append('slug', slug);
        update.append('name', localProduct.name);
        update.append('description', localProduct.description);
        update.append('weight', localProduct.weight);
        update.append('size', localProduct.size);
        update.append('unit', localProduct.unit);
        update.append('quantity', localProduct.quantity);
        update.append('price', localProduct.price);
        update.append('price_sale', localProduct.price_sale);
        update.append('category_id', localProduct.category_id);
        if (thumbnail.file) {
            update.append('thumbnail', thumbnail.file);
        }
        const imageUpdate = listImage.filter((i) => i.updated === false);
        if (imageUpdate.length) {
            for (let i = 0; i < listImage.length; i++) {
                if (listImage[i].file !== '') {
                    update.append('images[]', listImage[i].file);
                }
            }
        }

        if (imageDeleted.length) {
            update.append('deleted_images', imageDeleted.join('|'));
        }

        const response = await updateProduct(productDispatch, update);
        setSave(false);
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            navigate('/admin/product');
        } else {
            sendNotification(response?.message, 'error');
        }
    };

    const createNewProduct = async () => {
        setSave(true);
        const create = new FormData();

        create.append('name', newProduct.name);
        create.append('description', newProduct.description);
        create.append('weight', newProduct.weight);
        create.append('size', newProduct.size);
        create.append('unit', newProduct.unit);
        create.append('quantity', newProduct.quantity);
        create.append('price', newProduct.price);
        create.append('price_sale', newProduct.price_sale);
        create.append('category_id', newProduct.category_id);
        if (thumbnail.file) {
            create.append('thumbnail', thumbnail.file);
        }
        if (listImage.length) {
            for (let i = 0; i < listImage.length; i++) {
                if (listImage[i].file !== '') {
                    create.append('images[]', listImage[i].file);
                }
            }
        }
        const response = await createProduct(productDispatch, create);
        setSave(false);
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            navigate('/admin/product');
        } else {
            sendNotification(response?.message, 'error');
        }
    };

    const isCreateProduct = window.location.pathname === '/admin/product/create';

    // Dialog image
    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    // thumbnail
    const handlePreviewThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        const preview = file ? URL.createObjectURL(file) : '';
        setThumbnail({
            url: preview,
            file: file,
        });
    };

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            Array.from(files).forEach((file) => {
                setListimage((prev) => [
                    ...prev,
                    { img: URL.createObjectURL(file), title: '', file: file, deleted: false, updated: false },
                ]);
            });
        }
    };

    const handleCheckImage = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const temp = [...listImage];
        temp[index].deleted = !listImage[index].deleted;
        setListimage(temp);
    };

    const deleteImage = () => {
        const temp = listImage.filter((image) => image.deleted === false);
        const deleted = listImage.filter((image) => image.deleted && image.updated);
        if (deleted.length) {
            deleted.forEach((element) => {
                setImageDeleted((prev) => [...prev, element.img]);
            });
        }
        setListimage(temp);
    };

    const handleSelectCategory = (e: React.SyntheticEvent<Element, Event>, value: CategoryModel | null) => {
        if (isCreateProduct) {
            setNewProduct({
                ...newProduct,
                category_id: value ? value.id : '',
            });
        } else {
            setLocalProduct({
                ...localProduct,
                category_id: value ? value.id : '',
            });
        }
        setCategory(value);
    };

    return (
        <>
            <Grid container spacing={3}>
                <CustomToast />
                <Grid item xs={12}>
                    <Widget
                        variant="h5"
                        title={isCreateProduct ? 'Thêm mới sản phẩm' : 'Sửa sản phẩm'}
                        disableWidgetMenu
                    >
                        {isLoaded ? (
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <CircularProgress size={26} />
                            </Box>
                        ) : (
                            <Box display={'flex'} flexDirection="column">
                                <Box display={'flex'} alignItems={'center'}>
                                    <Box width={300} textAlign={'end'} paddingRight={5}>
                                        <Typography variant="h6" className={classes.typographyTitle}>
                                            Ảnh sản phẩm
                                        </Typography>
                                    </Box>
                                    <Box width={500} display="flex">
                                        <Button
                                            variant={'outlined'}
                                            color={'primary'}
                                            component="label"
                                            style={{ marginRight: 8 }}
                                        >
                                            <CameraAltIcon />
                                            Tải ảnh
                                            <input
                                                type="file"
                                                hidden
                                                accept="image/*"
                                                multiple
                                                onChange={handleChangeImage}
                                            />
                                        </Button>
                                        <Button variant={'contained'} color={'info'} onClick={handleClickOpen}>
                                            Xem chi tiết
                                        </Button>
                                    </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Box width={300} textAlign={'end'} paddingRight={5}>
                                        <Typography variant={'h6'} className={classes.typographyTitle}>
                                            Tên sản phẩm
                                        </Typography>
                                    </Box>
                                    <Box width={500}>
                                        <Input
                                            size="small"
                                            id="name"
                                            margin="normal"
                                            variant="outlined"
                                            value={isCreateProduct ? newProduct.name : localProduct.name}
                                            fullWidth
                                            onChange={(e) => (isCreateProduct ? editNewProduct(e) : editProduct(e))}
                                        />
                                    </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Box width={300} textAlign={'end'} paddingRight={5}>
                                        <Typography variant={'h6'} className={classes.typographyTitle}>
                                            Thumbnail
                                        </Typography>
                                    </Box>
                                    <Box width={500}>
                                        <Input
                                            size="small"
                                            id="thumbnail"
                                            margin="normal"
                                            variant="outlined"
                                            type={'file'}
                                            fullWidth
                                            onChange={handlePreviewThumbnail}
                                        />
                                    </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Box width={300} textAlign={'end'} paddingRight={5}></Box>
                                    <Box width={500}>
                                        <Box width={300}>
                                            {thumbnail.file ? (
                                                <img src={thumbnail.url} className={classes.productThumnail} />
                                            ) : localProduct.thumbnail !== '' ? (
                                                <img
                                                    src={`${BASE_URL}/${localProduct.thumbnail}`}
                                                    className={classes.productThumnail}
                                                />
                                            ) : (
                                                <Skeleton.Image />
                                            )}
                                        </Box>
                                    </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Box width={300} textAlign={'end'} paddingRight={5}>
                                        <Typography variant={'h6'} className={classes.typographyTitle}>
                                            Cân nặng
                                        </Typography>
                                    </Box>
                                    <Box width={500}>
                                        <Input
                                            size="small"
                                            id="weight"
                                            margin="normal"
                                            variant="outlined"
                                            type={'number'}
                                            value={isCreateProduct ? newProduct.weight : localProduct.weight}
                                            fullWidth
                                            onChange={(e) => (isCreateProduct ? editNewProduct(e) : editProduct(e))}
                                        />
                                    </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Box width={300} textAlign={'end'} paddingRight={5}>
                                        <Typography variant={'h6'} className={classes.typographyTitle}>
                                            Đơn vị tính
                                        </Typography>
                                    </Box>
                                    <Box width={500}>
                                        <Input
                                            size="small"
                                            id="unit"
                                            margin="normal"
                                            variant="outlined"
                                            value={isCreateProduct ? newProduct.unit : localProduct.unit}
                                            fullWidth
                                            onChange={(e) => (isCreateProduct ? editNewProduct(e) : editProduct(e))}
                                        />
                                    </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Box width={300} textAlign={'end'} paddingRight={5}>
                                        <Typography variant={'h6'} className={classes.typographyTitle}>
                                            Kích cỡ
                                        </Typography>
                                    </Box>
                                    <Box width={500}>
                                        <Input
                                            size="small"
                                            id="size"
                                            margin="normal"
                                            variant="outlined"
                                            value={isCreateProduct ? newProduct.size : localProduct.size}
                                            type={'text'}
                                            fullWidth
                                            onChange={(e) => (isCreateProduct ? editNewProduct(e) : editProduct(e))}
                                        />
                                    </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Box width={300} textAlign={'end'} paddingRight={5}>
                                        <Typography variant={'h6'} className={classes.typographyTitle}>
                                            Số lượng
                                        </Typography>
                                    </Box>
                                    <Box width={500}>
                                        <Input
                                            size="small"
                                            id="quantity"
                                            margin="normal"
                                            variant="outlined"
                                            type={'number'}
                                            value={isCreateProduct ? newProduct.quantity : localProduct.quantity}
                                            fullWidth
                                            onChange={(e) => (isCreateProduct ? editNewProduct(e) : editProduct(e))}
                                        />
                                    </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Box width={300} textAlign={'end'} paddingRight={5}>
                                        <Typography variant={'h6'} className={classes.typographyTitle}>
                                            Giá
                                        </Typography>
                                    </Box>
                                    <Box width={500}>
                                        <Input
                                            size="small"
                                            id="price"
                                            margin="normal"
                                            variant="outlined"
                                            type={'number'}
                                            value={isCreateProduct ? newProduct.price : localProduct.price}
                                            fullWidth
                                            onChange={(e) => (isCreateProduct ? editNewProduct(e) : editProduct(e))}
                                        />
                                    </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Box width={300} textAlign={'end'} paddingRight={5}>
                                        <Typography variant={'h6'} className={classes.typographyTitle}>
                                            Giá khuyến mãi
                                        </Typography>
                                    </Box>
                                    <Box width={500}>
                                        <Input
                                            size="small"
                                            id="price_sale"
                                            margin="normal"
                                            variant="outlined"
                                            value={isCreateProduct ? newProduct.price_sale : localProduct.price_sale}
                                            fullWidth
                                            type={'number'}
                                            onChange={(e) => (isCreateProduct ? editNewProduct(e) : editProduct(e))}
                                        />
                                    </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Box width={300} textAlign={'end'} paddingRight={5}>
                                        <Typography variant={'h6'} className={classes.typographyTitle}>
                                            Danh mục sản phẩm
                                        </Typography>
                                    </Box>
                                    <Box width={500}>
                                        <Autocomplete
                                            disablePortal
                                            id="parent_id"
                                            size="small"
                                            options={listCategories}
                                            getOptionLabel={(option) => option.name}
                                            renderOption={(props, option) => (
                                                <Box component={'li'} {...props} key={option.id}>
                                                    {option.name}
                                                </Box>
                                            )}
                                            style={{ marginBottom: 20 }}
                                            renderInput={(params) => <TextField {...params} />}
                                            value={category || null}
                                            onChange={handleSelectCategory}
                                        />
                                    </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Box width={300} textAlign={'end'} paddingRight={5}>
                                        <Typography variant={'h6'} className={classes.typographyTitle}>
                                            Mô tả
                                        </Typography>
                                    </Box>
                                    <Box width={500}>
                                        <Input
                                            size="small"
                                            id="description"
                                            margin="normal"
                                            variant="outlined"
                                            multiline
                                            minRows={5}
                                            value={isCreateProduct ? newProduct.description : localProduct.description}
                                            fullWidth
                                            onChange={(e) => (isCreateProduct ? editNewProduct(e) : editProduct(e))}
                                        />
                                    </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Grid container spacing={4}>
                                        <Grid item xs={3}></Grid>
                                        <Grid item xs={9}>
                                            <Button
                                                variant={'contained'}
                                                color={'success'}
                                                style={{ marginRight: 8 }}
                                                loading={save}
                                                onClick={() =>
                                                    isCreateProduct ? createNewProduct() : getEditProduct()
                                                }
                                            >
                                                {isCreateProduct ? 'Thêm mới' : 'sửa'}
                                            </Button>
                                            <Button
                                                variant={'contained'}
                                                color={'primary'}
                                                onClick={() => navigate(-1)}
                                            >
                                                quay lại
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        )}
                    </Widget>
                </Grid>
            </Grid>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                // scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Hình ảnh</DialogTitle>
                <DialogContent dividers={true}>
                    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                        {listImage ? (
                            listImage.map((item, index) => (
                                <ImageListItem key={index}>
                                    {item.updated ? (
                                        <img src={`${BASE_URL}/${item.img}`} alt={item.title} loading="lazy" />
                                    ) : (
                                        <img
                                            src={`${item.img}`}
                                            srcSet={`${item.img}`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    )}
                                    <ImageListItemBar
                                        sx={{
                                            background:
                                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                        }}
                                        position="top"
                                        actionPosition="right"
                                        actionIcon={
                                            <Checkbox
                                                onChange={(e) => handleCheckImage(e, index)}
                                                checked={listImage[index].deleted}
                                                checkedIcon={<CheckCircleIcon />}
                                                icon={<RadioButtonUncheckedIcon />}
                                            />
                                        }
                                    />
                                </ImageListItem>
                            ))
                        ) : (
                            <ImageListItem cols={3} rows={2}>
                                <span className={classes.listImageEmpty}>Không có ảnh nào được chọn</span>
                            </ImageListItem>
                        )}
                    </ImageList>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant={'contained'} color={'primary'}>
                        hủy
                    </Button>
                    <Button onClick={deleteImage} variant={'contained'} color={'secondary'}>
                        Xóa
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default CreateProduct;
