import store from './store';
import { addToCart }  from './actions/cart-actions';

//console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() => {
        //console.log("state发生变化");
        return console.log(store.getState());
    }
);
//console.log("dispatch action ");
store.dispatch(addToCart('Coffee 500gm', 1, 250));
//console.log("dispatch action ");
store.dispatch(addToCart('Flour 1kg', 2, 110));
//console.log("dispatch action ");
store.dispatch(addToCart('Juice 2L', 1, 250));

unsubscribe();