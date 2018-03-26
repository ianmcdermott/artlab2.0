//board.js
import React from 'react';
import Window from './window';
import './board.css';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dashboard: "home",
            lPlack: "",
            rPlack: "",
            lBox: "",
            rBox:""
        };
    }


    /* {
        dashboard: gallery,
        lPlack: "Artists",
        rPlack: "Image featured in:",
        lBox: credits,
        rBox: videoPlayer

        },
        {
            dashboard: theatre,
            lPlack: "Artists",
            rPlack: 
                {
                    title: "",
                    sub: "Created on:",
                    created: ""
                }, 
            lBox: credits,
            rBox: videoPlayer

        }

    */


    render() {
        return (
            <div className="boarder row">
                <Window color="yellow" boot="col-xl-6" plackColor="plack-white" text="Make Art"/>
                <Window color="black-box" boot="col-xl-6" plackColor="plack-black" text="View Art"/>
            </div>
        );
    }
}
