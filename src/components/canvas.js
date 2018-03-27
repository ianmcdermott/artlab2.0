//canvas.js
import React from 'react';
import './canvas.css';
import './hex.js';
import './navigation.js';
import './artboard.js';

import classNames from 'classnames';

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    render() {
        return (
            <div className="">
                <Navigation />
                <Hex type="tools"/>
                <Artboard />
                <Hex type="colors"/>
            </div>
        );
    }
}
