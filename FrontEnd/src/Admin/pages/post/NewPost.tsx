import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// Components
import { Box, CircularProgress, Grid, TextField } from '@mui/material';
import Widget from '../../components/Widget/Widget';
import { Button } from '../../components/Wrappers/Wrappers';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';
// images
import image from '../../assets/images/default.png';

// Icons
import CameraAltIcon from '@mui/icons-material/CameraAlt';
//Styles
import useStyles from './styles';

// Contexts + Actions
import { createNewPost, updatePost, getPostDetails } from '../../store/action/PostAction';
import { BASE_URL } from '../../utils/config';

const NewPost = () => {
    const classes = useStyles();
    const isCreate = window.location.pathname === '/admin/post/new';
    const navigate = useNavigate();
    const { slug = '' } = useParams();

    const [newPost, setNewPost] = useState({
        title: '',
        thumnail: {
            file: null as File | null,
            path: '',
        },
        content: '',
    });
    const [editPost, setEditPost] = useState({
        title: '',
        thumnail: {
            file: null as File | null,
            path: '',
        },
        content: '',
    });
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState('');
    // useEffect
    const detailPost = async () => {
        const response = await getPostDetails(slug);
        if (response.code === 200) {
            setEditPost({
                title: response.data.title,
                content: response.data.content,
                thumnail: { path: response.data.thumbnail, file: null },
            });
        }
    };

    useEffect(() => {
        const doInit = async () => {
            if (!isCreate) {
                await detailPost();
            }
            setLoading(false);
        };
        doInit();
    }, []);

    // useEffect(() => {
    //     console.log(editPost);
    // }, [editPost]);

    const handleGetContent = (e: any, editor: any) => {
        setContent(editor.getData());
    };

    const handleEditNewPost = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewPost({ ...newPost, [e.target.id]: e.currentTarget.value });
    };

    const handleEditPost = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEditPost({ ...editPost, title: e.currentTarget.value });
    };

    const handleChangeThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        const preview = file ? URL.createObjectURL(file) : '';
        if (isCreate) setNewPost({ ...newPost, thumnail: { file: file, path: preview } });
        else setEditPost({ ...editPost, thumnail: { file: file, path: preview } });
    };

    const handleSeveNewPost = async () => {
        const post = new FormData();
        if (newPost.thumnail.file) {
            post.append('thumbnail', newPost.thumnail.file);
        }
        post.append('title', newPost.title);
        post.append('content', content);
        console.log(newPost);
        const response = await createNewPost(post);
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            navigate(-1);
        } else {
            sendNotification(response.message, 'error');
        }
    };

    const handleUpdatePost = async () => {
        const post = new FormData();
        if (newPost.thumnail.file) {
            post.append('thumbnail', newPost.thumnail.file);
        }
        post.append('title', newPost.title);
        post.append('slug', slug);
        post.append('content', content);
        console.log(newPost);
        const response = await updatePost(post);
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            navigate(-1);
        } else {
            sendNotification(response.message, 'error');
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <CustomToast />
                <Widget inheritHeight title={isCreate ? 'Tạo bài viết' : 'Sửa bài viết'}>
                    {loading ? (
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <CircularProgress size={26} />
                        </Box>
                    ) : (
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={6}>
                                <Box display={'flex'} alignItems={'center'} width="100%">
                                    <TextField
                                        size="small"
                                        id="title"
                                        label="Tiêu đề"
                                        margin="normal"
                                        variant="outlined"
                                        value={isCreate ? newPost.title : editPost.title}
                                        onChange={(e) => (isCreate ? handleEditNewPost(e) : handleEditPost(e))}
                                        type={'text'}
                                        fullWidth
                                    />
                                </Box>

                                <Button variant={'outlined'} color={'success'} component="label">
                                    <CameraAltIcon />
                                    Hình ảnh
                                    <input type="file" hidden accept="image/*" onChange={handleChangeThumbnail} />
                                </Button>
                                <p className={classes.nameImage}>
                                    {isCreate
                                        ? newPost.thumnail.file && newPost.thumnail.file.name
                                        : editPost.thumnail.file
                                        ? editPost.thumnail.file.name
                                        : editPost.thumnail.path}
                                </p>
                            </Grid>
                            <Grid item xs={6}>
                                <Box className={classes.thumbWrapper}>
                                    {isCreate ? (
                                        <img
                                            src={newPost.thumnail.path ? newPost.thumnail.path : image}
                                            alt="thumnail"
                                            className={classes.thumbnail}
                                        />
                                    ) : (
                                        <img
                                            src={
                                                editPost.thumnail.file
                                                    ? editPost.thumnail.path
                                                    : `${BASE_URL}/${editPost.thumnail.path}`
                                            }
                                            alt="thumnail"
                                            className={classes.thumbnail}
                                        />
                                    )}
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <CKEditor
                                    data={isCreate ? newPost.content : editPost.content}
                                    editor={ClassicEditor}
                                    setHeight={500}
                                    onChange={handleGetContent}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    onClick={isCreate ? handleSeveNewPost : handleUpdatePost}
                                    variant={'contained'}
                                    color={'primary'}
                                    style={{ marginRight: 8 }}
                                >
                                    {isCreate ? 'Đăng bài' : 'cập nhật'}
                                </Button>
                                <Button onClick={() => navigate(-1)} variant={'contained'} color={'secondary'}>
                                    quay lại
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                </Widget>
            </Grid>
        </Grid>
    );
};

export default NewPost;
