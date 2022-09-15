import { RootState } from 'src/modules/store/rootReducer';

export const getPatientList = (state:RootState) => state.patientReducer.patientList;
export const getLoading = (state:RootState) => state.patientReducer.loading;
