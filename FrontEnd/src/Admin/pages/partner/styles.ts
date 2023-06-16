import { makeStyles } from '@mui/styles';
import tinycolor from 'tinycolor2';

export default makeStyles((theme: any) => ({
    editIcon: {
        fontSize: '16px',
    },
    activeStatus: {
        color: theme.palette.success.main,
    },
    unActiveStatus: {
        color: theme.palette.secondary.main,
    },
    tableHeader: {
        fontWeight: 'bold',
    },
}));
