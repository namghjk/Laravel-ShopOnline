import { makeStyles } from '@mui/styles';

export default makeStyles((theme: any) => ({
    nameImage: {
        color: '#ccc',
    },
    thumbWrapper: {
        width: 200,
        height: 150,
        borderWidth: 2,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderRadius: '4px',
    },

    thumbnail: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    typographyTitle: {
        fontSize: '1rem !important',
    },
}));
