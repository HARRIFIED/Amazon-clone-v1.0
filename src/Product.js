import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useStateValue} from './StateProvider';
import {useState, useEffect} from 'react';

const Product = ({ id, title, price, image, rating}) => {

    const  [{basket}, dispatch] = useStateValue();

    const [disable, setDisable] = useState(false);
    const [inBasket, setInBasket] = useState(false);




    useEffect(()=> {
      const inBasket = basket.some(item => item.id === id);
      setInBasket(inBasket);
    },[basket, id])

   
    const addToBasket = () => {
      //Add item to basket bt using dispatch
      // setDisable(true)
      
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };

    return (
        <div className="product">
          <div className="product-info">
            <p>{title}</p>
            <p className="product_price">
              <small>$</small>
              <strong>{price}</strong>
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
          </div>
          <img className="product-image" src={image} alt="product" />
          {
            inBasket ? (
                <button  disabled={true}>Add to basket</button>
            ):(
                <button onClick={addToBasket}  disabled={false}>Add to basket</button>
            )
          }
        </div>
    );
}


export default Product;