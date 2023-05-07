import React, {createContext, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react";
import {AppFuncProvider} from "./customReact/contexts/AppFuncContext.jsx";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <AppFuncProvider>
                    <App/>
                </AppFuncProvider>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>
)
