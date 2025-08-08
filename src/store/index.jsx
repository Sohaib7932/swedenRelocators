import { configureStore } from '@reduxjs/toolkit';
import authService from './services/authService';
import categoryService from './services/categoryService';
import authReducer from './reducers/authReducer';
import globalReducer from './reducers/globalReducer';
import homeProducts from './services/homeProducts';
import dropBackDropReducer from './reducers/addBackDrop';
const Store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [categoryService.reducerPath]: categoryService.reducer,
    [homeProducts.reducerPath]: homeProducts.reducer,
    authReducer: authReducer,
    dropBackDropReducer: dropBackDropReducer,
    globalReducer: globalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([categoryService.middleware, homeProducts.middleware]),
});
export default Store;
