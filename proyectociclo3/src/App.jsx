import './App.css';
import Login from './pages/Login';
import Productos from './pages/Productos';
import Ventas from './pages/Ventas';
import Index from './pages/Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layouts/Layout'
import Usuarios from './pages/Usuarios';

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Switch>
            <Route path='/login' >
              <Login />
            </Route>
            <Route path='/productos' >
              <Productos />
            </Route>
            <Route path='/ventas' >
              <Ventas />
            </Route>
            <Route path='/usuarios' >
              <Usuarios />
            </Route>
            <Route path='/' >
              <Index />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
