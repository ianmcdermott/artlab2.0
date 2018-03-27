//label.js
import React from 'react';
import './plack.css';
import classNames from 'classnames';

export default function Label(props){
	return(
		<div className={classNames({[props.color]: true, [props.boot]: true, [props.offset]: true})}>
			<Link to={props.link}>
				<h2>{props.text}</h2>
			</Link>
		</div>
		)
}
