
import { Outlet } from 'react-router-dom';
import Navbar from './Header/Navbar';
import Footer from './Footer/Footer';

function App() {
 
  return (
    <>
      <div className='container mx-auto'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App;
