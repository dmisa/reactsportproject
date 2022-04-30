import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Iframe from 'react-iframe'
import { Button } from 'react-bootstrap';



const Goal=() => {
    const [goaltitle , setGoalTitle] = useState("");
    const [goalvideo , setGoalVideo] = useState("");
    let u=0;

    const getGoal=()=>{


        axios.get("https://www.scorebat.com/video-api/v1/").then((response)=>{
            u=Math.floor(Math.random() * (Object.keys(response.data).length - 0) ) + 0;
            setGoalVideo(response.data[u].videos[0].embed.replace("<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;background:#000;'><iframe src='", "" ).replace("' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>", " " ));
            setGoalTitle(response.data[u].title);
        })

    }
    return(

        <div>
            <h1>goalpage</h1>
            <h1>{goaltitle}</h1>

            <div>
                <Iframe url={goalvideo}
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                />
            </div>
            <Button onClick={getGoal} className="px-4 gap-3" size="lg" variant="primary" >
                            Get Goal
            </Button>

            <Link to="/">back</Link>
        </div>
    );



}

export default Goal
