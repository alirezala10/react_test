import { createStore, applyMiddleware } from 'redux';
import reducers from './../store/reducer';
import middlewares from './../middlewares';

export default function configureStore() {
    const store = createStore(
        reducers,
        applyMiddleware(
            ...middlewares
        )
    );


    store.subscribe(() => { });

    return store;
}