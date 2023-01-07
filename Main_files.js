import React from "react";
import "./p9.css"
import Navbar  from "./Navbar";
import heading from "./WORKSHOPS.png"
import Work from "./Work.js"
import Data from"./Data.js"
import storeroom from "./Data.js";

function Main_files(){

// defining by state-->

   let [now,changenow]=React.useState("WORKSHOPS");

   function pass(alpha,name,dname){

        changenow(oldstate=>{
   
                // let save2=document.getElementById("des");

             
        })
   }

        return(

         <div id="cont">
              
              <Navbar />
               
               <h1 id="heading">{now} </h1>

               <Work handle={pass} alpha="0" name="NFT WORKSHOP" />
               <Work handle={pass} alpha="1"  name="NFT WORKSHOP"/>
               <Work handle={pass} alpha="2" name="NFT WORKSHOP"/>

         </div>

        )
}

export default Main_files;