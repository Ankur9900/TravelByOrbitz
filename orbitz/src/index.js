import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import {ChakraProvider} from "@chakra-ui/react";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
        {/* <ChakraProvider>  */}
        
        <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
         </Provider>
         {/* </ChakraProvider> */}
  </React.StrictMode>

);
