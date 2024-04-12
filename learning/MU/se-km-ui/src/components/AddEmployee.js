import { Button, BUTTON_VARIANT } from '@manulife/mux';
import { TextInput, ADORNMENT_POSITION, TEXT_ALIGN, INPUT_VARIANT } from '@manulife/mux';
import { useState } from 'react';


const AddEmployee = (props) => {
  const  { onAddEmployee } = props;
  const [value, setValue] = useState('');

  const handleOnChangeValue= (event) => {
    setValue(event.target.value);
  }

  const handleOnAddEmployee = () =>{
    onAddEmployee(value);
    setValue('');
  }

    return (
      <>
        <input type='text' value={value} onChange={handleOnChangeValue}/>
        <Button variant={BUTTON_VARIANT.SECONDARY} name='add' onClick={handleOnAddEmployee}>Add</Button>
      </>
    )
  }

  export default AddEmployee;
