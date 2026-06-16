import  {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState : {
        itemsList:[],
        showCart:false

    },
    reducers:{
        addToCart(state,action){
            const newItem = action.payload;
            // to check if item is already available 
            const existingItem  = state.itemsList.find((item) => item.id === newItem.id);
            if(existingItem){
                existingItem.quantity++;
                existingItem.price= newItem.price;
                existingItem.totalPrice = newItem.price * existingItem.quantity;

            }else 
            {
                state.itemsList.push({
                    id: newItem.id,
                    price : newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price , 
                    name: newItem.name
                });
            }

        },
        removeFromCart(state, action){
            const id = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === id);

            if (!existingItem) {
                return;
            }

            if (existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            }
        },
        setShowCart(state){
            state.showCart=!state.showCart;
        }
    }
});

export const selectTotalQuantity = (state) => {
    return state.cart.itemsList.reduce((total, item) => total + item.quantity, 0);
};


export const selectTotalPrice = (state) => {
    return state.cart.itemsList.reduce((totalPrice, item) => totalPrice + item.totalPrice, 0);
};

export const cartActions = cartSlice.actions;
export default cartSlice;
