import './Css.css';
import AuthPages from './components/AuthPages/AuthPages'
import Dashboard from './components/Dashboard/Dashboard'
import UserDetails from './components/AuthPages/UserDetails';
import Error from './components/Error'
import {BrowserRouter,Route, Routes} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
          <div className="App">
            <Routes>
                <Route path='/' Component={AuthPages}></Route>
                <Route path='/dashboard' Component={Dashboard}></Route>
                <Route path='/user_details' Component={UserDetails}></Route>
                <Route path='/error' Component={Error}></Route>
            </Routes> 
          </div>
      </BrowserRouter>
  )
}

export default App;
