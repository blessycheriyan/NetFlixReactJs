import React from 'react'



import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost' 
import {action,horror,comedy,originals,Movies } from './urls'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      
      <RowPost url={originals} title="Netflix Originals"/>
     
      <AliceCarousel autoPlay autoPlayInterval="3500">
 
       
   
   
      <RowPost url={horror} title="Horror Movies" isSmall/>
      <RowPost url={Movies} title="Movies" isSmall/>
      <RowPost url={comedy} title="Comedy Movies" isSmall/>
     
      </AliceCarousel>
      <RowPost url={action} title="Action Movies" isSmall/>
     
   
    
   
 
      

      
    
    </div>
 
  );
}

export default App;
