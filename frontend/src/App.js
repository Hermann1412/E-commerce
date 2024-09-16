import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <main className='min-h-[calc(100vh-140px)]'>
        <Outlet/> {/** Display all the pages inside this main tag**/}
      </main>
      <Footer/>
    </>
  );
}

export default App;
