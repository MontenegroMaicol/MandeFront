import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { NavbarHome } from './components/Navbar';
import { Registro } from './components/Registro';
import { CardsHome } from './components/Home';
//import { useHistory } from 'react-router-dom';

import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,

  MDBInput,
  MDBCheckbox,
  MDBCol
}
  from 'mdb-react-ui-kit';
import { TarjetaLab } from './components/Tarjeta';

function App() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBCol md='6' offsetMd='3'>
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="SampleI" />
        <h2 className="text-center">MANDE WEB</h2>
      </MDBCol>

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Ingresar
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Regístrate
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <MDBInput wrapperClass='mb-4' label='Correo' id='loginemail' type='email' />
          <MDBInput wrapperClass='mb-4' label='Contraseña' id='loginpass' type='password' />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Recordar sesión' />
            <a href="!#">olvidó su contraseña?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Iniciar Sesión</MDBBtn>

          {/*
          
          <div className="d-flex justify-content-center">
            <a href="/components/Home.js">Home</a>
          </div> 
          
          */}
          

          <p className="text-center">¿No estás registrado?</p>
          <div className='d-flex justify-content-center mb-4'>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
              Regístrate
            </MDBTabsLink>
          </div>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          {/*Inicio registro doble*/}
          <div>

            <Registro />

          </div>
          {/*Fin registro doble*/}

          <div className='d-flex justify-content-center mb-4'>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
              ¿Ya tienes una cuenta creada? Ingresa!
            </MDBTabsLink>
          </div>

        </MDBTabsPane>

      </MDBTabsContent>

      <div>
        <NavbarHome/>
        <CardsHome />
        <CardsHome />
        <TarjetaLab/>

      </div>

    </MDBContainer>
  );
}

export default App;