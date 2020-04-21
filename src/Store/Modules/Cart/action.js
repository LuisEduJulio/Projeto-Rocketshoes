import { ADD_CART_REQUEST, ADD_CART_SUCESS, REMOVE_CART, UPDATE_CART_REQUEST, UPDATE_CART_SUCESS } from './actionTypes';

export function addToCartRequest(id) {
    return {
        type: ADD_CART_REQUEST,
        id,
    };
}
export function addToCartSuccess(product) {
    return {
        type: ADD_CART_SUCESS,
        product,
    };
}
export function removeFromCart(id) {
    return {
        type: REMOVE_CART,
        id,
    };
}
export function updateAmountRequest(id, amount) {
    return {
        type: UPDATE_CART_REQUEST,
        id,
        amount,
    };
}
export function updateAmountSucess(id, amount) {
    return {
        type: UPDATE_CART_SUCESS,
        id,
        amount,
    };
}