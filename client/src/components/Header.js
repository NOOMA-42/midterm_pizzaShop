import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
	return (
		<header>
			<div className="container">
			<Link className="logo" to="/"><img src={require('../images/logo-white.png')} alt="Logo"></img></Link>

				<div className="right-area">
					<h6><a className="plr-20 color-white btn-fill-primary" href="c">ORDER: +34 685 778 8892</a></h6>
				</div>

				<a className="menu-nav-icon" data-menu="#main-menu" href="c"><i className="ion-navicon"></i></a>

				<ul className="main-menu font-mountainsre" id="main-menu">
					<li><Link to="/">HOME</Link></li>
					<li><Link to="/aboutUs">ABOUT US</Link></li>
					<li><Link to="/menu">SERVICES</Link></li>
					<li><Link to="/blog">NEWS</Link></li>
					<li><Link to="/contact">CONTACT</Link></li>
				</ul>
			
				<div className="clearfix"></div>
			</div>
		</header>
	);
}