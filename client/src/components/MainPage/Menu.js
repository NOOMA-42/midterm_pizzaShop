import React from 'react';

export default () => {
    return (
        <section>
            <div class="container">
                <div class="heading">
                    <img class="heading-img" src={require('../../images/heading_logo.png')} alt=""></img>
                    <h2>Our Menu</h2>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <ul class="selecton brdr-b-primary mb-70">
                            <li><a class="active" href="c" data-select="*"><b>ALL</b></a></li>
                            <li><a href="c" data-select="pizza"><b>PIZZA</b></a></li>
                            <li><a href="c" data-select="pasta"><b>PASTA</b></a></li>
                            <li><a href="c" data-select="salads"><b>SALADS</b></a></li>
                            <li><a href="c" data-select="deserts"><b>DESERTS</b></a></li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <MenuItem />
                </div>
                <h6 class="center-text mt-40 mt-sm-20 mb-30"><a href="c" class="btn-primaryc plr-25"><b>SEE TODAYS MENU</b></a></h6>
            </div>
        </section>
    );
}

function MenuItem() {
    return (
        <div class="col-md-6 food-menu pizza">
            <div class="sided-90x mb-30 ">
                <div class="s-left"><img class="br-3" src={require('../../images/menu-1-120x120.jpg')} alt="Menu"></img></div>
                <div class="s-right">
                    <h5 class="mb-10"><b>Pizza Margherita</b><b class="color-primary float-right">$12.00</b></h5>
                    <p class="pr-70">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. </p>
                </div>
            </div>
        </div>
    );
}