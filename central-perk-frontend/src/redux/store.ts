import { configureStore } from '@reduxjs/toolkit';
import rewardsReducer from './slices/rewardsSlice';

const store = configureStore({
  reducer: {
    rewards: rewardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
