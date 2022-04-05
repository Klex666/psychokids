import "./style/style.sass"

import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header/Header'
import MainPage from "./components/pages/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/pages/Catalog/Catalog"

function App() {
  
  const [sliderImg, setSliderImg] = useState([]);
  const [clothes, setClothes] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
       const clothesItems = await axios.get('https://62487b92831c69c687c4c28f.mockapi.io/Clothes')
       setIsLoading(false)

       setClothes(clothesItems.data)
    }

    fetchData()
   }, []);


   useEffect(() => {
    async function fetchData() {
      const sliderImg = await axios.get('https://62487b92831c69c687c4c28f.mockapi.io/sliderImg')

      setSliderImg(sliderImg.data)
    }

    fetchData()
 }, []);




  return (
        <div className="App">
          <main>
            <Header/>
              <Routes>
                <Route path='/' element={<MainPage sliderImg={sliderImg}/>}/>
                <Route path='/catalog' element={<Catalog isLoading={isLoading} clothes={clothes}/>}/>
              </Routes>
            <Footer/>
          </main>
        </div>
  );
}

export default App;
