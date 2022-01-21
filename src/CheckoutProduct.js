import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';



const buttonStyle = {
    borderRadius: '5px',
    marginRight: '10px',
    marginLeft: '10px'
}



const CheckoutProduct = ({ id, title, image, price, rating, quantity }) => {
    
    const [{ basket }, dispatch] = useStateValue();
    const [disable, setDisable] = useState(false);

    const removeButton = () => {
        setDisable(true)
        dispatch ({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    
    const increamentBasket = () => {
        dispatch ({
            type: 'INCREAMENT_BASKET',
            id: id
        })
    }
    const decreamentBasket = () => {
        dispatch ({
            type: 'REDUCE_BASKET',
            id: id
        })
    }
   


    return(
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="product" style={{
                margin: '15px',
            }} />

            <RemoveShoppingCartIcon onClick={removeButton} disabled={disable} style ={{
                color: 'red',
                marginTop: '100px',
                width: '50px', 
                height: '50px',
                cursor: 'pointer',

            }}/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                 <p className="product_price">
                 
                  <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        {`${value}`}
                      </p>
                    </>
                  )}

                  decimalScale={2}
                  value={price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p><FontAwesomeIcon icon="star" style={{color: 'yellow'}} /></p>
                        ))
                    }
                </div>
                
                <button style ={buttonStyle} onClick={increamentBasket}>+</button>
                <span >{quantity}</span>
                <button style ={buttonStyle} onClick={decreamentBasket} >-</button>
            </div>
            
        </div>

    );
}


export default CheckoutProduct