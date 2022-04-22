import React, { useState } from "react";
import "./CustomButton.css"

const CustomButton = (props) => {

    const [likeButtonClass, setButtonClass] = useState("inactive");
    // const types = ['like', 'dislike'];
    
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
                <button className={likeButtonClass} type='onClick' onClick={handleClick}>{props.message}</button>
            </div>
        )
}

export default CustomButton