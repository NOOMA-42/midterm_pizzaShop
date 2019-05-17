import React from 'react';

export default () => {
    return (
        <section class="story-area bg-seller color-white pos-relative">
            <div class="pos-bottom triangle-up"></div>
            <div class="pos-top triangle-bottom"></div>
            <div class="container">
                <div class="heading">
                    <img class="heading-img" src={require('../../images/heading_logo.png')} alt=""></img>
                    <h2>Best Sellers</h2>
                </div>
                <div class="row">
                    <BestSellerItem />
                </div>
                <h6 class="center-text mt-40 mt-sm-20 mb-30"><a href="c" class="btn-primaryc plr-25"><b>SEE TODAYS MENU</b></a></h6>
            </div>
        </section>
    );
}

function BestSellerItem() {
    return (
        <div class="col-lg-3 col-md-4  col-sm-6 ">
            <div class="center-text mb-30">
                <div class="ïmg-200x mlr-auto pos-relative">
                    <BestSellerItemTag />
                    <img src={require('../../images/seller-2-200x200.png')} alt=""></img>
                </div>
                <h5 class="mt-20">Pizza Margherita</h5>
                <h4 class="mt-5"><b>$11.90</b></h4>
                <h6 class="mt-20"><a href="c" class="btn-brdr-primary plr-25"><b>Order Now</b></a></h6>
            </div>
        </div>
    );
}

function BestSellerItemTag(props) {
	if (props.tag === "offer")
		return <h6 class="ribbon-cont"><div class="ribbon primary"></div><b>OFFER</b></h6>;
	else if (props.tag === "speciality")
		return <h6 class="ribbon-cont"><div class="ribbon secondary"></div><b>SPECIALITY</b></h6>;
	else if (props.tag === "plus")
		return <h6 class="ribbon-cont color-black"><div class="ribbon white"></div><b>PLUS SIZE</b></h6>;
	else
		return null;
}