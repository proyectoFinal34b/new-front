import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
/* import { Auth0Provider } from "@auth0/auth0-react"; */


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
{/*   <Auth0Provider
  domain="bastet2023.us.auth0.com"
  clientId="1H6S4HUys3cWYqdRzPeZ709ICXYL7zPU"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
> */}

     
      <BrowserRouter>
        <App />
      </BrowserRouter>
{/*      
     </Auth0Provider> */}
     </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
