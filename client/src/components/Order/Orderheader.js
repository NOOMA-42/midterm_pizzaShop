import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
	return (
		<header>
			<div className="container">
			<Link className="logo" to="/"><img src={require('../../images/logo-white.png')} alt="Logo"></img></Link>

				<div className="right-area">
				</div>

				<a className="menu-nav-icon" data-menu="#main-menu" href="c"><i className="ion-navicon"></i></a>

				<ul className="main-menu font-mountainsre" id="main-menu">
				</ul>
			
				<div className="clearfix"></div>
			</div>
		</header>
	);
}