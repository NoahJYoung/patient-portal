import type { Patient } from 'src/api/types/Patient';

export interface State {
  loading: boolean
  currentPatient: Patient | null
  currentTest: string | null
  patientList: Patient[]
}

export const initialState: State = {
  loading: false,
  currentPatient: null,
  currentTest: null,
  patientList: [],
};
