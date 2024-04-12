import { useState, useEffect } from 'react';
import Title from './Title';
import AddEmployee from './AddEmployee';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  const onAddEmployee = (newEmployee) => {
    setEmployees([...employees, {
      id: Date.now(),
      name: newEmployee
    }]);
  }

  useEffect(() => {
    fetch('https://mu-se-ph-08-abadmar-km-rest.apps.cac.preview.pcf.manulife.com/api/v1/employees')
      .then(response => response.json())
      .then(result => {

        setEmployees(result);
        console.log(employees);
      })
      .catch(error => console.log(`Error occurred: ${error}`));
  }, []);

  return (<div>
    <Title className='header' style={{color: 'red'}} text="List of Employees" />
    <AddEmployee onAddEmployee={onAddEmployee} />
    {employees.map((employee, index) => {
      return <EmployeeListItem key={index} id={employee.id} name={employee.name} />
    })}
  </div>)
}

export default EmployeeList;
