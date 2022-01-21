import React from 'react';
import { useStateValue } from './StateProvider';  
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import {Link} from 'react-router-dom';

const Checkout = () => {

    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout_layout">
            <div className="checkout">
                    <div className="checkout_left">
                        <div className="svg">
                            <img 
                                className="checkout-image"
                                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/checkout-1431143-1208890.png"
                                alt=""
                            />
                        </div>
                        
                        {basket?.length === 0  ? (
                            <div>
                                <img style={{
                                
                                }}
                                src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" 
                                alt="empty cart" />
                                <h2>Your Shopping Basket is empty</h2>
                                <p>
                                    You have no items in your basket. 
                                    Add items to your basket using the <Link to="/" style={{
                                        textDecoration: 'none'
                                    }}>Add to basket</Link>
                                </p>
                            </div>
                        ) : (
                            <div>
                                <h2 className="checkout-title">Your shopping basket</h2>
                                {basket?.map(item => (
                                    <CheckoutProduct key={item.id}
                                    id={item.id} 
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    quantity={item.quantity}
                                />
                                ))}
                                
                            </div>
                        )}
                    </div>
                    {basket.length > 0 && (
                        <div className="checkout_right">
                            <div className="subtotal_position">
                                <Subtotal  style={{
                                    marginRight: '10px',
                                }}/>
                            </div>
                        </div>
                    ) }
            </div>

        </div>
    )
}

export default Checkout
