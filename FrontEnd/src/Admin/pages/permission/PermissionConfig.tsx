import { useEffect, useState } from 'react';

// Components
import {
    Autocomplete,
    Box,
    Card,
    CardActions,
    CardContent,
    Checkbox,
    CircularProgress,
    Collapse,
    Grid,
    IconButton,
    IconButtonProps,
    styled,
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
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';
//Styles
import useStyles from './styles';

//Icons
import { ExpandMoreOutlined } from '@mui/icons-material';

// Data
import mock from '../user/mock';
// Actions
import { getAllPermissions, getAllRoles, getDetailRole, updateRole } from '../../store/action/PermissionAction';
// Models
import { PermissionModel } from '../../models/PermissionModel';
import { RoleModel } from '../../models/RoleModel';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CustomTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontWeight: 'bold',
    },
}));

const PermissionConfig = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(true);
    const [listPermissions, setListPermissions] = useState<PermissionModel[]>([]);
    const [roleSelected, setRoleSelected] = useState<RoleModel | null>(null);
    const [listRoles, setListRoles] = useState<RoleModel[]>([]);
    const [detailRole, setDetailRole] = useState<PermissionModel[]>([]);
    const [loading, setLoading] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const getPermissions = async () => {
        const response = await getAllPermissions();
        if (response.code === 200) {
            setListPermissions(response.data);
        }
    };
    const getRoles = async () => {
        const response = await getAllRoles();
        if (response.code === 200) {
            setListRoles(response.data);
        }
    };

    useEffect(() => {
        getPermissions();
        getRoles();
    }, []);
    useEffect(() => {
        console.log(detailRole.map((i) => i.name).join(','));
    }, [detailRole]);

    const handleChangeRole = async (e: React.SyntheticEvent<Element, Event>, value: RoleModel | null) => {
        setRoleSelected(value);
        if (value) {
            const response = await getDetailRole(value.name);
            if (response.code === 200) {
                setDetailRole(response.data);
            }
        } else {
            setDetailRole([]);
        }
    };

    const handleCheckPermissions = (permission: PermissionModel) => {
        setDetailRole((prev) => {
            const isCheck = detailRole.filter((role) => role.name === permission.name).length > 0;
            if (isCheck) {
                return detailRole.filter((role) => role.name !== permission.name);
            } else {
                return [...prev, permission];
            }
        });
    };

    const handleSave = async () => {
        setLoading(true);
        if (roleSelected) {
            const permissions = detailRole.map((role) => role.name).join('|');
            const response = await updateRole({
                id: roleSelected.id,
                name: roleSelected.name,
                permissions: permissions,
            });
            if (response.code === 200) {
                sendNotification(response.message, 'success');
            } else {
                sendNotification(response.message, 'error');
            }
        } else {
            sendNotification('Chưa chọn quyền !', 'warning');
        }
        setLoading(false);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <CustomToast />
                <Widget variant="h5" title="Cấu hình chức năng web">
                    <Box display={'flex'} alignItems={'center'}>
                        <Box width={300} textAlign={'end'} paddingRight={5}>
                            <Typography variant="body1">Nhóm quyền</Typography>
                        </Box>
                        <Box width={600}>
                            <Autocomplete
                                id="userGroup"
                                size="small"
                                options={listRoles}
                                getOptionLabel={(option) => option.name}
                                onChange={handleChangeRole}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Box>
                    </Box>
                </Widget>
            </Grid>
            <Grid item xs={12}>
                <Widget>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Card>
                                <CardActions disableSpacing className={classes.cardHeader}>
                                    {/* <IconButton aria-label="add to favorites">Display</IconButton> */}
                                    {/* <Checkbox
                                        sx={{
                                            color: 'white',
                                            '&.Mui-checked': {
                                                color: 'white',
                                            },
                                        }}
                                    /> */}
                                    <Typography variant="body1"></Typography>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreOutlined style={{ color: 'white' }} />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit className={classes.cardCollapse}>
                                    {/* <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <CustomTableCell align="center">STT</CustomTableCell>
                                                    <CustomTableCell>Chức năng</CustomTableCell>
                                                    <CustomTableCell>Thao tác</CustomTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow hover>
                                                    <TableCell align="center">1</TableCell>
                                                    <TableCell>Banner</TableCell>
                                                    <TableCell>
                                                        <Box display={'flex'} alignItems="center">
                                                            <Box display={'flex'} alignItems="center" marginRight={3}>
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Xem</p>
                                                            </Box>
                                                            <Box display={'flex'} alignItems="center" marginRight={3}>
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Thêm</p>
                                                            </Box>
                                                            <Box display={'flex'} alignItems="center" marginRight={3}>
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Sửa</p>
                                                            </Box>
                                                            <Box display={'flex'} alignItems="center">
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Xóa</p>
                                                            </Box>
                                                        </Box>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell align="center">2</TableCell>
                                                    <TableCell>Giới thiệu</TableCell>
                                                    <TableCell>
                                                        <Box display={'flex'} alignItems="center">
                                                            <Box display={'flex'} alignItems="center" marginRight={3}>
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Xem</p>
                                                            </Box>
                                                            <Box display={'flex'} alignItems="center" marginRight={3}>
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Thêm</p>
                                                            </Box>
                                                            <Box display={'flex'} alignItems="center" marginRight={3}>
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Sửa</p>
                                                            </Box>
                                                            <Box display={'flex'} alignItems="center">
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Xóa</p>
                                                            </Box>
                                                        </Box>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell align="center">3</TableCell>
                                                    <TableCell>Tin tức</TableCell>
                                                    <TableCell>
                                                        <Box display={'flex'} alignItems="center">
                                                            <Box display={'flex'} alignItems="center" marginRight={3}>
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Xem</p>
                                                            </Box>
                                                            <Box display={'flex'} alignItems="center" marginRight={3}>
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Thêm</p>
                                                            </Box>
                                                            <Box display={'flex'} alignItems="center" marginRight={3}>
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Sửa</p>
                                                            </Box>
                                                            <Box display={'flex'} alignItems="center">
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Xóa</p>
                                                            </Box>
                                                        </Box>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell align="center">4</TableCell>
                                                    <TableCell>Liên kết</TableCell>
                                                    <TableCell>
                                                        <Box display={'flex'} alignItems="center">
                                                            <Box display={'flex'} alignItems="center" marginRight={3}>
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Xem</p>
                                                            </Box>
                                                            <Box display={'flex'} alignItems="center" marginRight={3}>
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Thêm</p>
                                                            </Box>
                                                            <Box display={'flex'} alignItems="center" marginRight={3}>
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Sửa</p>
                                                            </Box>
                                                            <Box display={'flex'} alignItems="center">
                                                                <Checkbox />
                                                                <p style={{ margin: 0 }}>Xóa</p>
                                                            </Box>
                                                        </Box>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer> */}
                                    <Grid container spacing={3}>
                                        {listPermissions.length ? (
                                            listPermissions.map((item, index) => (
                                                <Grid item xs={3} key={index}>
                                                    <Box display={'flex'} alignItems="center" marginRight={3}>
                                                        <Checkbox
                                                            value={item.name}
                                                            checked={
                                                                detailRole.filter((role) => role.name === item.name)
                                                                    .length > 0
                                                            }
                                                            onChange={() => handleCheckPermissions(item)}
                                                        />
                                                        <p style={{ margin: 0 }}>{item.name}</p>
                                                    </Box>
                                                </Grid>
                                            ))
                                        ) : (
                                            <Grid item xs={12} display="flex" justifyContent={'center'}>
                                                <CircularProgress size={26} />
                                            </Grid>
                                        )}
                                    </Grid>
                                </Collapse>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={handleSave} variant={'contained'} color={'primary'} loading={loading}>
                                Lưu
                            </Button>
                        </Grid>
                    </Grid>
                </Widget>
            </Grid>
        </Grid>
    );
};

export default PermissionConfig;
