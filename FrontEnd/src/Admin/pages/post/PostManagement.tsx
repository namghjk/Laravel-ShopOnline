import React, { useEffect, useState } from 'react';
import monent from 'moment';
import { useNavigate } from 'react-router-dom';

// Components
import {
    Box,
    CircularProgress,
    Grid,
    IconButton,
    IconButtonProps,
    InputAdornment,
    styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField as Input,
} from '@mui/material';
import Widget from '../../components/Widget/Widget';
import { Link } from 'react-router-dom';
import { Avatar, Button, Typography } from '../../components/Wrappers/Wrappers';

// Contex + Actions
import { getListPost, deletePost } from '../../store/action/PostAction';

// models
import { PostModel } from '../../models/PostModel';

// Icons
import { Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';
//Styles

const PostManagement = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [listPost, setListpost] = React.useState<PostModel[]>([]);

    const getPosts = async () => {
        const response = await getListPost();
        if (response.code === 200) {
            setListpost(response.data);
        }
        setLoading(false);
    };

    useEffect(() => {
        getPosts();
    }, []);

    const handleDeletePost = async (id: number) => {
        const response = await deletePost(id);
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            setLoading(true);
            getPosts();
        } else {
            sendNotification(response.message, 'error');
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <CustomToast />
                <Widget inheritHeight title="Quản lý bài viết">
                    <Box justifyContent={'space-between'} display={'flex'} alignItems={'center'}>
                        <Box>
                            <Link to="new">
                                <Button variant={'contained'} color={'success'}>
                                    <Box mr={1} display={'flex'}>
                                        <AddIcon />
                                    </Box>
                                    đăng bài
                                </Button>
                            </Link>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
                            <Input
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
                                // onChange={(e) => handleSearch(e)}
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
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
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
                                                <TableCell>NGƯỜI POST</TableCell>
                                                <TableCell>TIÊU ĐỀ</TableCell>
                                                <TableCell>NGÀY POST</TableCell>
                                                {/* <TableCell align="center">TRẠNG THÁI</TableCell> */}
                                                <TableCell>CHỨC NĂNG</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {listPost.length ? (
                                                listPost.map((post, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell align="center">{post.id}</TableCell>
                                                        <TableCell>{post.author_name}</TableCell>
                                                        <TableCell>{post.title}</TableCell>
                                                        <TableCell>
                                                            {monent(post.created_at).format('DD/MM/YYYY hh:mm:ss')}
                                                        </TableCell>
                                                        {/* <TableCell align="center">
                                                            <CloseIcon className={classes.unActiveStatus} />
                                                        </TableCell> */}
                                                        <TableCell>
                                                            <Box display={'flex'} alignItems="center">
                                                                <Button
                                                                    variant={'contained'}
                                                                    color="primary"
                                                                    style={{ marginRight: 8 }}
                                                                    onClick={() =>
                                                                        navigate('/admin/post/edit/' + post.slug)
                                                                    }
                                                                >
                                                                    {/* <EditIcon className={classes.editIcon} /> */}
                                                                    sửa
                                                                </Button>
                                                                <Button
                                                                    onClick={() => handleDeletePost(post.id)}
                                                                    variant={'contained'}
                                                                    color="secondary"
                                                                >
                                                                    {/* <DeleteIcon className={classes.editIcon} /> */}
                                                                    <span>xóa</span>
                                                                </Button>
                                                            </Box>
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            ) : (
                                                <TableRow>
                                                    <TableCell colSpan={5}>Không tìm thấy dòng nào</TableCell>
                                                </TableRow>
                                            )}
                                            {/* <TableRow>
                                                <TableCell align="center">2</TableCell>
                                                <TableCell>SYSADMIN</TableCell>
                                                <TableCell></TableCell>
                                                <TableCell>21/10/2022</TableCell>
                                                <TableCell align="center">
                                                    <CloseIcon className={classes.unActiveStatus} />
                                                </TableCell>
                                                <TableCell>
                                                    <Box display={'flex'} alignItems="center">
                                                        <Button
                                                            variant={'contained'}
                                                            color="primary"
                                                            style={{ marginRight: 8 }}
                                                        >
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
                            )}
                        </Grid>
                    </Grid>
                </Widget>
            </Grid>
        </Grid>
    );
};

export default PostManagement;
