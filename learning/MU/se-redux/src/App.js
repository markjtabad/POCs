import React from 'react';

import { H1 } from '@awesomecomponents/mux/core/typography';
import UtilityHeader from '@awesomecomponents/mux/core/components/UtilityHeader';
import '@awesomecomponents/mux/core/typography/assets/fonts/fonts.css';
import DoctorsList from './components/DoctorsList';
import PatientList from './components/PatientsList';
import './App.css';

import store from './store';
import { Provider as ReduxProvider} from 'react-redux';

function App(props) {
  return (
    <div className="app">
      <ReduxProvider store={store}>
        <UtilityHeader />
        <H1>Hello, {props.name}</H1>
        <DoctorsList />
        <PatientList />
      </ReduxProvider>
    </div>
  );
}

export default App;
