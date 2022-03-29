import { useState } from "react";
import React from "react";
import props from "../css/props.css"

function Base(params) {
    const[pizza,setPizza]=useState([
        {
            ID: 1,
            title: "Delicious Margritha Pizza here ",
            pizzapie: {
                ID: 1,
                name: "Margritha",
                dp: "http://placeimg.com/100/100/PIZZA?pizza-" + 1, 
            }
            },

        {
            ID: 2,
            title: "Delicious Margritha Pizza here ",
            pizzapie: {
                ID: 2,
                name: "Peri-Peri",
                dp: "http://placeimg.com/100/100/PIZZA?pizza-" + 1, 
        }
    }

    
    ]);
  


    var pizzList=[]
    for(let i=0;i<pizza.length;i++)
    {
        pizzList.push(
            <a href="#" className="pizzpie rel" key={"latest-pizza-"+i}>
                <div className="block" ></div>
            </a>
        )
    }

    return(
        <div className="Homepage rel">
            <div className='part rel '>
                <h2 className='title sizef28 font-weight'>Trending<span classname="now">Meals Grab Now</span></h2>
                <div className="pizzapie rel flex">
                    {pizza}
                </div>
        </div>
        </div>
    
    )
}

export default Base