const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    message: String
    patient(id: ID!): Patient
    doctor(id: ID!): Doctor
  }

  type Mutation {
    createAppointment(input: CreateAppointmentRequest): CreateAppointmentResponse
  }

  input CreateAppointmentRequest {
    patient_id: ID!
    doctor_id: ID!
    date: String
  }

  type CreateAppointmentResponse{
    appointment: Appointment
  }

  type Appointment{
    id: ID
    patient_id: String
    doctor_id: String
    date: String
  }

  type Patient {
    id: ID
    name: String
    doctors: [Doctor]
  }

  type Doctor{
    id: ID
    name: String
    patients: [Patient]
  }
`;

module.exports = typeDefs;
