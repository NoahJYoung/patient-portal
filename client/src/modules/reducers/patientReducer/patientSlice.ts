/* eslint-disable no-param-reassign */
import type { Patient } from 'src/api/types/Patient';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './patientState';

const patientSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    setPatientList(state, action:PayloadAction<Patient[]>) {
      state.patientList = action.payload;
    },
    setLoading(state, action:PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    resetPatientState() {
      return initialState;
    },
  },
});

export const patientReducer = patientSlice.reducer;

export const {
  setPatientList,
  setLoading,
  resetPatientState,
} = patientSlice.actions;
