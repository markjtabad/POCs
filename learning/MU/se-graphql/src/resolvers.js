const fetch = require('node-fetch');

const API_URL =
  'https://rest-doctor-patient.apps.cac.preview.pcf.manulife.com/api/v1';

const mockAppointmentsDB = [];

const Query = {
  message: (parent, args, context, info) => {
    return 'Hello World!'
  },
  patient: async (parent, args, context, info) => {
    const { id } = args;
    const response = await fetch(`${API_URL}/patients/${id}`);
    const result = await response.json();
    return result;
  },
  doctor: async (parent, args, context, info) => {
    const { id } = args;
    const response = await fetch(`${API_URL}/doctors/${id}`);
    const result = await response.json();
    return result;
  }
};

const Patient = {
  doctors: async (parent, args, context, info) => {
    const { id } = parent;
    const url = `${API_URL}/visits?patient_id=${id}`;

    const visits = await fetch(url).then((res) => res.json());
    console.log(visits);

    const arrayDoctorPromises = visits.map((visit) =>
      fetch(`${API_URL}/doctors/${visit.doctor_id}`).then((res) => res.json())
    );

    //const doctors = await Promise.all(arrayDoctorPromises);
    //return doctors;
    return Promise.all(arrayDoctorPromises);
  }
};

const Doctor = {
  patients: async (parent, args, context, info) => {
    const { id } = parent;
    const url = `${API_URL}/visits?doctor_id=${id}`;

    const visits = await fetch(url).then((res) => res.json());
    console.log(visits);

    const arrayPatientPromises = visits.map((visit) =>
      fetch(`${API_URL}/patients/${visit.patient_id}`).then((res) => res.json())
    );

    return Promise.all(arrayPatientPromises);
  }
};

const Mutation = {
  createAppointment: (parent, args, context, info) => {
    const { patient_id, doctor_id, date } = args;
    //const { patient_id, doctor_id, date } = input;

    const appointment = {
      id: mockAppointmentsDB.length,
      patient_id,
      doctor_id,
      date
    };

    mockAppointmentsDB.push(appointment);

    return {
      appointment
    };
  }
};

module.exports = { Query, Mutation, Patient, Doctor };
