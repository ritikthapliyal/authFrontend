import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './apis/authApis';

const store = configureStore({
  reducer: {
    auth : authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store