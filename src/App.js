import React from 'react';
import './App.css';
import Posts from './Trivia/Posts';
import UnSplash from './Trivia/UnSplash';
// import { useEffect, useState } from 'react';
// import jwt_decode from "jwt-decode";
// import { Application } from './components/useContext';
// import SecondContext from './components/secondUseContext';
// import Persons from './components/components';
// import PackingList from './components/conditional';
// import Lists from './components/lists';
// import Clock from './components/Clock';
// import ResourceRenderer from './ResourceRenderer';
// import { useAuth0 } from './react-auth0-wrapper';
// import Listener from './states/eventListener';
// import SecondListener from './states/SecondListener';
// import Signup from './states/signup';
// import SwitchLights from './states/SwitchLights';
// import Carousel from './states/carousel';
// import Form from './states/Form';
// import FormTextBox from './states/textBox';
// import Render from './render&commits/render';
// import Clock from './render&commits/render';
// import SecondForm from './render&commits/render';
// import MovingDot from './render&commits/commits';
// import SpreadForm from './render&commits/spread';
// import Map from './Google/map';
// import Timer from './states/render';

// import {Elements, ElementsConsumer} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
// import CheckoutForm from './Virgo/Stripe';

function App() {

  // const [ user, setUser ] =  useState({ });


  // function handleSignOut (event) {
  //   event.preventDefault();
  //   setUser({});
  //   document.getElementById("google-button").hidden = false
  // }

  // function handelCallbackResponse(response) {
  // console.log(response.credential);
  // const token = response.credential;
  // const decoded = jwt_decode(token);
  // console.log(decoded);
  // setUser(decoded)
  // document.getElementById("google-button").hidden = true
  // }

// useEffect(() => {
//   /* global google */
//   google.accounts.id.initialize({
//     client_id: '',
//     callback: handelCallbackResponse,
//   });
//   google.accounts.id.renderButton(
//     document.getElementById('google-button'),
//     {
//       theme: 'outlined',
//       size: 'large',
//     });
//   google.accounts.id.prompt()
// }, [])



  // const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  // if (loading) {
  //   return (
  //     <div>Loading...</div>
  //   );
  // }

  // if (!isAuthenticated) {
  //   loginWithRedirect({});
  // }

  // const buttonHandler = (event) => {
  //   return 
  // };

  // const InjectedCheckoutForm = () => (
  //   <ElementsConsumer>
  //     {({stripe, elements}) => (
  //       <CheckoutForm stripe={stripe} elements={elements} />
  //     )}
  //   </ElementsConsumer>
  // );
  
  // const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

  return (
    <div className="App">
    {/* <Posts/> */}
    <UnSplash/>
  {/* <Elements stripe={stripePromise}>
    <InjectedCheckoutForm />
  </Elements> */}
      {/* <div id="google-button"></div>
      {
        Object.keys(user).length !== 0 &&
        <button onClick={(e) => handleSignOut(e)}>Sign out</button>
      }
       { user &&
       <div>
        <img src={user.picture}  alt=''></img>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
       </div>
       }
      {/* {isAuthenticated && <ResourceRenderer/>}      */}
      {/* <Application />
      <SecondContext /> */}
      {/* <h1>The Timer function </h1> */}
      
      {/* <Persons /> */}

      {/* <PackingList />
      <Lists /> */}
      {/* <Clock /> */}
{/* 
      <Listener />

      <SecondListener/>

     <Signup/> */}
  {/* <FormTextBox/> */}
  {/* <Map /> */}
  {/* <SpreadForm/>
  <MovingDot/>
   <SecondForm/> */}
 
   {/* <Form/>
   <Carousel/>
   <Carousel/> */}


   {/* <Timer /> */}
    </div> 
  );
}

export default App;
