import React, { useState } from "react";
import "./CustomButton.css"

const CustomButton = (props) => {

    const [likeButtonClass, setButtonClass] = useState("inactive");

    function handleClick(){
        if(likeButtonClass === "inactive"){
            setButtonClass("active");
        }
        else{
            setButtonClass("inactive");
        }
    }
        return (
            <div>
                <button className={likeButtonClass} onClick={handleClick}>{props.message}</button>
            </div>
        )
}

export default CustomButton