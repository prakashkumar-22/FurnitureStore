import '../assets/Navbar.css'
import Form from './Form';
import Register from './Register';

import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";

function Home()
{
    return (
        <div>
            <h2 style={{
                color:'white'
            }}>This is the homepage</h2>
        </div>
    )
}

function Nav()
{
    return (
        <Router>
            <header>
            <nav className="navbar">
                <h2 className="logo">Furniture</h2>
                <ul className="all-links">
                    <li ><Link to='/' className='navlink'>HOME</Link></li>
                    <li ><Link to='/login' className='navlink'>LOGIN</Link></li>
                    <li ><Link to='/register'className='navlink'>REGISTER</Link></li>

                </ul>
            </nav>
            </header>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/login' element={<Form/>} />
                
            <Route exact path='/register' element={<Register/>} />
            
            
            </Routes>
        </Router>
    )
}
export default Nav;