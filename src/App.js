import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from './routes'
import HeaderCompnent from './components/Header';
import { GlobalProvider } from './contexts/Provider'
import "./App.css"
function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="app-landing-wrap landing_wrap">
            <div id="landing_wrap" className="landing-indigo-light">
              <HeaderCompnent />
              <AppRoutes />
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
