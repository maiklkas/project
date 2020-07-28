import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { BrowserRouter as Router } from 'react-router-dom';



import{useRoutes} from './auth Routes/routes'

function App(){
const routes = useRoutes( false)
    return (



        <Router>

          <NavigationBar />

            <Layout >
        <div className="container">
        {routes}
        </div>

            </Layout>

        </Router>

    );
  }

export default App;
