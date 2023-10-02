import './Css.css';
import AuthPages from './components/AuthPages/AuthPages'
import UserDetails from './components/AuthPages/UserDetails'
import Error from './components/Error'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import AddBlog from './components/Dashboard/AddBlog'
import { useSelector } from 'react-redux';

function App() {

    const {isAdmin} = useSelector((state)=>state.authSlice)

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' Component={AuthPages}></Route>
                    <Route path='/add_blog' Component={isAdmin ? AddBlog : Error}></Route>
                    <Route path='/user_details' Component={UserDetails}></Route>
                    <Route path='/error' Component={Error}></Route>
                </Routes> 
            </div>
        </BrowserRouter>
    )
}

export default App;
