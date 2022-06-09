import { useState } from "react";
import { dataSlide } from "./dataSlide";
import './App.css';
import right from './right-arrow.png';
import left from './left-arrow.png';


function About() {
    const [photo, setPhoto] = useState(0);
    const {id, name, image} = dataSlide [photo];
    const previousPhoto = () => {
        setPhoto ((photo =>{
            photo--;
            if(photo < 0) {
                return dataSlide.length-1;
            }
            return photo;
        }))
    }

    const nextPhoto = () => {
        setPhoto ((photo => {
            photo++;
            if(photo > dataSlide.length-1)
            {photo = 0}
            return photo;
        }))
    }

    return ( <div>
         <div className="containerAboutUs">
             <div className="boxAboutUs">
              <p className="textAboutUs one">В  TIME for WINE вы найдете свой неповторимый вкус и аромат вина.</p>
             </div>
             <div className="boxAboutUs">
               <p className="textAboutUs two">У нас только проверенные поставщики, Мы уверены, что вино доставляется прямиком и виноградников   Франции, Италии, Грузии и России.</p>
             </div>
             <div className="boxAboutUs">
                <p className="textAboutUs one">Мы уверены в  качестве напитка и следим за качеством сервиса.</p>
             </div>
         </div>
        <div className="boxImages">
           <button className="icon" onClick={previousPhoto}><img  src={left} alt="назад"/></button>
           <img src={image} width="600px" height="400px" alt="vineyard"/>
           <button className="icon" onClick={nextPhoto}><img src={right} alt="вперед"/></button>
        </div>
        <div className="boxHeader">
            <p className="textAboutUs">{name}</p>
        </div>
       
    </div>
  
    );
}

export default About;