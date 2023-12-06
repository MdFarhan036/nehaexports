
import "./App.css";
// import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar";
import Footer from "./common/footer/Footer";
import Header from "./components/Header";
import About from "./components/About"
import Contact from "./components/Contact"
import Landing from "./components/Landing";
function App() {
  return (
    <>
      <Header />,
      <Navbar />,
      <About />,
      <Contact />,
      <Landing  />,
      {/* <Product />, */}
      {/* <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Routes> */}
      <Footer />

    </>
  );
}

export default App;