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
       
        
        // let price = 1799 * counter.value;
        // console.log('totals ' + price);
    });
    
    return(
    <>
    <h1 className="title">Shopping Cart</h1>
    <div className="container" style={{ }}>
        <div className="row card w-75 shadow p-4 mb-4 border border-0">
            <h3 className="title-card">Cart (2 items)</h3>
            <div className="d-flex flex-row">
                <div className="col">
                    <img src={KausMerah} className="card-img-left rounded-3 shadow-sm" alt="kaus-merah" style={{height: 150, width: 120 ,objectFit: "cover"}}/>
                </div>
                <div className="col-6 card-body ">
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
                    <div className="d-flex  icons">
                        <i className="fa-solid fa-trash icon"><span className="icon-desc">REMOVE ITEM</span></i>
                        <i className="fa-solid fa-heart icon"><span className="icon-desc">MOVE TO WISH LIST</span></i>
                    </div>
                </div>
                <div className="col d-flex flex-column">
                    <div className=" btn-group btn-group-sm" role="group">                  
                        <button type="button" className="btn btn-outline-dark ps-3 pe-3">
                        <i className="fa-solid fa-minus"></i>
                        </button>
                        <button type="text" className="btn btn-outline-dark ps-3 pe-3" style={{ pointerEvents: "none" }}>3</button>
                        <button type="button" className="btn btn-outline-dark ps-3 pe-3">
                        <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                        <h6 className="text-center">
                            <small>
                                (Note, 1 place)
                            </small> 
                        </h6>
                        <p className="text-end mb-0 small ms-auto mt-auto">
                            $17.99
                        </p>
                </div>
            </div> 
             <div className="d-flex flex-row mt-3 pt-3 border-top">
                <div className="col">
                    <img src={KausMerah} className="card-img-left rounded-3 shadow-sm" alt="kaus-merah" style={{height: 150, width: 120 ,objectFit: "cover"}}/>
                </div>
                <div className="col-6 card-body ">
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
                    <div className="d-flex  icons">
                        <i className="fa-solid fa-trash icon"><span className="icon-desc">REMOVE ITEM</span></i>
                        <i className="fa-solid fa-heart icon"><span className="icon-desc">MOVE TO WISH LIST</span></i>
                    </div>
                </div>
                <div className="col d-flex flex-column">
                    <div className=" btn-group btn-group-sm" role="group">                  
                        <button type="button" className="btn btn-outline-dark ps-3 pe-3">
                        <i className="fa-solid fa-minus"></i>
                        </button>
                        <button type="text" className="btn btn-outline-dark ps-3 pe-3" style={{ pointerEvents: "none" }}>3</button>
                        <button type="button" className="btn btn-outline-dark ps-3 pe-3">
                        <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                        <p className="text-end mb-0 small ms-auto mt-auto">
                            $35.99
                        </p>
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