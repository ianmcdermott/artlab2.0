//board.js
import React from 'react';
import Window from './window';
import './board.css';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {
        return (
            <div className="row">
               <div class="hex"></div>
            </div>
        );
    }
}


