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
        }

        // props of every page
    
        this.checkOutProps = {
    
        }
    }
    // topping page function
    toppingPlus = () => {
        if (this.state.topping < 3) {
            this.setState((state) => ({
                topping: state.topping + 1
            }));
        }
    }

    toppingMinus = () => {
        if (this.state.topping > 0) {
            this.setState((state) => ({
                topping: state.topping - 1
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
                    <Route exact path="/order/diy/dnd" render={() => <DndPizza topping={this.state.toppingNum} />} />
                    <Route path="/order/diy/checkout" render={(checkOutProps) => <CheckOut {...checkOutProps} />} />
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