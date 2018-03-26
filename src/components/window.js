//window.js

import React from 'react';
import Plack from './plack'
import './window.css';
import classNames from 'classnames';
export default function Window(props){

	return(
		// <Grid>
	 		// <Row className="show-grid">
				// <Col sm={6} md={3}>
				<div className="col-md-6">
					<div className={classNames({[props.color]: true, [props.boot]: true})}>
					</div>
					<Plack color={props.plackColor} boot="col-md-6" offset="col-md-offset-3" text={props.text} link="canvas.html"/>
				</div>
				// </Col>
			// </Row>
		// </Grid>
	)
}

//<Window color="yellow" />

// function handleCss(){
// 	let sw = $('.yellow').width();
// 		$('.yellow').height(sw);
// 		$('.black-box').height(sw);
// 		// $('.square1').css('border-width',`${sw/10}px`);
// 		// $('.square2').css('border-width',`${sw/10}px`);
// 		// $('canvas').height(sw*.95);
// 		// $('canvas').width(sw*.95);
// 		// $('canvas').css('margin', sw/100);
// }


// $(handleCss);