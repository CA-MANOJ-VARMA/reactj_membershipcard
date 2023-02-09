import {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'


class Navbar extends Component {

    render() {
        return (
            <div className='css-bg-container'>
                <nav className="css-navbar-container">
                    <ul className="css-ul-container">
                        <li>
                        <NavLink to='/' className=
                           'css-link-general'>
                            Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/aboutus' className=
                            'css-link-general'>
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/careers' className=
                            'css-link-general'>
                                Careers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/userprofile' className=
                           'css-link-general'>
                            User Profile
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar