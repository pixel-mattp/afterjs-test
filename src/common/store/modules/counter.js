import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'counter',
    initialState: {
        counter: null,
    },
    reducers: {
        setCounter(state, action) {
            state.counter = action.payload;
        },
        incrementCounter(state, action) {
            state.counter = state.counter + 1;
        },
        decrementCounter(state) {
            state.counter = state.counter - 1;
        },
    },
});

// Extract the action creators object and the reducer
const { actions, reducer } = slice;

export const set = (value) => {
    return async (dispatch) => {
        dispatch(actions.setCounter(value));
    };
};

export const increment = async (dispatch) => {
    dispatch(actions.incrementCounter());
};

export const decrement = async (dispatch) => {
    dispatch(actions.decrementCounter());
};

export const incrementIfOdd = () => (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
        return;
    }

    dispatch(actions.increment());
};

export const incrementAsync = (delay = 1000) => (dispatch) => {
    setTimeout(() => {
        dispatch(actions.increment());
    }, delay);
};

// Export the reducer, either as a default or named export
export default reducer;
