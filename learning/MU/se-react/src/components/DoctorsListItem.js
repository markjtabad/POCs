import { useState } from 'react';
import DoctorDetails from './DoctorDetails';

const DoctorsListItem = (props) => {
  const  { id, name } = props;

  const [details, setDetails] = useState(null);

  const URL ='https://doctor-info.apps.cac.preview.pcf.manulife.com/v1/doctor/';
  const onFecthDoctorDetails = () =>{
    fetch(`${URL}${id}`)
    .then(response => response.json())
    .then(result => {
      setDetails(result);
    })
    .catch(error => console.log(`Error occurred: ${error}`));
  }

  return <div>
    <a href='#' onClick={onFecthDoctorDetails}>{name}</a>

    {details && <DoctorDetails details={details}/>}
    </div>
}

export default DoctorsListItem;
