import React, { useEffect } from 'react';
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TablePagination,
    TableRow,
    TableHead,
    IconButton,
    Checkbox,
    TableSortLabel,
    Tooltip,
    Toolbar,
    CircularProgress,
    Box,
    InputAdornment,
    TextField as Input,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

//config
import { formatNumber } from '../../utils/formatHelper';
// import config from "../../config";
import { BASE_URL } from '../../utils/config';
// Models
import { ProductModel } from '../../models/ProductModels';

// Material UI icons
import {
    Star as StarIcon,
    Delete as DeleteIcon,
    FilterList as FilterListIcon,
    Close as CloseIcon,
    Search as SearchIcon,
} from '@mui/icons-material';
import { yellow } from '@mui/material/colors';
import { lighten } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import useStyles from './styles';
import cn from 'classnames';

//context
import { useProductState, useProductDispatch } from '../../store/context/ProductContext';
import { getProducts, deleteProduct } from '../../store/action/ProductAction';

// components
import Widget from '../../components/Widget/Widget';
import { Typography, Button, Link } from '../../components/Wrappers/Wrappers';
import { sendNotification, CustomToast } from '../../components/Notification/CustomToast';

function desc(a: any, b: any, orderBy: any) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array: any, cmp: any) {
    const stabilizedThis = array.map((el: any, index: any) => [el, index]);
    stabilizedThis.sort((a: any, b: any) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el: any) => el[0]);
}

function getSorting(order: any, orderBy: any) {
    return order === 'desc' ? (a: any, b: any) => desc(a, b, orderBy) : (a: any, b: any) => -desc(a, b, orderBy);
}

const headCells = [
    {
        id: 'id',
        numeric: true,
        disablePadding: true,
        label: 'STT',
    },
    { id: 'image', numeric: true, disablePadding: false, label: 'Ảnh' },
    { id: 'name', numeric: true, disablePadding: false, label: 'Tên sản phẩm' },
    { id: 'price', numeric: true, disablePadding: false, label: 'Giá' },
    { id: 'price_sale', numeric: true, disablePadding: false, label: 'Giá khuyến mãi' },
    { id: 'category', numeric: true, disablePadding: false, label: 'Danh mục' },
    { id: 'actions', numeric: true, disablePadding: false, label: 'Chức năng' },
];

function EnhancedTableHead(props: any) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property: any) => (event: any) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {/* Xóa nhiều */}
                {/* <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        // checked={numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all rows' }}
                    />
                </TableCell> */}
                {headCells.map((headCell: any) => (
                    <TableCell
                        key={headCell.id}
                        style={{ whiteSpace: 'nowrap' }}
                        align={headCell.numeric ? 'left' : 'right'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={order}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme: any) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                  color: theme.palette.secondary.main,
                  backgroundColor: lighten(theme.palette.secondary.light, 0.85),
              }
            : {
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.secondary.dark,
              },
    title: {
        flex: '1 1 100%',
    },
}));

