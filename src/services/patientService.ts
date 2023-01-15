import { v4 as uuidv4 } from 'uuid';

import patients from '../../data/patients';
import { NewPatient, Patient, PublicPatient } from '../types';

const getPatients = (): Array<Patient> => {
  return patients;
};

const getPublicPatients = (): Array<PublicPatient> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return {
      id,
      name,
      dateOfBirth,
      gender,
      occupation
    };
  });
};

const getPatientById = (id: string): Patient | undefined => {
  return patients.find(patient => patient.id === id);
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: uuidv4(),
    ...patient,
  };

  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  getPublicPatients,
  getPatientById,
  addPatient,
};
