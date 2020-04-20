import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../Services/api';

import { addToCartSuccess } from './action';

function* addToCart({ id }) {
    const response = yield call(api.get, `/products/${id}`);

    yield put(addToCartSuccess(response.data));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
]);
