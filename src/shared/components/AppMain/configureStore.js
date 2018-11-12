import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import todo from '../../modules/ducks/todo';

const M1 = store => next => action => {
    console.log('A middleware1 开始');
    next(action);
    console.log('B middleware1 结束');
};

const M2 = store => next => action => {
    console.log('C middleware2 开始');
    next(action);
    console.log('D middleware2 结束');

};
const M3 = store => next => action => {

    console.log('E middleware3 开始');
    next(action);
    console.log('F middleware3 结束');
};

const reducer = combineReducers({
    todo,
});
const enhancer = compose(
    applyMiddleware(M1, M2, M3),
    process.env.NODE_ENV !== 'production' && window.devToolsExtension
        ? window.devToolsExtension()
        : f => f
);

const configureStore = createStore(
    reducer,
    enhancer
);
export default configureStore;