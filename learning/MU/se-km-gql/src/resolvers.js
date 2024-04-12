const fetch = require('node-fetch');

const API_URL =
  'https://mu-se-ph-08-abadmar-km-rest.apps.cac.preview.pcf.manulife.com/api/v1';

const Query = {
  message: (parent, args, context, info) => {
    return "Mark's KM! Querying Employees.";
  },
  employee: async (parent, args, context, info) => {
    const { id } = args;
    const response = await fetch(`${API_URL}/employees/?id=${id}`);
    const result = await response.json();
    return result;
  },
  department: (parent, args, context, info) => {
    const { departmentName } = args;
    return departmentName;
  }
};

const Department = {
  employee: async (parent, args, context, info) => {
    const departmentName = parent;
    const url = `${API_URL}/employees?department=${departmentName}`;

    const employees = await fetch(url).then((res) => res.json());

    const result = employees.map(result => { return result; });
    console.log(result);
    return result;
  }
};

module.exports = { Query, Department };
