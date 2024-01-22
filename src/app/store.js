import { configureStore } from '@reduxjs/toolkit';
import counterReducer, {incrementAsync} from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

console.log(store.dispatch(incrementAsync(20)))