const EnhancedTableToolbar = ({ numSelected, selected, deleteProducts }: any) => {
    const history = useNavigate();
    const classes = useToolbarStyles();

    return (
        <Toolbar
            className={cn(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
            style={{ marginTop: 8 }}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle">
                    Products
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon onClick={(e: any) => deleteProducts(selected, history, e)} />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton aria-label="filter list">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

function ProductManagement() {
    const classes = useStyles();
    const navigete = useNavigate();
    const productDispatch = useProductDispatch();
    const productState = useProductState();

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('price');
    const [selected, setSelected] = React.useState<any>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [count, setCount] = React.useState(productState.total_records);
    const [backProducts, setBackProducts] = React.useState(productState.products);
    const [isLoaded, setLoaded] = React.useState(false);
    const [deleteLoading, setDeleteLoading] = React.useState(false);

    useEffect(() => {
        getProducts(productDispatch, page + 1, rowsPerPage);
    }, []); // eslint-disable-line
    useEffect(() => {
        getProducts(productDispatch, page + 1, rowsPerPage);
    }, [rowsPerPage]); // eslint-disable-line
    useEffect(() => {
        getProducts(productDispatch, page + 1, rowsPerPage);
        console.log(productState.products);
    }, [page]); // eslint-disable-line

    useEffect(() => {
        setBackProducts(productState.products);
        setCount(productState.total_records);
    }, [productState]);

    const handleRequestSort = (event: any, property: any) => {
        const isDesc = orderBy === property && order === 'desc';
        setOrder(isDesc ? 'asc' : 'desc');
        setOrderBy(property);
    };

    const searchProducts = (e: any) => {
        let products: any = [];
        // context.products.products.forEach(c => {
        //   if (c.title.includes(e.currentTarget.value)) {
        //     products.push(c);
        //   }
        //   return;
        // });
        setBackProducts(products);
    };

    const openProduct = (id: any, event: any) => {
        // history.push('/admin/ecommerce/product/' + id);
        event.stopPropagation();
    };

    const handleSelectAllClick = (event: any) => {
        if (event.target.checked) {
            const newSelecteds = backProducts.map((n: any) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: any, name: any) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: any = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name: any) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, backProducts.length - page * rowsPerPage);
    const deletedProduct = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
        e.preventDefault();
        setDeleteLoading(true);
        const response = await deleteProduct(productDispatch, id);
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            getProducts(productDispatch, page + 1, rowsPerPage);
        } else {
            sendNotification(response.message, 'error');
        }
        setDeleteLoading(false);
    };

    const openProductEdit = (event: any, slug: string) => {
        navigete('edit/' + slug);
        event.stopPropagation();
    };

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CustomToast />
                    <Widget
                        disableWidgetMenu
                        header={
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                                <Box display={'flex'} style={{ width: 'calc(100% - 20px)' }}>
                                    <Typography variant="h6" color="text" colorBrightness={'secondary'} noWrap>
                                        Quản lý sản phẩm
                                    </Typography>
                                    <Box alignSelf="flex-end" ml={1}>
                                        <Typography color="text" colorBrightness={'hint'} variant={'caption'}>
                                            {backProducts.length} sản phẩm
                                        </Typography>
                                    </Box>
                                </Box>
                                <Input
                                    id="search-field"
                                    sx={{
                                        '.MuiInputBase-input': {
                                            padding: '8px 14px',
                                        },
                                    }}
                                    className={classes.textField}
                                    label="Search"
                                    margin="dense"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon className={classes.searchIcon} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    onChange={(e) => searchProducts(e)}
                                />
                            </Box>
                        }
                    >
                        <Button
                            style={{ marginTop: -10 }}
                            variant={'contained'}
                            component={RouterLink}
                            to={'create'}
                            color={'success'}
                        >
                            Thêm sản phẩm
                        </Button>
                        {productState.isLoading ? (
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <CircularProgress size={26} />
                            </Box>
                        ) : (
                            <div className={classes.tableWrapper}>
                                <Table
                                    className={classes.table}
                                    aria-labelledby="tableTitle"
                                    aria-label="enhanced table"
                                >
                                    <EnhancedTableHead
                                        classes={classes}
                                        numSelected={selected.length}
                                        order={order}
                                        orderBy={orderBy}
                                        onSelectAllClick={handleSelectAllClick}
                                        onRequestSort={handleRequestSort}
                                        rowCount={backProducts.length}
                                    />
                                    {/* <ProductsProvider> */}
                                    <TableBody>
                                        {stableSort(backProducts, getSorting(order, orderBy)).map(
                                            (row: ProductModel, index: number) => {
                                                const isItemSelected = isSelected(row.id);
                                                const labelId = `enhanced-table-checkbox-${index}`;
                                                return (
                                                    <TableRow
                                                        hover
                                                        onClick={(event) => handleClick(event, row.id)}
                                                        role="checkbox"
                                                        aria-checked={isItemSelected}
                                                        selected={isItemSelected}
                                                        key={row.id}
                                                    >
                                                        <TableCell
                                                            component="th"
                                                            id={labelId}
                                                            scope="row"
                                                            padding="none"
                                                        >
                                                            {index + 1}
                                                        </TableCell>
                                                        <TableCell>
                                                            <img
                                                                src={`${BASE_URL}/${row.thumbnail}`}
                                                                alt={row.name}
                                                                style={{ width: 100 }}
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Link
                                                                component={'button'}
                                                                variant="body2"
                                                                onClick={(e: any) => openProduct(row.id, e)}
                                                                color={'primary'}
                                                            >
                                                                {row.name}
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell>{formatNumber(Number(row.price), 2)}đ</TableCell>
                                                        <TableCell>
                                                            {formatNumber(Number(row.price_sale), 2)}đ
                                                        </TableCell>
                                                        <TableCell>{row.category_name}</TableCell>

                                                        <TableCell>
                                                            <Box display={'flex'} alignItems={'center'}>
                                                                <Button
                                                                    color="primary"
                                                                    size="small"
                                                                    style={{ marginRight: 16 }}
                                                                    variant="contained"
                                                                    onClick={(
                                                                        e: React.MouseEvent<
                                                                            HTMLButtonElement,
                                                                            MouseEvent
                                                                        >,
                                                                    ) => openProductEdit(e, row.slug)}
                                                                >
                                                                    sửa
                                                                </Button>

                                                                <Button
                                                                    color="secondary"
                                                                    size="small"
                                                                    loading={deleteLoading}
                                                                    variant="contained"
                                                                    onClick={(
                                                                        e: React.MouseEvent<
                                                                            HTMLButtonElement,
                                                                            MouseEvent
                                                                        >,
                                                                    ) => deletedProduct(e, row.id)}
                                                                >
                                                                    xóa
                                                                </Button>
                                                            </Box>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            },
                                        )}
                                        {backProducts.length !== 0 && emptyRows > 0 && (
                                            <TableRow style={{ height: 53 * emptyRows }}>
                                                <TableCell colSpan={12} />
                                            </TableRow>
                                        )}
                                    </TableBody>
                                    {/* </ProductsProvider> */}
                                </Table>
                            </div>
                        )}
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
                            backIconButtonProps={{
                                'aria-label': 'previous page',
                            }}
                            nextIconButtonProps={{
                                'aria-label': 'next page',
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Widget>
                </Grid>
            </Grid>
        </>
    );
}

// eslint-disable-next-line no-unused-vars
function CloseButton({ closeToast, className }: any) {
    return <CloseIcon className={className} onClick={closeToast} />;
}

export default ProductManagement;
