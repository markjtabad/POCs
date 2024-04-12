import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddDoctor from './AddDoctor';
import DoctorListItem from './DoctorListItem';
import { H2 } from '@awesomecomponents/mux/core/typography';

import { addDoctor, fetchDoctor, deleteDoctor } from '../reducers/doctorActions';

const getDoctors = (state) => {
  return state.doctors.items;
}

const DoctorsList = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors.items);

  // const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    dispatch(fetchDoctor());
  }, []);  
  
  // useEffect(() => {
  //   fetch(
  //     'https://rest-example-node.apps.cac.preview.pcf.manulife.com/v1/doctors'
  //   )
  //     .then((response) => response.json())
  //     .then((result) => setDoctors(result));
  // }, []);

  const handleAddDoctor = (name) => {
    const newDoctor = { id: Date.now().toString(), name };

    dispatch(addDoctor(newDoctor));

    // setDoctors([...doctors, newDoctor]);
  }

  const handleDeleteDoctor = (id) => {
    //const newDoctors = doctors.filter((doctor) => doctor.id !== id);
    // setDoctors(newDoctors);
    //dispatch(deleteDoctor(newDoctors));
    dispatch(deleteDoctor(id));
  }
  
  return (
    <>
      <H2>Doctors List</H2>
      <AddDoctor onAddDoctor={handleAddDoctor} />
      {doctors.map((doctor) => (
        <DoctorListItem
          key={doctor.id}
          id={doctor.id}
          name={doctor.name}
          onDeleteDoctor={(id) => handleDeleteDoctor(id)}
        />
      ))}
    </>
  );
}

export default DoctorsList;
