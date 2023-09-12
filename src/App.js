import './App.css';
import AuthPages from './AuthPages';
import Dashboard from './Dashboard';
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
          <div className="App">
            <Route path='/' Component={AuthPages}></Route>
            <Route path='/dashboard' Component={Dashboard}></Route>
          </div>
      </BrowserRouter>
  )
}

export default App;
