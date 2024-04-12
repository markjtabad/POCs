const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    message: String
    employee(id: ID!): Employee
    department(departmentName: String): Department
  }

  type Employee {
    id: ID
    name: String
    dob: String
    department: String
    title: String
    avatarUrl: String
  }

  type Department{
    employee: [Employee]
  }
`;

module.exports = typeDefs;
