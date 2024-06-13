import React, { useContext, useEffect, useState, useRef } from "react";

import {
    CButton,
    CCol,
    CForm,
    CFormInput,
    CFormFeedback,
    CFormLabel,
    CRow,
    CSpinner,
    CCard,
    CCardHeader,
    CCardBody,
    CPlaceholder,
    CPopover,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody,
    CInputGroup,
    CInputGroupText
} from '@coreui/react'
import { get_account_list } from "../../../api/accounts/Account_Api";
import AvatarUpload from "../../component_items/ImageUploader/AvatarUpload";
import { useDispatch } from "react-redux";
import { clearToast, setToast } from "../../../redux/notification/toastSlice";
import { FaUserCheck } from "react-icons/fa";
import DateTimePicker from "../../component_items/DatePicker/DateTimePicker";
import QuoteDetailCard from "../Quote widget/QuoteDetailCard";
import NoteCard from "../Quote widget/NoteCard";
import { useNavigate } from "react-router-dom";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import AvatarInput from "../../component_items/Avatar/Avatar";
import { get } from "jquery";
import MetalCard from "./model/widget/MetalCard";
import DiamondCard from "./model/widget/DiamondCard";
import { Avatar, Button, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextareaAutosize } from "@mui/material";
import { ArrowFatLinesRight, CaretDoubleRight, Gear } from "phosphor-react";
import QuoteProductImage from "../../Manager/Quote widget/QuoteProductImage";
import AccountCard from "../../Manager/Quote widget/AccountCard";
import Modal_Button from "../../component_items/Modal/ModalButton";
import ProfitChange from "./ProfitPriceChange";
import ProductionPriceChange from "./ProductionPriceChange";
import { SaleOrderPriceContext } from "../Order_Price";




