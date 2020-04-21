import produce from 'immer';
import { ADD_CART_SUCESS, REMOVE_CART, UPDATE_CART_SUCESS } from './actionTypes';


export default function cart(state = [], action) {
    switch (action.type) {
        case ADD_CART_SUCESS:
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.product.id);
                if (productIndex >= 0) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.product,
                        amount: 1,
                    });
                }
            });
        case REMOVE_CART:
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });
        case UPDATE_CART_SUCESS: {
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }
        default:
            return state;
    }
}
