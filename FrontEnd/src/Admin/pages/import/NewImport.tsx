import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Models
import { PartnerModel } from '../../models/PartnerModel';
import { ProductModel } from '../../models/ProductModels';
// Components
import { Autocomplete, Box, Grid, TextField } from '@mui/material';
import { Button } from '../../components/Wrappers/Wrappers';
import Widget from '../../components/Widget/Widget';
import { CustomToast, sendNotification } from '../../components/Notification/CustomToast';

//Styles
import useStyles from './styles';

// Icons
import { Edit as EditIcon, Save as SaveIcon, Add as AddIcon } from '@mui/icons-material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// Contexts

// Actions
import { getAllPartner } from '../../store/action/PartnerAction';
import { getAllProducts } from '../../store/action/ProductAction';
import { createImport } from '../../store/action/ImportAction';

type AddProductModels = {
    id: string;
    quantity: number;
};

const AddImport = () => {
    // Navigate and params
    const navigate = useNavigate();
    const { id = '' } = useParams();
    // Styles
    const classes = useStyles();

    // States

    const isCreate = window.location.pathname === '/admin/partner/new';
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [listPartner, setListPartner] = useState<PartnerModel[]>([]);
    const [listProduct, setListProduct] = useState<ProductModel[]>([]);
    const [addProduct, setAddProduct] = useState<AddProductModels[]>([]);
    const [note, setNote] = useState('');
    const [partner, setPartner] = useState('');

    const getPartners = async () => {
        const response = await getAllPartner(1, 100);
        if (response.code === 200) {
            setListPartner(response.data);
        }
    };

    const getListProducts = async () => {
        const response = await getAllProducts(1, 100);
        if (response.code === 200) {
            setListProduct(response.data);
        }
    };

    useEffect(() => {
        const doInnit = async () => {
            await getPartners();
            await getListProducts();
            setLoading(false);
        };
        doInnit();
    }, []);

    const handleAddProduct = () => {
        setAddProduct((prev) => [...prev, { id: '', quantity: 0 }]);
    };

    const handleDeleteProduct = (index: number) => {
        let temp = [...addProduct];
        temp.splice(index, 1);
        setAddProduct(temp);
    };

    const handleChangeProduct = (
        e: React.SyntheticEvent<Element, Event>,
        product: ProductModel | null,
        index: number,
    ) => {
        let temp = [...addProduct];
        if (product) {
            temp[index].id = product.id;
        } else {
            temp[index].id = '';
        }
        setAddProduct(temp);
    };

    const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        let temp = [...addProduct];
        temp[index].quantity = Number(e.target.value);
        setAddProduct(temp);
    };
    const handleChangeNote = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNote(e.target.value);
    };

    const handleChangePartner = (e: React.SyntheticEvent<Element, Event>, value: PartnerModel | null) => {
        if (value) {
            setPartner(value.id);
        } else {
            setPartner('');
        }
    };

    const handleSave = async () => {
        const response = await createImport({ partner_id: partner, note: note, products: addProduct });
        if (response.code === 200) {
            sendNotification(response.message, 'success');
            navigate(-1);
        } else {
            sendNotification(response?.message, 'error');
        }
    };

    return (
        <Grid container>
            <CustomToast />
            <Grid item xs={12}>
                <Widget title={isCreate ? 'Thêm mới nhà cung cấp' : 'Sửa thông tin NCC'}>
                    <Box display={'flex'} justifyContent="center" alignItems={'center'}>
                        <Box display="flex" flexDirection={'column'} width={700}>
                            <Autocomplete
                                disablePortal
                                id="partner_id"
                                size="small"
                                options={listPartner}
                                getOptionLabel={(option) => option.name}
                                renderOption={(props, option) => (
                                    <Box component={'li'} {...props} key={option.id}>
                                        {option.name}
                                    </Box>
                                )}
                                style={{ marginBottom: 20 }}
                                renderInput={(params) => <TextField {...params} label="Nhà cung cấp" />}
                                onChange={(e, value) => handleChangePartner(e, value)}
                            />
                            <TextField
                                id="note"
                                label="Ghi chú"
                                name="note"
                                size="small"
                                variant="outlined"
                                multiline
                                minRows={5}
                                style={{ marginBottom: 20 }}
                                onChange={handleChangeNote}
                            />
                            <Box display={'flex'} alignItems={'center'} marginBottom={3}>
                                <Button onClick={handleAddProduct} variant={'outlined'} color={'primary'} type="button">
                                    <AddIcon />
                                    Thêm sản phẩm
                                </Button>
                            </Box>

                            {addProduct.length
                                ? addProduct.map((item, index) => (
                                      <Box key={index} display="flex" flexDirection={'column'}>
                                          <Autocomplete
                                              disablePortal
                                              id="partner_id"
                                              size="small"
                                              options={listProduct}
                                              getOptionLabel={(option) => option.name}
                                              renderOption={(props, option) => (
                                                  <Box component={'li'} {...props} key={option.id}>
                                                      {option.name}
                                                  </Box>
                                              )}
                                              style={{ marginBottom: 20 }}
                                              renderInput={(params) => <TextField {...params} label="Sản phẩm" />}
                                              onChange={(e, value) => handleChangeProduct(e, value, index)}
                                          />
                                          <TextField
                                              id={'quantity' + index}
                                              label="Số lượng"
                                              name="quantity"
                                              size="small"
                                              variant="outlined"
                                              type={'number'}
                                              style={{ marginBottom: 20 }}
                                              onChange={(e) => handleChangeQuantity(e, index)}
                                          />
                                          <Box marginBottom={3}>
                                              <Button
                                                  variant={'contained'}
                                                  color={'secondary'}
                                                  type="button"
                                                  onClick={() => handleDeleteProduct(index)}
                                              >
                                                  <DeleteForeverIcon />
                                              </Button>
                                          </Box>
                                      </Box>
                                  ))
                                : null}

                            <Box display={'flex'} alignItems={'center'}>
                                <Button
                                    variant={'contained'}
                                    color={'success'}
                                    style={{ marginRight: '25px' }}
                                    startIcon={<SaveIcon />}
                                    loading={saving}
                                    loadingPosition="start"
                                    type="submit"
                                >
                                    {isCreate ? 'lưu' : 'sửa'}
                                </Button>

                                <Button
                                    variant={'contained'}
                                    color={'primary'}
                                    type="button"
                                    onClick={() => navigate(-1)}
                                >
                                    hủy
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Widget>
            </Grid>
        </Grid>
    );
};

export default AddImport;
