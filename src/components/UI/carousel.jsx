import React from 'react'
import {Carousel } from 'react-bootstrap'
import { useState } from "react";
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div>
             <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/platstunisiens-ojja-samia-caroussel.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Plats Tunisiens</h3>
            <p>Une recette facile et rapide de Ojja</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/platstunisiens-souscous-samia-caroussel.webp"
            
          />
  
          <Carousel.Caption>
            <h3>Plats Tunisiens</h3>
            <p>Une recette facile et rapide de Couscous</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/platstunisiens-foie-samia-caroussel.webp"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Plats Tunisiens</h3>
            <p>Une recette facile et rapide de Foie</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
     
    );
  }
export default ControlledCarousel