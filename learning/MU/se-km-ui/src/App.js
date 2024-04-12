import React from 'react';

import { ThemeProvider } from 'styled-components';
import {
  H1, Footer, UtilityHeader, SideNav, THEMES, Button, BUTTON_VARIANT, CONTENT_TYPE,
  SideNavSection,
  MainNavItem,
  SubNavItem,
  SubNavDropdown,
  ContactUs,
  Lang,
  Search,
  SearchField,
  SignIn,
  SignInMenuItem,
} from '@manulife/mux';
import './App.css';
import EmployeeList from './components/EmployeeList';

function App() {

<ThemeProvider theme={THEMES.globalTheme}>
      <SideNav id="sidenav">
        <SideNavSection id="personal">
          <MainNavItem id="with-sub-1" as="button" itemKey="3" label="With SubNav">
            <SubNavItem id="with-3.1" as="button" itemKey="3.1" label="SubNav Item 1" />
            <SubNavItem id="with-3.2" as="button" itemKey="3.2" label="SubNav Item 2" />
            <SubNavItem id="with-3.3" as="div" itemKey="3.3" contentType={CONTENT_TYPE.BANNER}>
              <div>
                <img alt="Cute kitten" src="http://placekitten.com/235/170" style={{
              paddingTop: '30px',
              display: 'block'
            }} />
                <Button variant={BUTTON_VARIANT.TERTIARY} customStyle={{
              buttonStyle: {
                paddingLeft: '0'
              }
            }}>
                  More kittens
                </Button>
              </div>
            </SubNavItem>
          </MainNavItem>
          <MainNavItem id="with-sub-2" as="button" itemKey="4" label="With SubNav" >
            <SubNavItem id="with-4.1" as="button" itemKey="4.1" label="SubNav Item 1" />
            <SubNavItem id="with-4.2" as="button" itemKey="4.2" label="SubNav Item 2" />
            <SubNavItem id="with-4.3" as="button" itemKey="4.3" label="SubNav Item 3" />
            <SubNavItem id="with-4.4" as="button" itemKey="4.4" label="SubNav Item 4" />
            <SubNavItem id="with-4.5" as="button" itemKey="4.5" label="SubNav Item 5" />
          </MainNavItem>
          <MainNavItem id="no-sub-1" as="button" itemKey="1" label="No SubNav" />
          <MainNavItem id="no-sub-2" as="button" itemKey="2" label="No SubNav" />
        </SideNavSection>
        <SideNavSection id="business">
          <MainNavItem id="no-sub-3" as="button" label="No SubNav" itemKey="5" />
          <MainNavItem id="no-sub-4" as="button" label="No SubNav" itemKey="6" />
        </SideNavSection>
      </SideNav>
    </ThemeProvider>

  return (
    <div>
      <UtilityHeader />
      <H1>Mark's KM for MUSE Cohort 8!</H1>


      <EmployeeList />
      <Footer />
    </div>
  );
}

export default App;
