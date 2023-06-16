import React, { useEffect, useState } from 'react';

// Models
import { CategoryModel } from '../../models/CategoryModel';
// Components
import { Autocomplete, Box, CircularProgress, FormControl, Grid, TextField } from '@mui/material';
import { Typography, Button } from '../../components/Wrappers/Wrappers';
import Widget from '../../components/Widget/Widget';
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';

//Styles
import useStyles from './styles';

// Icons
import { Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material';

// Contexts
import { useCategoryDispatch, useCategorytState } from '../../store/context/CategoryContext';
import { useNavigate, useParams } from 'react-router-dom';

// Actions
import { getCategories, ceateCategory, detailCategory, updateCategory } from '../../store/action/CategoryAction';

type CategoryRequest = {
    name: string;
    parent_id: string;
    order: string;
};

const AddCategory = () => {
    // Navigate and params
    const navigate = useNavigate();
    const { slug = '' } = useParams();
    // Styles
    const classes = useStyles();

    // States
    const isCreate = window.location.pathname === '/admin/category/create';
    const categoryState = useCategorytState();
    const categoryDispatch = useCategoryDispatch();
    const [categoryEdit, setCategoryEdit] = useState<CategoryModel>({
        id: '',
        name: '',
        parent_id: '',
        parent_name: '',
        slug: '',
        order: '',
    });
    const [parent, setParent] = useState<CategoryModel | null>(null);
    const [loading, setLoading] = useState(true);
    const [listCategories, setListCategories] = React.useState(categoryState.categories);
    const [newCategory, setNewCategory] = useState<CategoryRequest>({
        name: '',
        parent_id: '',
        order: '0',
    });

    // Effects

    useEffect(() => {
        const doInit = async () => {
            const getListCategories = async () => {
                await getCategories(categoryDispatch, 1, 30);
            };
            const getDetail = async () => {
                const result = await detailCategory(categoryDispatch, slug);
                setCategoryEdit(result);
            };
            if (!isCreate) {
                await getDetail();
            }
            await getListCategories();
            setLoading(false);
        };
        doInit();
    }, []);

    useEffect(() => {
        setListCategories(categoryState.categories);
        if (!isCreate) {
            const parentCategory = categoryState.categories.filter((c) => c.id === categoryEdit.parent_id);
            if (parentCategory) {
                setParent(parentCategory[0]);
            }
        }
    }, [categoryState]);

    useEffect(() => {
        if (categoryState.create_category.data && categoryState.create_category.issuccess) {
            sendNotification(categoryState.create_category.mesage, 'success');
            categoryDispatch({ type: 'RESET_CREATE' });
            navigate(-1);
        } else if (categoryState.create_category.data && !categoryState.create_category.issuccess) {
            sendNotification(categoryState.create_category.data && categoryState.create_category.mesage, 'error');
        }
    }, [categoryState.create_category]);

    // Handles

    const createNewCategory = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNewCategory({
            ...newCategory,
            [e.target.id]: e.target.value,
        });
    };
    const editCategory = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (categoryEdit) {
            setCategoryEdit({
                ...categoryEdit,
                [e.target.id]: e.target.value,
            });
        }
    };

    const handleSelectParent = (e: React.SyntheticEvent<Element, Event>, value: CategoryModel | null) => {
        if (isCreate) {
            setNewCategory({
                ...newCategory,
                parent_id: value ? value.id : '',
            });
        } else {
            setCategoryEdit({
                ...categoryEdit,
                parent_id: value ? value.id : '',
            });
        }
        setParent(value);
    };
    const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await ceateCategory(categoryDispatch, newCategory);
    };

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await updateCategory(categoryDispatch, categoryEdit);
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
                <Widget title={isCreate ? 'Thêm danh mục' : 'Sửa danh mục'}>
                    {loading ? (
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <CircularProgress size={26} />
                        </Box>
                    ) : (
                        <Box display={'flex'} justifyContent="center" alignItems={'center'}>
                            <form onSubmit={(e) => (isCreate ? handleCreate(e) : handleUpdate(e))}>
                                <Box display="flex" flexDirection={'column'} width={700}>
                                    {!isCreate && (
                                        <TextField
                                            id="slug"
                                            label="Slug"
                                            name="slug"
                                            size="small"
                                            variant="outlined"
                                            style={{ marginBottom: 20 }}
                                            value={slug}
                                            disabled
                                        />
                                    )}
                                    <TextField
                                        id="name"
                                        label="Tên danh mục"
                                        size="small"
                                        name="categoryName"
                                        variant="outlined"
                                        style={{ marginBottom: 20 }}
                                        required
                                        value={isCreate ? newCategory.name : categoryEdit && categoryEdit.name}
                                        onChange={(e) => (isCreate ? createNewCategory(e) : editCategory(e))}
                                    />

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
                                        renderInput={(params) => <TextField {...params} label="Danh mục cha" />}
                                        value={parent && parent}
                                        onChange={handleSelectParent}
                                    />

                                    <TextField
                                        id="order"
                                        label="Order"
                                        size="small"
                                        type={'number'}
                                        name="order"
                                        variant="outlined"
                                        InputProps={{ inputProps: { min: 0 } }}
                                        style={{ marginBottom: 20 }}
                                        required
                                        value={isCreate ? newCategory.order : categoryEdit.order}
                                        onChange={(e) => (isCreate ? createNewCategory(e) : editCategory(e))}
                                    />
                                    <Box display={'flex'} alignItems={'center'} marginTop={3}>
                                        <Button
                                            variant={'contained'}
                                            color={'success'}
                                            style={{ marginRight: '25px' }}
                                            startIcon={<SaveIcon />}
                                            loading={categoryState.isLoading}
                                            loadingPosition="start"
                                            type="submit"
                                        >
                                            {isCreate ? 'Lưu' : 'Sửa'}
                                        </Button>

                                        <Button
                                            variant={'contained'}
                                            color={'primary'}
                                            type="button"
                                            onClick={() => navigate(-1)}
                                        >
                                            Quay lại
                                        </Button>
                                    </Box>
                                </Box>
                            </form>
                        </Box>
                    )}
                </Widget>
            </Grid>
        </Grid>
    );
};

export default AddCategory;
