import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../Services/api';
import { formatPrice } from '../../../Util/format';

import { addToCartSuccess, updateAmountSucess } from './action';
import { ADD_CART_REQUEST,  UPDATE_CART_REQUEST } from './actionTypes';

function* addToCart({ id }) {
    const productExists = yield select(
        state => state.cart.find(p => p.id === id),
    );

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        console.tron.warn('Erro');
        return;
    }

    if (productExists) {
        yield put(updateAmountSucess(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        }

        yield put(addToCartSuccess(data));
    }
}
function* updateAmount({id, amount}){
    if(amount <= 0) return;

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;

    if(amount > stockAmount){
        return;
    }

    yield put(updateAmountSucess(id, amount));

}

export default all([
    takeLatest(ADD_CART_REQUEST, addToCart),
    takeLatest(UPDATE_CART_REQUEST, updateAmount)
]);
