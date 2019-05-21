import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

// note: import order is matter, styles.css shd be last one to cover bootstrap.
import '../fonts/beyond_the_mountains-webfont.css';
import '../fonts/ionicons.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../common/styles.css';
// general
import Header from '../components/Header';
import MainSlider from '../components/Mainslider';
import Footer from '../components/Footer';
// MainPage
import StoryAreaMainPage from '../components/MainPage/StoryArea';
import BestSeller from '../components/MainPage/BestSeller';
import Menu from '../components/MainPage/Menu';
// AboutUs
import StoryAreaAboutUs from '../components/AboutUs/StoryAreaAboutUs';
// Menu
import PizzaMenu from '../components/Menu/PizzaMenu';
// Blog
import BlogSection from '../components/Blog/BlogSection';
// Contact
import ContactBox from '../components/Contact/ContactBox';
// Order
import Order from '../components/Order/Order';
import Orderheader from '../components/Order/Orderheader';
import Orderfooter from '../components/Order/Orderfooter';
// Order-DIY your ordering
import DiyPizza from '../components/DiyPizza/DiyPizza';
// <script src="plugin-frameworks/swiper.js"></script>

export default class App extends Component {
	render() {
		return (
			<PageRouter />
		)
	}
}

// ** previous page transistion eff.
class PageRouter extends Component{
	render(){
		return (
			<Fragment>
				<Switch>
					<Route exact path='/' component={Page("mainPage")} />
					<Route exact path='/aboutUs' component={Page("aboutUs")} />
					<Route exact path='/menu' component={Page("menu")} />
					<Route exact path='/blog' component={Page("blog")} />
					<Route exact path='/contact' component={Page("contact")} />
					<Route exact path='/order' component={Page("order")} />
					<Route path='/order/diy' component={Page("diyPizza")} />
				</Switch>
			</Fragment>
		)
	}
}

function Page(type) {
	return (
		pageContent[type]
	)
}

const pageContent = {
	mainPage: () => {
		return (
			<>
			<Header />
			<MainSlider type={"mainPage"}/>
			<StoryAreaMainPage />
			<BestSeller />
			<Menu />
			<Footer />
			</>
		)
	},
	aboutUs: () => {
		return (
			<>
			<Header />
			<MainSlider type={"aboutUs"}/>
			<StoryAreaAboutUs />
			<Footer />
			</>
		)
	},
	menu: () => {
		return (
			<>
			<Header />
			<MainSlider type={"menu"}/>
			<PizzaMenu />
			<Footer />
			</>
		)
	},
	blog: () => {
		return (
			<>
			<Header />
			<MainSlider type={"blog"} />
			<BlogSection />
			<Footer />
			</>
		)
	},
	contact: () => {
		return (
			<>
			<Header />
			<MainSlider type={"contact"} />
			<ContactBox />
			<Footer />
			</>
		)
	},
	order: ()=>{
		return (
			<>
			<Orderheader />
			<Order />
			<Orderfooter />
			</>
		)
	},
	diyPizza: ()=>{
		return (
			<>
			<Orderheader />
			<DiyPizza />
			<Orderfooter />
			</>
		)
	}
}