const design_process_detail_data = {

    "design_process": {
        "id": 1,
        "order": {
            "id": 1,
            "product": {
                "id": 1,
                "imageUrl": "http://localhost:8000/image/Diamond/D_IF.jpg",
                "mounting_type": {
                    "id": 1,
                    "name": "Ring"
                },
                "model_id": null,
                "mounting_size": 6,
                "product_diamond": [
                    {
                        "id": 1,
                        "product_id": 1,
                        "diamond": {
                            "id": 1,
                            "imageUrl": "http://localhost:8000/image/Diamond/D_IF.jpg",
                            "size": "1.0",
                            "diamond_color": {
                                "id": 1,
                                "name": "D"
                            },
                            "diamond_origin": {
                                "id": 1,
                                "name": "South Africa"
                            },
                            "diamond_clarity": {
                                "id": 1,
                                "name": "IF"
                            },
                            "diamond_cut": {
                                "id": 1,
                                "name": "Round"
                            },
                            "price": 5000.00,
                            "deactivated": 0,
                            "created": "2024-05-20"
                        },
                        "diamond_shape": {
                            "id": 1,
                            "name": "Round",
                            "drawing_path": "http://localhost:8000/image/Diamond/D_IF.jpg",
                        },
                        "count": 1,
                        "price": 5000.00,
                        "status": 1
                    },
                    {
                        "id": 2,
                        "product_id": 1,
                        "diamond": {
                            "id": 2,
                            "imageUrl": "http://localhost:8000/image/Diamond/D_IF.jpg",
                            "size": "0.5",
                            "diamond_color": {
                                "id": 2,
                                "name": "E"
                            },
                            "diamond_origin": {
                                "id": 2,
                                "name": "Botswana"
                            },
                            "diamond_clarity": {
                                "id": 2,
                                "name": "VVS1"
                            },
                            "diamond_cut": {
                                "id": 2,
                                "name": "Princess"
                            },
                            "price": 2500.00,
                            "deactivated": 0,
                            "created": "2024-05-21"
                        },
                        "diamond_shape": {
                            "id": 2,
                            "name": "Princess",
                            "drawing_path": "https://example.com/shapes/princess.svg"
                        },
                        "count": 2,
                        "price": 5000.00,
                        "status": 0
                    }
                ],
                "product_metal": [
                    {
                        "product_id": 1,
                        "metal": {
                            "id": 1,
                            "name": "Gold",
                            "buy_price_per_gram": 50.00,
                            "sale_price_per_gram": 60.00,
                            "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
                            "specific_weight": 19.32,
                            "deactivated": 0,
                            "created": "2024-05-20"
                        },
                        "volume": 10.0,
                        "weight": 5.0,
                        "status": 0,
                        "price": 300.00
                    },
                    {
                        "product_id": 1,
                        "metal": {
                            "id": 1,
                            "name": "Gold",
                            "buy_price_per_gram": 50.00,
                            "sale_price_per_gram": 60.00,
                            "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
                            "specific_weight": 19.32,
                            "deactivated": 0,
                            "created": "2024-05-20"
                        },
                        "volume": 10.0,
                        "weight": 5.0,
                        "status": 0,
                        "price": 300.00
                    },
                    {
                        "product_id": 1,
                        "metal": {
                            "id": 2,
                            "name": "Platinum",
                            "buy_price_per_gram": 70.00,
                            "sale_price_per_gram": 80.00,
                            "imageUrl": "http://localhost:8000/image/Metal/2/main.jpg",
                            "specific_weight": 21.45,
                            "deactivated": 0,
                            "created": "2024-05-21T09:00:00.000Z"
                        },
                        "volume": 8.0,
                        "weight": 4.0,
                        "status": 1,
                        "price": 320.00
                    }
                ]
            },
            "account": {
                "id": 1,
                "username": "user1",
                "password": "hashed_password",
                "imageUrl": "http://localhost:8000/image/Account/1/main.jpg",
                "dob": "1990-01-01",
                "email": "user1@example.com",
                "fullname": "John Doe",
                "role": {
                    "id": 1,
                    "name": "Customer"
                },
                "phone": "1234567890",
                "address": "123 Main St, City, Country"
            },
            "order_status": {
                "id": 2,
                "name": "Designing"
            },
            "order_type": {
                "id": 2,
                "name": "Customize"
            },
            "deposit_has_paid": 1233,
            "product_price": 15000.00,
            "production_price": 12000.00,
            "total_price": 123131341414,
            "profit_rate": 0.25,
            "sale_staff": {
                "id": 1,
                "username": "salestaff1",
                "imageUrl": "http://localhost:8000/image/Account/1/main.jpg",
                "dob": "1985-05-15",
                "email": "salestaff1@example.com",
                "fullname": "Jane Smith",
                "role": {
                    "id": 2,
                    "name": "Sales"
                },
                "phone": "0987654321",
                "address": "456 Elm St, City, Country",
                "order_count": 100,
                "deactivated": 0,
                "deactivated_date": null
            },
            "design_staff": {
                "id": 2,
                "username": "designstaff1",
                "imageUrl": "http://localhost:8000/image/Account/2/main.jpg",
                "dob": "1988-07-10",
                "email": "designstaff1@example.com",
                "fullname": "Alice Johnson",
                "role": {
                    "id": 3,
                    "name": "Designer"
                },
                "phone": "1231231234",
                "address": "789 Pine St, City, Country",
                "order_count": 50,
                "deactivated": 0,
                "deactivated_date": null
            },
            "production_staff": {
                "id": 3,
                "username": "productionstaff1",
                "imageUrl": "http://localhost:8000/image/Account/3/main.jpg",
                "dob": "1979-11-20",
                "email": "productionstaff1@example.com",
                "fullname": "Robert Brown",
                "role": {
                    "id": 4,
                    "name": "Production"
                },
                "phone": "4564564567",
                "address": "321 Oak St, City, Country",
                "order_count": 200,
                "deactivated": 0,
                "deactivated_date": null
            },
            "note": "NOTE NÀY LÀ CỦA ORDER.\n\newf\nưef\nw\nèwefwfwfwfweef\nf\nưef\nưefe\nừ\nưefweefwefwefw\n\n\nưeefwf\nfefw\nfw\nèweefThis is a special custom order.\n\newf\nưef\nw\nèwefwfwfwfweef\nf\nưef\nưefe\nừ\nưefweefwefwefw\n\n\nưeefwf\nfefw\nfw\nèweef",
            "created": "2024-05-20"
        },
        "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
        "note": "NOTE NÀY LÀ CỦA DESIGNER.\n\newf\nưef\nw\nèwefwfwfwfweef\nf\nưef\nưefe\nừ\nưefweefwefwefw\n\n\nưeefwf\nfefw\nfw\nèweef",
        "mounting_type": {
            "id": 1,
            "name": "Prong"
        },
        "mounting_size": 6,
        "design_process_status": {
            "id": 2,
            "name": "Priced"
        },
        "production_price": 12000.00,
        "profit_rate": 25,

        "created": "2024-05-20",
        "product_price": 20000000000,
        "total_price": 25000.00
    },
}



