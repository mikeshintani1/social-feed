import React, { useState } from "react";
import ThumbUpIcon from '@mui/icons/ThumbUp';
import ThumbDownIcon from '/@mui/icons/ThumbDown';
import Button from '@mui/core/Button';
import "./CustomButton.css"

const CustomButton = (props) => {

    const [likeButtonClass] = useState("inactive");
    const [countUp, setCountUp] = useState(0)
    const [countDown, setCountDown] = useState(0)

    function handleClick(){
        <button className ={likeButtonClass}>
        <Button onClick ={ ()=> setCountUp(countUp +1)}>
            <ThumbUpIcon />``${countUp=== 0 ?``:countUp}`}</Button>
            <Button onClick = {() => setCountDown(countDown+1)}><ThumbDownIcon/>{`S{countDown=== 0?`` : countDown}`}</Button>
        </button>
    }
    //     if(likeButtonClass === "inactive"){
    //         setButtonClass("active");
    //     }
    //     else{
    //         setButtonClass("inactive");
    //     }
    // }
    //     return (
    //         <div>
    //             <button className={likeButtonClass} onClick={handleClick}>{props.message}</button>
    //         </div>
    //     )
}

export default CustomButton