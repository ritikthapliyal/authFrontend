import './Css.css';
import AuthPages from './components/AuthPages'
import Dashboard from './components//Dashboard'
import UserDetails from './components/UserDetails'
import {BrowserRouter,Route, Routes} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
          <div className="App">
            <Routes>
                <Route path='/' Component={AuthPages}></Route>
                <Route path='/dashboard' Component={Dashboard}></Route>
                <Route path='/user_details' Component={UserDetails}></Route>
            </Routes> 
          </div>
      </BrowserRouter>
  )
}

export default App;
