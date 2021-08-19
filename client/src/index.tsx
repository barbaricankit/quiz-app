import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { QuizProvider } from './context/quiz/quiz-context'
import { BrowserRouter as Router } from 'react-router-dom'
import { SocketProvider } from './context/socket/socket-context'
import { AuthProvider } from './context/auth/auth-context'
ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <Router>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <SocketProvider>
            <QuizProvider>
              <App />
            </QuizProvider>
          </SocketProvider>
        </ChakraProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
