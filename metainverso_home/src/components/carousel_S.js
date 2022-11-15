import React from "react";
import Terraria_L from "../images/Logo_Terra.webp"
import Minecraft_L from "../images/Logo_Mine.webp"
import Csgo_L from "../images/Logo_csgo.png"

class Carousel_S extends React.Component{
  render(){
    return(
        <div class="border border-dark bg-dark border-5 rounded col-3 ">
        <div id="carouselExampleIndicators" class="carousel slide w-100 " data-bs-ride="carousel">
            
            <h1 class="content text-bg-dark">
                Servidores
            </h1>
            <div class="carousel-inner ">
                <div class="carousel-item active ">
                <img src={Terraria_L} class="border-4 rounded d-block w-100 m-1 rounded mx-auto " alt="..."></img>
                <div class="carousel-caption d-flex d-md-block">
                </div>
                </div>
                <div class="carousel-item">
                <img src={Minecraft_L} class="d-block w-100 m-1 rounded mx-auto " alt="..."></img>
                </div>
                <div class="carousel-item">
                <img src={Csgo_L} class="d-block w-100 m-1 rounded mx-auto " alt="..."></img>
                </div>
                <div class="carousel-indicators m-0">
                <button type="button-light" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button-light" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button-light" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            </div>
            <div class="d-grid ">
                <button type="button" class="btn btn-primary btn-lg justify-content-center m-4 ">Detalles</button>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            </div>
		);
  }
}


export default Carousel_S;