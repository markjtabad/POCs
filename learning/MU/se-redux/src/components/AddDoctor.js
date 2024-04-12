import React, { useState } from 'react';

const AddDoctor = (props) => {
  const [doctorName, setDoctorName] = useState('');

  const handleChangeName = (event) => {
    setDoctorName(event.target.value);
  };

  const handleAddDoctor = () => {
    if (!doctorName) {
      return;
    }

    props.onAddDoctor(doctorName);
    setDoctorName('');
  };

  return (
    <div>
      <input type="text" value={doctorName} onChange={handleChangeName} />
      <button onClick={handleAddDoctor}>Add Doctor</button>
    </div>
  );
};

export default AddDoctor;
