import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

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
  //MDBCol
}
from 'mdb-react-ui-kit';

export function Registro() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('regcli')} active={justifyActive === 'regcli'}>
            Cliente
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('regtrab')} active={justifyActive === 'regtrab'}>
            Trabajador
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'regcli'}>

        <MDBInput wrapperClass='mb-4' label='Nombres' id='cliname' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Apellidos' id='clilastn' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Cédula' id='clicedula' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Correo' id='cliemail' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Contraseña' id='clipass' type='password'/>
          <MDBInput wrapperClass='mb-4' label='Dirección' id='clidir' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Número Celular' id='clicel' type='text'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='He leído y acepto los términos' />
          </div>

          <MDBBtn className="mb-4 w-100">Registrarme</MDBBtn>
          
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'regtrab'}>

          <MDBInput wrapperClass='mb-4' label='Nombres' id='trabname' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Apellidos' id='trablastn' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Cédula' id='trabcedula' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Correo' id='trabemail' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Contraseña' id='trabpass' type='password'/>
          <MDBInput wrapperClass='mb-4' label='Dirección' id='trabdir' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Número Celular' id='trabel' type='text'/>
          
          

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='He leído y acepto los términos' />
          </div>


          <MDBBtn className="mb-4 w-100">Registrarme</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}