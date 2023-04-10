import React, {createContext, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react";
import {AppFuncProvider} from "./customReact/contexts/AppFuncContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider>
            <AppFuncProvider>
                <App/>
            </AppFuncProvider>
        </ChakraProvider>
    </React.StrictMode>,
)
