import { useState } from 'react';
import EmployeeDetails from './EmployeeDetails';

const EmployeeListItem = (props) => {
  const  { id, name } = props;

  const [details, setDetails] = useState(null);

  const URL ='https://mu-se-ph-08-abadmar-km-rest.apps.cac.preview.pcf.manulife.com/api/v1/employees/';
  const onFecthEmployeeDetails = () =>{
    fetch(`${URL}?id=${id}`)
    .then(response => response.json())
    .then(result => {
      setDetails(result);
    })
    .catch(error => console.log(`Error occurred: ${error}`));
  }

  return <div>
    <a href='#' onClick={onFecthEmployeeDetails}>{name}</a>

    {details && <EmployeeDetails details={details}/>}
    </div>
}

export default EmployeeListItem;
