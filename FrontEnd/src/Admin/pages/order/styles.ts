import { makeStyles } from '@mui/styles';

export default makeStyles((theme: any) => ({
    nameImage: {
        color: '#ccc',
    },
    immageBox: {
        width: '100%',
        height: '300px',
        borderRadius: '10px',
        border: '3px solid #ededed',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    imageEmpty: { color: '#e2e2e2' },
    emptyIcon: {
        fontSize: '100px',
        display: 'block',
        margin: 'auto',
    },
    imagePreview: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    activeStatus: {
        color: theme.palette.success.main,
    },
    unActiveStatus: {
        color: theme.palette.secondary.main,
    },
}));
