//canvas.js
import React from 'react';
import './plack.css';
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
                <Tools />
                <Artboard />
                <Colors />
            </div>
        );
    }
}
