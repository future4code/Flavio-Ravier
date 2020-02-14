import {Planet} from './../img/index'

export default function PlanetImage(planet){
    let linkImage = "";
    switch (planet) {
      case "Plutão":
        linkImage = Planet.plutao;
        return linkImage;
      case "Marte":
        linkImage = Planet.marte;
        return linkImage;
      case "Netuno":
        linkImage = Planet.neturno;
        return linkImage;
      case "Jupiter":
        linkImage = Planet.jupiter;  
        return linkImage; 
      case "Terra":
        linkImage = Planet.terra;
        return linkImage;
      case "Vênus":
        linkImage = Planet.venus; 
        return linkImage;
      case "Saturno":
        linkImage = Planet.saturno; 
        return linkImage;
      case "Urano":
        linkImage = Planet.urano; 
        return linkImage;           
      default: return "error de link de imagem";
    }
  }