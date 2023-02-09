
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import UserProfile from './components/UserProfile'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Careers from './components/Home'

const App = () =>(
  <>
  <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='aboutus' element={<AboutUs />}/>
        <Route exact path='/careers' element={<Careers />}/>
        <Route exact path='/userprofile' element={<UserProfile />}/>
      </Routes>
  </BrowserRouter>
  </>


)

export default App;
