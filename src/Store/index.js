import {createStore} from 'redux';

import rootReducer from './Modules/rootReducer';

//const enhacer = process.env.NODE_ENV === 'development' ? console.tron.createEnhacer() : null;

const store = createStore(rootReducer);

export default store;