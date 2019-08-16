import { createStore } from 'redux';
const reducer = () => {
    console.log("hello")
}
const initialState = {
    basketProducts: [],
}
const store = createStore(reducer, initialState);

export default store;

store.subscribe(() => {
    console.log("store -", store.getState());
})