const CustomForm = ({ designInfo, onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { handleDataChange } = useContext(SaleOrderPriceContext)

    const [loading, setLoading] = useState(true);
    const [handleImageChange, setHandleImageChange] = useState(false);


    const [designProcess, setDesignProcess] = useState(null)
    const [order, setOrder] = useState(null)
    const [product, setProduct] = useState(null)


    const [saleStaff, setSaleStaff] = useState(null)
    const [designStaff, setDesignStaff] = useState(null)
    const [productionStaff, setProductionStaff] = useState(null)

    //previous version
    const [previousMetalList, setPreviousMetalList] = useState([]);
    const [previousDiamondList, setPreviousDiamondList] = useState([])

    //updating version
    const [updatingMetalList, setUpdatingMetalList] = useState([]);
    const [updatingDiamondList, setUpdatingDiamondList] = useState([])



    //report
    const [note, setNote] = useState(null);
    const [profitRate, setProfitRate] = useState(null);
    const [productionPrice, setProductionPrice] = useState(null);

    const [totalPrice, setTotalPrice] = useState(null);

    useEffect(() => {
        const setAttribute = async () => {

            await get_account_list();
            //console.log("quote", quoteInfo)
            // gọi api lấy design process detail từ designInfo.id
            const design_process = design_process_detail_data.design_process
            setDesignProcess(design_process)


            setOrder(design_process.order)
            setProduct(design_process.order.product)
            setNote(design_process.order.note)

            setSaleStaff(design_process.order.sale_staff);
            setDesignStaff(design_process.order.design_staff);
            setProductionStaff(design_process.order.production_staff);

            setPreviousMetalList(design_process.order.product.product_metal.filter(item => item.status == 1))
            setPreviousDiamondList(design_process.order.product.product_diamond.filter(item => item.status == 1))

            setUpdatingMetalList(design_process.order.product.product_metal.filter(item => item.status == 0))
            setUpdatingDiamondList(design_process.order.product.product_diamond.filter(item => item.status == 0))


            setProfitRate(design_process.profit_rate);
            setProductionPrice(design_process.production_price);
            setTotalPrice(design_process.total_price)



            setLoading(false);
        }
        setAttribute()
    }, [])


    const handleNote = (new_note) => {
        console.log(new_note)
        setNote(new_note)
    }

    const handleSubmit = async () => {


        const priced_design_process = {
            design_process_id: designProcess.id,
            production_price: productionPrice,
            profit_rate: profitRate,
            note: note
        }
        console.log('priced_design_process', priced_design_process)
        const formData = new FormData();
        formData.append('priced_design_process', JSON.stringify(priced_design_process));

        await get_account_list();
        // let mess = '';
        // let mess_color = '';

        // if (response.success) {
        //     mess = response.success
        //     handleTableChange();
        //     onClose();
        //     mess_color = 'success'
        // } else if (response.error) {
        //     mess = response.error;
        //     mess_color = 'danger'
        // }
        // let product = {
        //     id: response.new_product_id,
        // }
        handleDataChange()
        dispatch(setToast({ color: 'success', title: 'Design id: ' + designProcess.id, mess: "Approve successfully !" }))
        //dispatch(clearToast())
        onClose();



    }
    const handleProfitRate = (new_profit_rate) => {
        setProfitRate(new_profit_rate)
    }

    const handleProductionPrice = (new_production_price) => {
        setProductionPrice(new_production_price)
    }
    useEffect(() => {
        if (!loading) {
            setTotalPrice(productionPrice + designProcess.product_price * (100 + profitRate) / 100)
        }
    }, [profitRate, productionPrice])
    return (

        <CForm
            className="row g-3 needs-validation"
        >
            {loading ? <CButton className="w-100" color="secondary" disabled>
                <CSpinner as="span" size="sm" aria-hidden="true" />
                Loading...
            </CButton> :
                <>



                    <CCol lg={6} className="d-flex flex-column">
                        <CAccordion >
                            <CAccordionItem>
                                <CAccordionHeader>CUSTOMER INFORMATION</CAccordionHeader>
                                <CAccordionBody>
                                    <AccountCard account={order.account} avatarSize={100} cardHeight={'120px'} />
                                </CAccordionBody>
                            </CAccordionItem>
                        </CAccordion>
                        {/* <AccountCard account={order.account} avatarSize={100} cardHeight={'120px'} /> */}
                        <div className='flex-grow-1'>
                            <NoteCard mainNote={note} minRows={8} maxRows={20} isLoading={loading} note={designProcess.note} handleChange={handleNote} />

                        </div>
                    </CCol>
                    <CCol lg={6}>
                        <div style={{ height: 'fit-content' }}>
                            <CAccordion >
                                <CAccordionItem>
                                    <CAccordionHeader>INFORMATION OF ORDER</CAccordionHeader>
                                    <CAccordionBody>
                                        <QuoteDetailCard quote={order} title={'INFORMATION OF ORDER'} />
                                    </CAccordionBody>
                                </CAccordionItem>
                            </CAccordion>
                            {/* <QuoteDetailCard quote={order} title={'INFORMATION OF ORDER'} /> */}
                        </div>
                        <div className="mt-1" style={{ height: 'fit-content' }}  >
                            <CAccordion >
                                <CAccordionItem>
                                    <CAccordionHeader>INFORMATION OF ORDER</CAccordionHeader>
                                    <CAccordionBody>
                                        <CCard className="h-100">
                                            <CCardHeader className="text-center text-light fw-bold" >
                                                ADDITIONAL INFORMATION
                                            </CCardHeader>
                                            <CCardBody className="d-flex flex-column justify-content-between">

                                                <CRow>
                                                    <CCol xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className='d-flex align-items-center' >
                                                        <span style={{ fontSize: '15px' }}>Mounting Type: </span>
                                                    </CCol>
                                                    <CCol xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className='d-flex align-items-center'>
                                                        <CFormInput disabled className="h-75 w-100 quote-detail-card" defaultValue={designProcess.mounting_type.name} />
                                                    </CCol>
                                                </CRow>
                                                <CRow>
                                                    <CCol xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className='d-flex align-items-center'>
                                                        <span style={{ fontSize: '15px' }}>Mounting Size: </span>
                                                    </CCol>
                                                    <CCol xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className='d-flex align-items-center'>
                                                        <CFormInput disabled className="h-75 w-100 quote-detail-card" defaultValue={designProcess.mounting_size} />
                                                    </CCol>
                                                </CRow>


                                            </CCardBody>
                                        </CCard>
                                    </CAccordionBody>
                                </CAccordionItem>
                            </CAccordion>


                        </div>
                        <div className="d-flex p-2 flex-column mt-1 rounded w-100 " style={{ height: 'fit-content' }}>
                            <CCard className=" h-100" style={{ height: 'fit-content' }}>
                                <CCardHeader className="text-center text-light fw-bold" >
                                    DESIGNED IMAGE
                                </CCardHeader>
                                <CCardBody className="d-flex flex-column justify-content-between" style={{ maxWidth: '100%', maxHeight: '100%' }}  >
                                    <Button
                                        sx={{ fontSize: '8px', fontWeight: 'bold' }}
                                        color="info"
                                        variant="outlined"
                                        className="fw-bold"
                                        onClick={() => {
                                            setHandleImageChange(!handleImageChange);
                                            console.log(!handleImageChange)
                                            console.log(product.imageUrl)
                                            console.log(designProcess.imageUrl)

                                        }}>
                                        {handleImageChange == true ? 'view current image' : 'view previous image'}
                                    </Button>
                                    <QuoteProductImage defaultImage={handleImageChange == true ? product.imageUrl : designProcess.imageUrl} disabled={true} />


                                </CCardBody>
                            </CCard>



                        </div>


                    </CCol>
                    <CCol md={12}>
                        <CRow>
                            <CCol md={4}>
                                <span ><b>Sale Staff: </b></span>

                                <CButton color="light w-100 d-flex align-items-center justify-content-start" >
                                    <ListItemDecorator className='px-2'>
                                        <AvatarInput size={30} src={saleStaff.imageUrl} />
                                    </ListItemDecorator>
                                    {saleStaff.fullname}
                                </CButton>

                            </CCol>
                            <CCol md={4}>
                                <span><b>Design Staff: </b></span>

                                <CButton color="light w-100 d-flex align-items-center justify-content-start" >
                                    <ListItemDecorator className='px-2'>
                                        <AvatarInput size={30} src={designStaff.imageUrl} />
                                    </ListItemDecorator>
                                    {designStaff.fullname}
                                </CButton>

                            </CCol>
                            <CCol md={4}>
                                <span><b>Production Staff: </b></span>

                                <CButton color="light w-100 d-flex align-items-center justify-content-start" >
                                    <ListItemDecorator className='px-2'>
                                        <AvatarInput size={30} src={productionStaff.imageUrl} />
                                    </ListItemDecorator>
                                    {productionStaff.fullname}
                                </CButton>

                            </CCol>
                        </CRow>
                    </CCol>
                    <CCol md={12}>
                        <div className="my-4">
                            <CCard className="bg-light metal-card" >
                                {/* <CCardHeader>
                                    <span className="text-dark fw-bold fs-5 d-flex align-items-center">METAL</span>
                                </CCardHeader> */}
                                <CCardBody>
                                    <CRow>
                                        <CCol md={6}>
                                            <span className="text-secondary fw-bold fs-5 d-flex align-items-center">Previous </span>
                                            <List className="rounded" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                                {previousMetalList.length > 0 && previousMetalList.map((item, index) => {
                                                    return (
                                                        <ListItem>

                                                            <ListItemAvatar>
                                                                <CPopover
                                                                    title="Popover title"
                                                                    content={
                                                                        <>
                                                                            <div>Volume: {item.volume}</div>
                                                                            <div>Weight: {item.weight}</div>
                                                                        </>
                                                                    }
                                                                    placement="right"
                                                                    trigger={"hover"}
                                                                >
                                                                    <Avatar>
                                                                        <img width={'100%'} src={item.metal.imageUrl} alt="metal" />
                                                                    </Avatar>
                                                                </CPopover>

                                                            </ListItemAvatar>


                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Type'
                                                                color="secondary"
                                                                secondary={<span className="text-secondary">{item.metal.name}</span>} />

                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Caculated Price'
                                                                secondary={<span className="text-secondary">{item.price} vnd</span>} />

                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </CCol>
                                        <CCol md={6}>
                                            <span className="text-success fw-bold fs-5 d-flex align-items-center">Updating</span>

                                            <List className="rounded" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                                {updatingMetalList.length > 0 && updatingMetalList.map((item, index) => {
                                                    return (
                                                        <ListItem>
                                                            <ListItemAvatar>
                                                                <CPopover
                                                                    title="Info"
                                                                    content={
                                                                        <>
                                                                            <div>Volume: {item.volume}</div>
                                                                            <div>Weight: {item.weight}</div>
                                                                        </>
                                                                    }
                                                                    placement="right"
                                                                    trigger={"hover"}
                                                                >
                                                                    <Avatar>
                                                                        <img width={'100%'} src={item.metal.imageUrl} alt="metal" />
                                                                    </Avatar>
                                                                </CPopover>

                                                            </ListItemAvatar>


                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Type'
                                                                secondary={<span className="text-success">{item.metal.name}</span>} />

                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Carculated Price'
                                                                secondary={<span className="text-success">{item.price} vnd</span>} />

                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </CCol>
                                    </CRow>


                                    <CRow className="w-100 text-center d-flex justify-content-center">
                                        <CCol md={12} >
                                            <span className="text-danger fw-bold fs-5">Metal Sum </span>
                                        </CCol>

                                        <CCol xl={2} className="p-0 m-0 d-flex align-items-center justify-content-center text-nowrap">
                                            <span className="text-secondary fs-6">{previousMetalList.reduce((total, item) => total + item.price, 0)} vnd</span>

                                        </CCol>
                                        <CCol xl={2} className="p-0 m-0 d-flex  align-items-center justify-content-center">
                                            <CaretDoubleRight size={30} color='gray' weight="light" />

                                        </CCol>
                                        <CCol xl={2} className="p-0 m-0 d-flex align-items-center justify-content-center text-nowrap">
                                            <span className="text-success fs-6">{updatingMetalList.reduce((total, item) => total + item.price, 0)} vnd</span>

                                        </CCol>
                                    </CRow>
                                </CCardBody>
                            </CCard>
                        </div>
                        <div className="my-4">
                            <CCard className="bg-light metal-card" >

                                <CCardBody>



                                    <CRow>
                                        <CCol md={6}>
                                            <span className="text-secondary fw-bold fs-5 d-flex align-items-center">Previous</span>
                                            <List className="rounded" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                                {previousDiamondList.length > 0 && previousDiamondList.map((item, index) => {
                                                    return (
                                                        <ListItem>
                                                            <ListItemAvatar>

                                                                <CPopover
                                                                    title="Info"
                                                                    content={
                                                                        <>
                                                                            <div>Shape: {item.diamond_shape.name}</div>
                                                                            <div>Size: {item.diamond.size}</div>
                                                                            <div>Origin: {item.diamond.diamond_origin.name}</div>
                                                                            <div>Color: {item.diamond.diamond_color.name}</div>
                                                                            <div>Clarity: {item.diamond.diamond_clarity.name}</div>
                                                                        </>
                                                                    }
                                                                    placement="right"
                                                                    trigger={"hover"}
                                                                >
                                                                    <Avatar>
                                                                        <img width={'100%'} src={item.diamond.imageUrl} alt="metal" />
                                                                    </Avatar>
                                                                </CPopover>
                                                            </ListItemAvatar>
                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Count'
                                                                secondary={<span className="text-secondary">{item.count}</span>} />
                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Total Price'
                                                                secondary={<span className="text-secondary">{item.price} vnd</span>} />

                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </CCol>
                                        <CCol md={6}>
                                            <span className="text-success fw-bold fs-5 d-flex align-items-center">Updating</span>
                                            <List className="rounded" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                                {updatingDiamondList.length > 0 && updatingDiamondList.map((item, index) => {
                                                    return (
                                                        <ListItem>
                                                            <ListItemAvatar>

                                                                <CPopover
                                                                    title="Popover title"
                                                                    content={
                                                                        <>
                                                                            <div>Shape: {item.diamond_shape.name}</div>
                                                                            <div>Size: {item.diamond.size}</div>
                                                                            <div>Origin: {item.diamond.diamond_origin.name}</div>
                                                                            <div>Color: {item.diamond.diamond_color.name}</div>
                                                                            <div>Clarity: {item.diamond.diamond_clarity.name}</div>
                                                                        </>
                                                                    }
                                                                    placement="right"
                                                                    trigger={"hover"}
                                                                >
                                                                    <Avatar>
                                                                        <img width={'100%'} src={item.diamond.imageUrl} alt="metal" />
                                                                    </Avatar>
                                                                </CPopover>
                                                            </ListItemAvatar>
                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Count'
                                                                secondary={<span className="text-success">{item.count}</span>} />
                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Total Price'
                                                                secondary={<span className="text-success">{item.price} vnd</span>} />

                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </CCol>
                                    </CRow>
                                    <CRow className="w-100 text-center d-flex justify-content-center">
                                        <CCol md={12}>
                                            <span className="text-danger fw-bold fs-5">Diamond Sum </span>
                                        </CCol>

                                        <CCol xl={2} className="p-0 m-0 d-flex align-items-center justify-content-center text-nowrap">
                                            <span className="text-secondary fs-6">{previousDiamondList.reduce((total, item) => total + item.price, 0)} vnd</span>

                                        </CCol>
                                        <CCol xl={2} className="p-0 m-0 d-flex  align-items-center justify-content-center">
                                            <CaretDoubleRight size={30} color='gray' weight="light" />

                                        </CCol>
                                        <CCol xl={2} className="p-0 m-0 d-flex align-items-center justify-content-center text-nowrap">
                                            <span className="text-success fs-6">{updatingDiamondList.reduce((total, item) => total + item.price, 0)} vnd</span>

                                        </CCol>
                                    </CRow>
                                </CCardBody>
                            </CCard>
                        </div>
                    </CCol>
                    <CCol md={12}>

                        <div className="my-0">
                            <CCard className="bg-light metal-card" >

                                <CCardBody className="d-flex flex-column justify-content-center">
                                    <CRow className="d-flex justify-content-center">

                                        <CCol md={5} className="p-0">
                                            <span className="text-secondary fw-bold fs-5 d-flex align-items-center">Previous </span>

                                            <CRow className="w-100  text-end d-flex justify-content-center">
                                                <CCol lg={5} className=" px-0 m-0 d-flex  align-items-center">
                                                    <span className="text-dark  fs-5 ">Product Price: </span>
                                                </CCol>
                                                <CCol lg={5} className="p-0 m-0 d-flex align-items-center text-nowrap">
                                                    <span className="text-secondary fs-6">{order.product_price} vnd</span>

                                                </CCol>
                                            </CRow>
                                            <CRow className="w-100  text-end d-flex justify-content-center">
                                                <CCol lg={5} className=" px-0 m-0 d-flex  align-items-center">
                                                    <span className="text-dark  fs-5">Profit Price: </span>
                                                </CCol>
                                                <CCol lg={5} className="p-0 m-0 d-flex align-items-center text-nowrap">
                                                    <span className="text-secondary fs-6">{order.product_price * (designProcess.profit_rate / 100)} vnd ({designProcess.profit_rate}%)</span>





                                                </CCol>
                                            </CRow>
                                            <CRow className="w-100  text-end d-flex justify-content-center">
                                                <CCol lg={5} className=" px-0 m-0 d-flex  align-items-center ">
                                                    <span className="text-dark  fs-5 ">Production Price: </span>
                                                </CCol>
                                                <CCol lg={5} className=" p-0 m-0 d-flex align-items-center text-nowrap">
                                                    <span className="text-secondary fs-6">{order.production_price} vnd</span>

                                                </CCol>
                                            </CRow>
                                        </CCol>
                                        {/* <CCol md={1} className="d-flex align-items-center justify-content-center p-0">
                                            <CaretDoubleRight size={30} color='gray' weight="light" />
                                        </CCol> */}
                                        <CCol md={5} className="p-0">
                                            <span className="text-success fw-bold fs-5 d-flex align-items-center">Updating </span>

                                            <CRow className="w-100  text-end d-flex justify-content-center">
                                                <CCol lg={5} className=" px-0 m-0 d-flex  align-items-center">
                                                    <span className="text-dark  fs-5 ">Product Price: </span>
                                                </CCol>
                                                <CCol lg={5} className="p-0 m-0 d-flex align-items-center text-nowrap">
                                                    <span className="text-success fs-6">{designProcess.product_price} vnd</span>

                                                </CCol>
                                            </CRow>
                                            <CRow className="w-100  text-end d-flex justify-content-center">
                                                <CCol lg={5} className=" px-0 m-0 d-flex  align-items-center">
                                                    <span className="text-dark  fs-5">Profit Price: </span>
                                                </CCol>
                                                <CCol lg={5} className="p-0 m-0 d-flex align-items-center ">
                                                    <span className="text-success fs-6 d-flex align-items-center text-nowrap">
                                                        {designProcess.product_price * (profitRate / 100)} vnd ({profitRate}%)
                                                        <div className="flex-grow-1">
                                                            <Modal_Button
                                                                size={'sm'}
                                                                title={"Set Profit Rate"}
                                                                content={<IconButton sx={{ padding: 0 }} color="secondary" aria-label="add an alarm">
                                                                    <Gear size={20} color={'purple'} weight="duotone" />
                                                                </IconButton>}
                                                                color={"light"} >
                                                                <ProfitChange profitRate={profitRate} handleProfitRate={handleProfitRate} />
                                                            </Modal_Button>
                                                        </div>

                                                    </span>
                                                </CCol>
                                            </CRow>
                                            <CRow className="w-100  text-end d-flex justify-content-center">
                                                <CCol lg={5} className=" px-0 m-0 d-flex  align-items-center ">
                                                    <span className="text-dark  fs-5 ">Production Price: </span>
                                                </CCol>
                                                <CCol lg={5} className=" p-0 m-0 d-flex align-items-center ">
                                                    <span className="text-success fs-6 d-flex align-items-center text-nowrap">
                                                        {productionPrice} vnd
                                                        <div className="flex-grow-1">
                                                            <Modal_Button
                                                                size={'sm'}
                                                                title={"Set Profit Rate"}
                                                                content={<IconButton sx={{ padding: 0 }} color="secondary" aria-label="add an alarm">
                                                                    <Gear size={20} color={'purple'} weight="duotone" />
                                                                </IconButton>}
                                                                color={"light"} >
                                                                <ProductionPriceChange productionPrice={productionPrice} handleProductionPrice={handleProductionPrice} />
                                                            </Modal_Button>
                                                        </div>

                                                    </span>
                                                </CCol>
                                            </CRow>
                                        </CCol>
                                    </CRow>
                                    <CRow className="w-100 text-center d-flex justify-content-center">
                                        <CCol md={12}>
                                            <span className="text-danger w-100 text-center fw-bold fs-5">Total</span>
                                        </CCol>
                                        <CCol xl={2} className="p-0 m-0 d-flex align-items-center justify-content-center text-nowrap">
                                            <span className="text-secondary fs-6">{order.total_price} vnd</span>
                                        </CCol>
                                        <CCol xl={2} className="p-0 m-0 d-flex  align-items-center justify-content-center">
                                            <CaretDoubleRight size={30} color='gray' weight="light" />
                                        </CCol>
                                        <CCol xl={2} className="p-0 m-0 d-flex align-items-center justify-content-center text-nowrap">
                                            <span className="text-success fs-6">{totalPrice} vnd</span>
                                        </CCol>
                                    </CRow>
                                </CCardBody>
                            </CCard>
                        </div>
                    </CCol>
                    <CCol xs={12} className="d-flex justify-content-center align-items-center">
                        <CButton className="mx-2" color="success" onClick={() => handleSubmit()}  >
                            Confirm Pricing
                        </CButton>

                    </CCol>
                </>}
        </CForm>
    )
}

const DesignPricing = ({ designProcess, onClose }) => {
    return (
        <CustomForm designInfo={designProcess} onClose={onClose} />
    );
};

export default DesignPricing;