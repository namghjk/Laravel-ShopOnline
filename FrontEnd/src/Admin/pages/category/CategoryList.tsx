import React, { useEffect } from 'react';

// Components
import {
    Box,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
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

// Models

//Styles
import useStyles from './styles';

// Icons
import { Add as AddIcon, Edit as EditIcon, Close as CloseIcon } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';

// Contexts
import { useCategoryDispatch, useCategorytState } from '../../store/context/CategoryContext';
import { getCategories, deleteCategory } from '../../store/action/CategoryAction';

const CategoryList = () => {
    // Navigate
    const navigate = useNavigate();
    // Styles
    const classes = useStyles();

    // States
    const categoryState = useCategorytState();
    const categoryDispatch = useCategoryDispatch();

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const [listCategories, setListCategories] = React.useState(categoryState.categories);
    const [count, setCount] = React.useState(categoryState.total_records);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [deleted, setDeleted] = React.useState({
        id: '',
        name: '',
    });
    const [loading, setLoading] = React.useState(false);

    const getListCategories = async () => {
        await getCategories(categoryDispatch, page + 1, rowsPerPage);
    };
    // Effects
    useEffect(() => {
        getListCategories();
    }, [page, rowsPerPage]);

    useEffect(() => {
        setListCategories(categoryState.categories);
        setCount(categoryState.total_records);
    }, [categoryState]);

    // Handles

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleEdit = (slug: string) => {
        navigate('./edit/' + slug);
    };

    const handleDelete = async () => {
        setLoading(true);
        const response = await deleteCategory(categoryDispatch, deleted.id);
        if (response?.code === 200) {
            sendNotification(response.message, 'success');
            setModalOpen(false);
            getListCategories();
        } else {
            sendNotification(response?.message, 'error');
            setModalOpen(false);
        }
        setLoading(false);
    };

    const openModal = (name: string, id: string) => {
        setDeleted({ name: name, id: id });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Grid container spacing={3}>
            <CustomToast />
            <Dialog open={modalOpen} onClose={closeModal} scroll={'body'} aria-labelledby="scroll-dialog-title">
                <DialogTitle id="alert-dialog-title">Bạn có muốn xóa danh mục này?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Danh mục "{deleted.name}" sẽ bị xóa.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal} size="small" variant="outlined" color="primary">
                        hủy
                    </Button>
                    <Button
                        onClick={handleDelete}
                        size="small"
                        variant="outlined"
                        loading={loading}
                        loadingIndicator="Deleting…"
                        color="info"
                        autoFocus
                    >
                        xác nhận
                    </Button>
                </DialogActions>
            </Dialog>
            <Grid item xs={12}>
                <Widget title="Quản lý danh mục">
                    {/* <Grid container spacing={3}>
                        <Grid item xs={6} justifyContent="center" display={'flex'}>
                            <TextField
                                id="RoleId"
                                label="Category Name"
                                name="RoleId"
                                variant="outlined"
                                size="small"
                                style={{ width: '90%' }}
                            />
                        </Grid>
                        <Grid item xs={6} justifyContent="center" display={'flex'}>
                            <FormControl sx={{ width: '90%' }} size="small">
                                <InputLabel id="active-select">Active</InputLabel>
                                <Select
                                    labelId="active-select"
                                    id="active-select"
                                    // value={age}
                                    label="Active"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'true'}>True</MenuItem>
                                    <MenuItem value={'false'}>False</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} display={'flex'} alignItems="center" justifyContent="center">
                            <Button variant={'contained'} color={'primary'}>
                                Search
                            </Button>
                        </Grid>
                    </Grid> */}
                </Widget>
            </Grid>
            <Grid item xs={12}>
                <Widget>
                    <Box display={'flex'} justifyContent="flex-end">
                        {/* <Link href="#/app/user/add" underline="none" color="#fff"> */}
                        <Link to="../category/create">
                            <Button variant={'contained'} color={'success'}>
                                <Box mr={1} display={'flex'}>
                                    <AddIcon />
                                </Box>
                                Thêm mới
                            </Button>
                        </Link>
                        {/* </Link> */}
                    </Box>
                    <TableContainer>
                        <Table className="mb-0">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableHeader}>STT</TableCell>
                                    <TableCell className={classes.tableHeader}>Tên danh mục</TableCell>
                                    <TableCell className={classes.tableHeader}>Slug</TableCell>
                                    <TableCell className={classes.tableHeader}>Danh mục cha</TableCell>
                                    <TableCell className={classes.tableHeader}>Chức năng</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {!categoryState.isLoading ? (
                                    listCategories.map((category, index) => (
                                        <TableRow key={category.id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{category.name}</TableCell>
                                            <TableCell>{category.slug}</TableCell>
                                            {/* <TableCell>
                                            <CloseIcon className={classes.unActiveStatus} />
                                            </TableCell> */}
                                            <TableCell>{category.parent_name}</TableCell>
                                            <TableCell>
                                                <Box display={'flex'} alignItems="center">
                                                    <Button
                                                        variant={'contained'}
                                                        color="primary"
                                                        onClick={() => handleEdit(category.slug)}
                                                        style={{ marginRight: 8 }}
                                                    >
                                                        <EditIcon className={classes.editIcon} />
                                                        Sửa
                                                    </Button>
                                                    <Button
                                                        variant={'contained'}
                                                        color="secondary"
                                                        onClick={() => openModal(category.name, category.id)}
                                                    >
                                                        <DeleteIcon className={classes.editIcon} />
                                                        <span>Xóa</span>
                                                    </Button>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))
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

export default CategoryList;
