import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Iframe from 'react-iframe'
import { Button } from 'react-bootstrap';

function linkify(text) {
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
        return url
    });
}


const Goal=() => {
    const [goaltitle , setGoalTitle] = useState("");
    const [goalvideo , setGoalVideo] = useState("");
    let u=0;

    const getGoal=()=>{


        axios.get("https://www.scorebat.com/video-api/v1/").then((response)=>{
            u=Math.floor(Math.random() * (Object.keys(response.data).length - 0) ) + 0;
            setGoalVideo(linkify(response.data[u].videos[0].embed)); 
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
