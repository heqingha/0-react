import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers.js';

let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

// 今天突然发现，当修改reducer代码的时候，页面会整个刷新，而不是局部刷新唉。

// 这不行，就去查了webpack文档，果然是要配置的。看这里

// 代码修改起来也简单,增加一段监听reducers变化，并替换的代码。


if (module.hot) {
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require("./reducers").default;
        store.replaceReducer(nextCombineReducers);
    });
}

export default store;