import { useState } from "react";
import {data} from "./data";
import './App.css';
import Wine from "./Wine";
import Buttons from "./Buttons";




function Shop() {

    const [wine, setWine] = useState(data);
    const [showText, setShowText] = useState(false);
    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText);
    }

    const chosenWine = (searchTeam) => {
        const newWine = data.filter(element => element.searchTerm === searchTeam);
        setWine(newWine);
    }

    
    return(
        <div>
        <Buttons chosenWine = {chosenWine}/>
        <Wine allWine = {wine} show = {showTextClick}/>
        </div>
    )
     
}

export default Shop;