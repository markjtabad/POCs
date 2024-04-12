import { useState, useEffect } from 'react';
import Title from './Title';
import AddDoctor from './AddDoctor';
import DoctorsListItem from './DoctorsListItem';

const DoctorList = (props) => {
  const [doctors, setDoctors] = useState([]);

  const onAddDoctor = (newDoctor) => {
    setDoctors([...doctors, {
      id: Date.now(),
      name: newDoctor
    }]);
  }

  useEffect(() => {
    fetch('https://rest-example-node.apps.cac.preview.pcf.manulife.com/v1/doctors')
      .then(response => response.json())
      .then(result => {

        setDoctors(result);
        console.log(doctors);
      })
      .catch(error => console.log(`Error occurred: ${error}`));
  }, []);

  return (<div>
    <Title className='header' style={{color: 'red'}} text="Doctor's List" />
    <AddDoctor onAddDoctor={onAddDoctor} />
    {doctors.map((doctor, index) => {
      return <DoctorsListItem key={index} id={doctor.id} name={doctor.name} />
    })}
  </div>)
}

export default DoctorList;
