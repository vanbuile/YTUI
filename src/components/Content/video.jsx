import React from "react";
function Video(props){
    return (
        
            
        <a href="https://www.youtube.com/watch?v=okz5RIZRT0U" className = 'Video'> 
            <div className='Video__content'>
                <img src = {props.img}  alt = "Youtube video" className="Video__thumnail" />
                <div className="Video__text-area">
                    <h3 className="Video__heading">{props.header}</h3>
                    <p className = "Video__chanel-name">{props.chanelName}</p>
                    <div className="Video__info">
                        <p className="Video__info-view">{props.view}</p>
                        <p className="Video__info-time">{props.time}</p>
                    </div>
                </div>
                <a href={props.chanelLink} className = 'Video__chanel-logo'>
                    <img src={props.chanelLogo} alt ="Chanel Logo" className='Video__chanel-img'/>
                </a>
            </div>
        </a>
                
           
        
        
    );
}
export default Video;