// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import {delItem} from '../../redux/actions/index'
// import { NavLink } from 'react-router-dom'

// const Cart = () => {
//     const state = useSelector((state) => state.addItems)
//     const dispatch = useDispatch()

//     const handleClose = (item) => {
//         return(
//             <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
//                 <div className='container py-4'>
//                     <button onClick={() => handleClose(cartItem)} className='btn-close float-end' aria-label='Close'></button>
//                     <div className='row justify-content-center'>
//                         <div className='col-md-4'>
//                             <img src={cartItem.img} alt={cartItem.title} height='200px' width='180px' />
//                         </div>
//                         <div className='col-md-4'>
//                             <h3>{cartItem.title}</h3>
//                             <p className='lead fw-bold'>${cartItem.price}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     const emptyCart = () => {
//         return(
//             <div className='px-4 my-5 bg-light rounded-3 py-5'>
//                 <div className='container py-4'>
//                     <div className='container py-4'>
//                         <h3>Your Cart is empty</h3>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     const button = () => {
//         return(
//             <div className='container'>
//                 <NavLink to='./checkout' className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed to Checkout</NavLink>
//             </div>
//         )
//     }
//   return (
//     <div>
//         {state.length === 0 && emptyCart()}
//         {state.length !== 0 && state.map(cartItems)}
//         {state.length !== 0 && button()}
//     </div>
//   )
// }

// export default Cart

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../../redux/actions/index';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const state = useSelector((state) => state.addItems);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item));
    };

    const cartItems = (item) => {
        return (
            <div className='px-4 my-5 bg-light rounded-3' key={item.id}>
                <div className='container py-4'>
                    <button onClick={() => handleClose(item)} className='btn-close float-end' aria-label='Close'></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={item.img} alt={item.title} height='200px' width='180px' />
                        </div>
                        <div className='col-md-4'>
                            <h3>{item.title}</h3>
                            <p className='lead fw-bold'>${item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const emptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className='container py-4'>
                    <h3>Your Cart is empty</h3>
                </div>
            </div>
        );
    };

    const button = () => {
        return (
            <div className='container'>
                <NavLink to='../checkout' className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed to Checkout</NavLink>
            </div>
        );
    };

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </div>
    );
};

export default Cart;
