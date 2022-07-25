import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import Events from './pages/events';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Home1 from './pages/home1';
import OEprofile from './oe/OEprofile';
import Heiprofile from './hei/heiprofile';
import Fundsprofile from './fundsProfile/fundsprofile';



function App() {
return (
	
	<Router>
		
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home1 />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/events' element={<Events/>} />
		<Route path='/sign-up' element={<SignUp/>} />
		<Route path='/OEprofile' element={<OEprofile/>} />
		<Route path='/heiprofile' element={<Heiprofile/>} />
		<Route path='/fundsprofile' element={<Fundsprofile/>} />
		
	</Routes>
	</Router>
);
}


export default App;



