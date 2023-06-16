import React, { useEffect, useState } from 'react';

// Components
import {
    Box,
    CircularProgress,
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
import { Link, useNavigate } from 'react-router-dom';
// Icons
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
//Styles
import useStyles from './styles';
// Models
import { BannerModel } from '../../models/BannerModel';
// Actions
import { getBanners } from '../../store/action/BannnerAction';
import { BASE_URL } from '../../utils/config';

const BannerManagement = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [lisBanner, setListBanner] = useState<BannerModel[]>([]);

    const getListBanner = async () => {
        const response = await getBanners();
        if (response.code === 200) {
            setListBanner(response.data);
        }
        setLoading(false);
    };

    useEffect(() => {
        getListBanner();
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Widget variant="h5" title="Quản lý Banner">
                    <Box justifyContent={'space-between'} display={'flex'} alignItems={'center'}>
                        <Box>
                            <Link to="./add">
                                <Button variant={'contained'} color={'success'}>
                                    <Box mr={1} display={'flex'}>
                                        <AddIcon />
                                    </Box>
                                    Add
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
                                label="Search"
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
                    {loading ? (
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <CircularProgress size={26} />
                        </Box>
                    ) : (
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">STT</TableCell>
                                        <TableCell>Hình ảnh</TableCell>
                                        <TableCell>Order</TableCell>
                                        <TableCell align="center">Trạng thái</TableCell>
                                        <TableCell>Chức năng</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {lisBanner.length &&
                                        lisBanner.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell align="center">{item.id}</TableCell>
                                                <TableCell>
                                                    <img
                                                        src={`${BASE_URL}/${item.image_url}`}
                                                        alt={item.image_url}
                                                        style={{ width: 100 }}
                                                    />
                                                </TableCell>
                                                <TableCell>{item.order}</TableCell>
                                                <TableCell align="center">
                                                    {item.active === '0' ? (
                                                        <CloseIcon className={classes.unActiveStatus} />
                                                    ) : (
                                                        <DoneIcon className={classes.activeStatus} />
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    <Box display={'flex'} alignItems="center">
                                                        <Button
                                                            variant={'contained'}
                                                            color="primary"
                                                            style={{ marginRight: 8 }}
                                                            onClick={() =>
                                                                navigate('edit', {
                                                                    state: {
                                                                        id: item.id,
                                                                        order_number: item.order,
                                                                        image_url: item.image_url,
                                                                        active: item.active,
                                                                    },
                                                                })
                                                            }
                                                        >
                                                            Chỉnh sửa
                                                        </Button>
                                                        {/* <Button  variant={'contained'} color="secondary">
                                                            <span>Delete</span>
                                                        </Button> */}
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </Widget>
            </Grid>
        </Grid>
    );
};

export default BannerManagement;
