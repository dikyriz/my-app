import { KausHitam, KausMerah } from "../assets";
import { decrement, decrements, increment, increments } from "../redux/actions/counter";
import {useSelector, useDispatch} from "react-redux";
import { createRef, useEffect, useState } from "react";
import store from '../redux/store';

export default function Cart(props) {
    const counter = useSelector((state) => state.counter);
    console.log(counter);
    const counters = useSelector((state) => state.counters);
    const dispatch = useDispatch();
    const dispatchs = useDispatch();
    const [totals, setTotals] = useState();
    const [price, setPrice] = useState();
    const [payment, setPayment] = useState();
    const [disableCounter, setDisableCounter] = useState(false);

    ////////////
    // let grab = payment;
    // let teks = grab.toString();
    //     let result = teks.substring(0, 2);
    //     let results = teks.substring(2, 4);
    //     let resultss = teks.substring(4, 6) + teks.substring(6, 8);
    //     let combine_ress = result + "." + results + resultss;
    //     let number = parseFloat(combine_ress);
    //     console.log(number);

    useEffect(function (){
        setPrice(1799 * counter.value);
        setTotals(3599 * counters.valuee);
        setPayment(price + totals);
       
        if (counter.value == 0){
            return setDisableCounter(true);
        }

        if (counter.value != 0){
            return setDisableCounter(false);
        }
        
        // let price = 1799 * counter.value;
        // console.log('totals ' + price);
    });
    
    return(
    <>
    <h1 className="title">Shopping Cart</h1>
    <div className="container " style={{ }}>
        <div className="card-group">
            <div className="card shadow p-4 mb-4 border border-0">
            <div className="row">
                <div className="col-12">
                    <h3 className="title-card">Cart (2 items)</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-5 col-sm-12">
                    <img src={KausMerah} className="card-img-left rounded-3 shadow-sm" alt="kaus-merah" style={{height: 150, width: 120 ,objectFit: "cover"}}/>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-7 card-body ">
                    <h5 className="card-title" style={{ color: "#89969c" }}>
                        Red Shirt
                    </h5>
                    <p className="card-text">
                        T-SHIRT01
                        <span className="text-child">
                            RED
                        </span>
                    </p>
                    <p className="card-text">
                        COLOR
                        <span className="text-child">
                            RED
                        </span>
                    </p>
                    <p className="card-text">
                        SIZE
                        <span className="text-child">
                            M
                        </span>
                    </p>
                    <div className="d-flex flex-md-wrap icons">
                        <i className="fa-solid fa-trash icon mb-md-1"><span className="icon-desc d-sm-none d-md-inline small">REMOVE ITEM</span></i>
                        <i className="fa-solid fa-heart icon"><span className="icon-desc d-sm-none d-md-inline small">MOVE TO WISH LIST</span></i>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                <div className=" btn-group btn-group-sm" role="group">                  
                        <button onClick={() => dispatch(decrement())} type="button" className={"btn btn-outline-dark ps-3 pe-3" + (disableCounter ? ' disabled' : ' test')}>
                        <i className="fa-solid fa-minus"></i>
                        </button>
                        <button type="text" className="btn btn-outline-dark ps-3  pe-3" style={{ pointerEvents: "none" }}>{counter.value}</button>
                        <button onClick={() => dispatch(increment())} type="button" className="btn btn-outline-dark ps-3 pe-3">
                        <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                        <h6 className=" ms-4">
                            <small>
                                (Note, 1 place)
                            </small> 
                        </h6>
                        <p className="small text-end me-xl-2 mt-xl-5
                        me-lg-2 mt-lg-5 mb-md-0 mb-sm-0 mt-sm-3">
                            $17.99
                        </p>
                    </div>
            </div>
             <div className="row mt-3 pt-3 border-top">
                <div className="col-xl-2 col-lg-3 col-md-5">
                    <img src={KausHitam} className="card-img-left rounded-3 shadow-sm" alt="kaus-hitam" style={{height: 150, width: 120 ,objectFit: "cover"}}/>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-7 card-body ">
                    <h5 className="card-title" style={{ color: "#89969c" }}>
                        BLACK Shirt
                    </h5>
                    <p className="card-text">
                        T-SHIRT02
                        <span className="text-child">
                            BLACK
                        </span>
                    </p>
                    <p className="card-text">
                        COLOR
                        <span className="text-child">
                            BLACK
                        </span>
                    </p>
                    <p className="card-text">
                        SIZE
                        <span className="text-child">
                            M
                        </span>
                    </p>
                    <div className="d-flex icons flex-md-wrap">
                        <i className="fa-solid fa-trash icon mb-md-1"><span className="icon-desc small d-sm-none d-md-inline">REMOVE ITEM</span></i>
                        <i className="fa-solid fa-heart icon"><span className="icon-desc small d-sm-none d-md-inline">MOVE TO WISH LIST</span></i>
                    </div>
                </div>
                <div className="col-xl-3 offset-xl-2 col-lg-3">
                    <div className=" btn-group btn-group-sm" role="group">                  
                        <button onClick={() => dispatchs(decrements())} type="button" className="btn btn-outline-dark ps-3 pe-3">
                        <i className="fa-solid fa-minus"></i>
                        </button>
                        <button type="text" className="btn btn-outline-dark ps-3 pe-3 " style={{ pointerEvents: "none" }}>{counters.valuee}</button>
                        <button onClick={() => dispatchs(increments())} type="button" className="btn btn-outline-dark ps-3 pe-3">
                        <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                        <p className="small text-end me-xl-2 mt-xl-5 me-lg-2 mt-lg-5 mb-md-0 mb-sm-0 mt-sm-4">
                            $35.99
                        </p>
                </div>
            </div>           
    
        </div>
        <div className="d-flex flex-column">        
            <div className="row card shadow p-2 mb-3 ms-xl-4 ms-md-4 ms-sm-4 ms-lg-4 ms-0 me-1 me-xl-0 me-lg-0 me-md-0 me-sm-0 border border-0">
                <h3 className="title-card">The total amount of</h3>
                <div className="row d-flex me-0"> 
                    <div className="col-8">
                        <p className="small">
                            Temporary Amount
                        </p>
                    </div>
                    <div className="col-4 text-end pe-0">
                        <p className="small mb-0">
                            ${payment}
                        </p>
                    </div>
                </div>
                <div className="row d-flex me-0 border-bottom"> 
                    <div className="col-8">
                        <p className="small">
                            Shipping
                        </p>
                    </div>
                    <div className="col-4 text-end pe-0">
                        <p className="small mb-0">
                            Gratis
                        </p>
                    </div>
                </div>
                <div className="row d-flex mt-2 me-0"> 
                    <div className="col-8">
                        <p className="small">
                            The total amount of (Including VAT)
                        </p>
                    </div>
                    <div className="col-4 text-end mt-auto mb-auto pe-0">
                        <p className="small mb-0">
                            ${payment}
                        </p>
                    </div>
                </div>
                <button type="button" className="btn btn-primary mt-1">
                    GO TO CHECKOUT
                </button>            
            </div>
            <div className="row card shadow p-2 border border-0 ms-xl-4 ms-sm-4 ms-md-4 ms-lg-4 ms-0 me-1 me-xl-0 me-lg-0 me-md-0 me-sm-0">
                <div className="d-flex p-1">
                    <div className="col-10">
                    <p className="small mb-0">Add a discount code [optional]</p>
                </div>
                <div className="col text-end">
                    <i className="fa-solid fa-angle-down"></i>
                </div>
                </div>
            </div>
        </div>
        </div>
        
        
        {/* <div className="card cart">
                <h3 className="title-card">Cart (2 items)</h3>
                <div className="card-container">
                    <img src={KausMerah} alt='kaus-merah' className="img-kaus" />
                <div className="card-desc">
                    <h5 className="card-title">Red Shirt</h5>
                    <p className="card-text">T-SHIRT01 <span className="text-child">RED</span></p>
                    <p className="card-text">COLOR <span className="text-child">RED</span></p>
                    <p className="card-text">SIZE <span className="text-child">M</span></p>           
                    <div className="icons">
                        <i className="fa-solid fa-trash icon"><span className="icon-desc">REMOVE ITEM</span></i>
                        <i className="fa-solid fa-heart icon"><span className="icon-desc">MOVE TO WISH LIST</span></i>
                    </div>
                </div>
                <div className="input">
                    <div className="input-container">
                        <button onClick={() => dispatch(decrement())} className="btn btn-cart"><i className="fa-solid fa-minus"></i></button>
                        <span className="input-child">{counter.value}</span>     
                        <button onClick={() => dispatch(increment())} className="btn btn-cart"><i className="fa-solid fa-plus"></i></button>
                        <p className="input-desc">(Note, 1 place)</p>
                    </div>
                    <div className="pay">
                        <p className="payment">$17.99</p>
                    </div>
                </div>
                </div>
                <div className="borders"></div>
                <div className="card-container">
                    <img src={KausHitam} alt='kaus-hitam' className="img-kaus" />
                <div className="card-desc">
                    <h5 className="card-title">BLACK Shirt</h5>
                    <p className="card-text">T-SHIRT02 <span className="text-child">BLACK</span></p>
                    <p className="card-text">COLOR <span className="text-child">BLACK</span></p>
                    <p className="card-text">SIZE <span className="text-child">M</span></p>           
                    <div className="icons">
                        <i className="fa-solid fa-trash icon"><span className="icon-desc">REMOVE ITEM</span></i>
                        <i className="fa-solid fa-heart icon"><span className="icon-desc">MOVE TO WISH LIST</span></i>
                    </div>
                </div>
                <div className="input">
                    <div className="input-container">
                        <button onClick={() => dispatchs(decrements())} className="btn btn-cart"><i className="fa-solid fa-minus"></i></button>
                        <span className="input-child">{counters.valuee}</span>                
                        <button onClick={() => dispatchs(increments())} className="btn btn-cart"><i className="fa-solid fa-plus"></i></button>
                    </div>
                    <div className="pay">
                        <p className="payment">$35.99</p>
                    </div>
                </div>
                </div>
        </div>
        <div className="totals">
            <div className="card">
                <h3 className="title-card">The total amount of</h3>
                <div className="container-totals">
                    <p className="payments">Temporary Amount <span className="payments-ship-child">${payment}</span></p>
                    <p className="shipping-cart">Shipping <span className="payments-ship-child">Gratis</span></p>
                    <div className="borders-totals"></div>
                    <h4 className="totals-payment">The total amount of <span className="totals-payment-child">(Including VAT)<span className="payments-child">${payment}</span></span></h4>
                </div>
                <button className="btn btn-primary check">GO TO CHECKOUT</button>
            </div>
            <div className="card">
                <p className="optional">Add a discount code [optional] <span className="icon-payment"><i className="fa-solid fa-angle-down"></i></span></p>
            </div>
        </div> */}
        
    </div>
    </>
    );
}