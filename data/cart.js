export const cart = [];

export function addToCart(productId,selectorValue) {

    let matchingItem; 
  
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });
  
    if (matchingItem) {
        matchingItem.quantity += selectorValue;
    } else {
        cart.push({
            productId,
            quantity: selectorValue
        });
    };
  
  };
