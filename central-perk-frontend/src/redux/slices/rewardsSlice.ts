import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer {
  id: number;
  name: string;
  pointsToday: number;
  points: number;
}

interface RewardsState {
  pointsToday: number;
  pointsLast7Days: number;
  pointsLast30Days: number;
  pointsRedeemed: number;
  customers: Customer[];
}

const initialState: RewardsState = {
  pointsToday: 0,
  pointsLast7Days: 0,
  pointsLast30Days: 0,
  pointsRedeemed: 0,
  customers: [],
};

const rewardsSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    setPointsToday(state, action: PayloadAction<number>) {
      state.pointsToday = action.payload;
    },
    setPointsLast7Days(state, action: PayloadAction<number>) {
      state.pointsLast7Days = action.payload;
    },
    setPointsLast30Days(state, action: PayloadAction<number>) {
      state.pointsLast30Days = action.payload;
    },
    setPointsRedeemed(state, action: PayloadAction<number>) {
      state.pointsRedeemed = action.payload;
    },
    setCustomers(state, action: PayloadAction<Customer[]>) {
      state.customers = action.payload;
    },
  },
});

export const {
  setPointsToday,
  setPointsLast7Days,
  setPointsLast30Days,
  setPointsRedeemed,
  setCustomers,
} = rewardsSlice.actions;

export default rewardsSlice.reducer;
