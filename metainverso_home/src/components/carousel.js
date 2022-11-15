import React from "react";
import Terraria from "../images/Fondo_Terraria.jpg"
import Minecraft from "../images/Fondo_minecraft.jpg"
import Csgo from "../images/Fondo_csgo.webp"

class Carousel extends React.Component{
  render(){
    return(
        <div class="d-flex bg-dark  border border-5 border-dark rounded col-6">
        <div id="carouselExampleIndicators_1" class="carousel slide w-100 " data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <h1 class="content text-bg-dark">
                Novedades
            </h1>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={Terraria} class="d-block w-100 p-1" alt="..."></img>
                </div>
                <div class="carousel-item">
                <img src={Minecraft} class="d-block w-100 p-1" alt="..."></img>
                </div>
                <div class="carousel-item">
                <img src={Csgo} class="d-block w-100 p-1" alt="..."></img>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators_1 , carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators_1 , carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            </div>
		);
  }
}


export default Carousel;