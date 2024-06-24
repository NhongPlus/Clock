import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/NavigationMenu/Navigation';
import MainContent from './components/MainContent/MainContent';
import Content from './components/Content/Content';
import Login from './components/Login/Login';
import Lamp from './components/Lamp/lamp';
import Money from './components/Money/Money';
import UseEffect3 from './components/Effect/UseEffect';
import DOMAccessExample from './components/DOM/domaccessExample.js';
function App() {

  const list = [
    "menu1",
    "menu2",
    "menu3",
  ]
  const quantity = 5;
  return (
    <>
      <Money />
      <DOMAccessExample/>
      {/* <Header soluong={quantity}
        menu={list}
        name="haha đây là props nhá"
        img="./logo.svg"
        className="menu" />
      <Navigation />
      <main className='main'>
        <Content text="content 1" />
        <MainContent />
        <Content text="content 2" />
      </main> 
      <Footer /> */}
      <Login/>
      <Lamp />
    </>
  );
}

export default App;
