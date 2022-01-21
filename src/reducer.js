export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);



const reducer = ( state, action ) => {

    //for testing
    console.log( action );
    
    // setting switch logic
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            }
        
        case 'ADD_TO_BASKET':
            //logic for adding
            const item = state.basket.filter(item => item.id === action.item.id)[0];
            if(item){
                const newItems = state.basket.map(item => {
                    if(item.id === action.item.id)
                    return {
                        ...item,
                        quantity: item.quantity+1,
                        price: item.price * (item.quantity+1)
                    }
                    else return item
                })
                return {
                    ...state,
                    basket: newItems
                };  
            }
            else{
                return {
                    ...state, 
                    basket: [...state.basket, {...action.item, quantity:1}]
                }
            }

        
        case 'INCREAMENT_BASKET':
            //logic for adding
            const product = state.basket.filter(prod => prod.id === action.id)[0];
            console.log(product)
            if(product){
                const newItems = state.basket.map(product => {
                    if(product.id === action.id)
                    return {
                        ...product,
                        quantity: product.quantity+1,
                        price: product.price * (product.quantity+1)
                    }
                    else return product
                })
                return {
                    ...state,
                    basket: newItems
                };  
            }
            else{
                return {
                    ...state, 
                    basket: [...state.basket, {...action.product, quantity:1}]
                }
            }
        case 'REDUCE_BASKET':
            //logic for adding
            const products = state.basket.filter(prod => prod.id === action.id)[0];
            console.log(products)
            if(products){
                const newItems = state.basket.map(products => {
                    if(products.id === action.id)
                    return {
                        ...products,
                        quantity: products.quantity === 1 ? product.quantity: product.productquantity-1,
                        price: products.quantity === 1 ? products.price * (products.quantity) : products.price * (products.quantity-1)
                    }
                    else return products
                })
                return {
                    ...state,
                    basket: newItems
                };  
            }
            else{
                return {
                    ...state, 
                    basket: [...state.basket, {...action.products, quantity:1}]
                }
            }
     
        

            

        case 'REMOVE_FROM_BASKET':
            //logic for removing
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id)
            
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            return {
                ...state,
                basket: newBasket,
            }
        default:
            return state;
    }
}

export default reducer;