import "./style/style.sass"

import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header'
import MainPage from "./components/pages/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/pages/Catalog/Catalog"

function App() {
  return (
        <div className="App">
          <main>
            <Header/>
              <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
              </Routes>
            <Footer/>
          </main>
        </div>
  );
}

export default App;
