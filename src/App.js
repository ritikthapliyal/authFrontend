import './Css.css';
import AuthPages from './components/AuthPages'
import Dashboard from './components//Dashboard'
import {BrowserRouter,Route, Routes} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
          <div className="App">
            <Routes>
                <Route path='/' Component={AuthPages}></Route>
                <Route path='/dashboard' Component={Dashboard}></Route>
            </Routes> 
          </div>
      </BrowserRouter>
  )
}

export default App;
