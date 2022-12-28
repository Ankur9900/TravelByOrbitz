import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import AuthContextProvider from "./Pages/context/AppContext";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
        <BrowserRouter>
        <AuthContextProvider>
        <Provider store={store}>
          <App />
         </Provider>
        </AuthContextProvider>
        </BrowserRouter>
      
  </React.StrictMode>

);
