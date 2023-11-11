import "./App.css";
import Body from './componenets/Body';
import Footer from './componenets/Footer';
import ResponsiveAppBar from "./componenets/Navbar";
// import mypic from './assets/images/mypic.jpg';

function App() {
  return (
    <div >
      <div className="main-block">
        <ResponsiveAppBar />
        <Body/>
        <Footer/>
        
      </div>
    </div>
  );
}

export default App;
