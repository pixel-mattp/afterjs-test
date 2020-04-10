import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import auth from './modules/auth';
import counter from './modules/counter';

const initialState = {};

const rootReducer = combineReducers({
    auth,
    counter,
});

const initializeStore = (preloadedState) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
};

export default initializeStore;
