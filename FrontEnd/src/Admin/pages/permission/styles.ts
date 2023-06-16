import { makeStyles } from '@mui/styles';
import tinycolor from 'tinycolor2';

export default makeStyles((theme: any) => ({
    cardHeader: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
    },
    cardCollapse: {
        borderColor: theme.palette.primary.main,
        borderWidth: '1px',
        borderStyle: 'solid',
        paddingBottom: '5px',
    },
    editIcon: {
        fontSize: '16px',
    },
    activeStatus: {
        color: theme.palette.success.main,
    },
    unActiveStatus: {
        color: theme.palette.secondary.main,
    },
}));
