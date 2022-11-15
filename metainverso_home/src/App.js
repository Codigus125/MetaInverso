import './App.css';
import React from 'react';
import BarraNavegacion from './components/barraNav';
import Carousel from './components/carousel';
import Carousel_S from './components/carousel_S';
import Orden from './components/order';

class App extends React.Component{
    render(){
    return (
        <div class="content bg-image" style={{backgroundImage: `url(https://r4.wallpaperflare.com/wallpaper/946/632/921/espacio-estrellas-naturaleza-planetas-wallpaper-6d6c339403c18162f14ba14803526fe5.jpg)`,backgroundSize: '100%' , height: '100vh'}}>
          <BarraNavegacion></BarraNavegacion>
          <div class="row justify-content-center col-12 gap-3">
          <Carousel class="mx-auto"></Carousel>
          <Carousel_S></Carousel_S>
          </div>
          <div>
            <Orden></Orden>
          </div>
        </div>
    );
  }
}

export default App;
