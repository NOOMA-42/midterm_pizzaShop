import React , { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import DecideTopping from './DecideTopping';
import LRLinkBtn from "./LRLinkBtn";
import DndPizza from "./DndPizza";
import CheckOut from "./CheckOut";

export default class DiyPizza extends Component {
    constructor() {
        super()
        this.routeOrder = ["", "topping", "dnd", "checkout", ""];
        this.state = {
            toppingNum: 0,
            pageNum: 1,
            lastPage: this.routeOrder[0],
            currentPage: this.routeOrder[1],
            nextPage: this.routeOrder[2], 
            toppingSpec: {
                mushroom: 0,
                pepperoni: 0,
                green_pepper: 0,
                black_olive: 0,
                onion: 0,
            },
            toppingPrice: 0,
        }
    }

    // fetching price on the server
	componentDidMount() {
		this.callApi()
			.then(res => this.setState({ toppingPrice: res.express }))
			.catch(err => console.log(err));
	}
	callApi = async () => {
		const response = await fetch('/order');
		const body = await response.json();
		if (response.status !== 200) throw Error(body.message);
		return body;
	};

    // topping page function
    toppingPlus = () => {
        if (this.state.toppingNum < 3) {
            this.setState((state) => ({
                toppingNum: state.toppingNum + 1
            }));
        }
    }

    toppingMinus = () => {
        if (this.state.toppingNum > 0) {
            this.setState((state) => ({
                toppingNum: state.toppingNum - 1
            }));
        }
    }
    ///////////////////////////////////

    //LRbtn function
    btnLonClick = () => {
        this.setState((state) => ({
            pageNum: state.pageNum - 1,
            lastPage: this.routeOrder[state.pageNum - 1 - 1],
            currentPage: this.routeOrder[state.pageNum - 1],
            nextPage: this.routeOrder[state.pageNum - 1 + 1], 
        }));
    }
    btnRonClick = () => {
        this.setState((state) => ({
            pageNum: state.pageNum + 1,
            lastPage: this.routeOrder[state.pageNum + 1 - 1],
            currentPage: this.routeOrder[state.pageNum  + 1],
            nextPage: this.routeOrder[state.pageNum + 1 + 1], 
        }));
    }
    ///////////////////////////////////

    // Drag and drop function
    dragIn = (toppinName) => {
        console.log(this.state.toppingSpec[toppinName]);
        this.setState((state) => ({
            toppingSpec: {
                [state.toppingSpec[toppinName]]: state.toppingSpec[toppinName] + 1,
            }
            
        }));
    }
    ///////////////////////////////////

    // Collection of every route in order
    routeOrder = ["topping", "dnd", "checkout"];
    
    //////////////////////////////
    render() {
        return (
            <>
            <Container>
            <Row>
            <section className="h-3"></section>
            </Row>
            <Row>
                <Col>
                    <LRLinkBtn pos='L' route={this.state.lastPage} onClick={this.btnLonClick}/>
                </Col>
                <Col xs={10} md={8}>
                    <Route exact path="/order/diy/topping" render={() => <DecideTopping onClick={{toppingPlus: this.toppingPlus, toppingMinus: this.toppingMinus}} topping={this.state.toppingNum}/>}/>
                    <Route exact path="/order/diy/dnd" render={() => <DndPizza topping={this.state.toppingNum} toppingSpec={this.state.toppingSpec} dragIn={this.dragIn}/>} />
                            <Route path="/order/diy/checkout" render={(checkOutProps) => <CheckOut toppingSpec={this.dragIn} topping={this.state.toppingNum} toppingP={this.state.toppingPrice}/>} />
                </Col>
                <Col>
                    <LRLinkBtn pos='R' route={this.state.nextPage} onClick={this.btnRonClick}/>
                </Col>
            </Row>
            <Row>
                <section></section>
            </Row>      
            </Container>
            </>
        )
    }
}