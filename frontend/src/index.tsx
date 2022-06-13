import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import ReactDOM from 'react-dom/client'



ReactDOM.createRoot(document.getElementById("root")!).render(
    <ChakraProvider>
      <App />    
    </ChakraProvider>
)
