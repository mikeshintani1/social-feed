import React, { useState } from "react";
import "./CustomButton.css"

const CustomButton = (props) => {

    function handleClick(){

    }
        return (
            <div>
                <button className="inactive" onClick={handleClick}>{props.message}</button>
            </div>
        )
}

export default CustomButton