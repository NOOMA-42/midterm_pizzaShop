import React from 'react';

export default () => {
    return (
        <>
        <section class="story-area left-text center-sm-text">
        <div class="container">
                <div class="heading"><h3>Choose from Pizza</h3></div>
                <div class="row">
                        
                    <div class="col-lg-3 col-md-4  col-sm-6 ">
                            <div class="center-text mb-30">
                                <div class="ïmg-200x mlr-auto pos-relative">
                                    <h6 class="ribbon-cont color-white"><div class="ribbon primary"></div><b>OFFER</b></h6>
                                <img src={require("../../images/seller-2-200x200.png")} alt=""></img>
                                </div>
                                <h5 class="mt-20">Pizza Margherita</h5>
                                <h4 class="mt-5 color-primary"><b>$11.90</b></h4>
                        </div>
                    </div>

                </div>
        </div>
        </section>

        <section class="bg-lite-blue">
        <div class="container">
            <div class="row">

                    <div class="col-md-6">
                        <div class="sided-90x mb-30 ">
                                <div class="s-left"><img class="br-3" src={require("../../images/menu-8-120x120.jpg")} alt="Menu"></img></div>
                            <div class="s-right">
                                    <h5 class="mb-10"><b>Broschettas</b><b class="color-primary float-right">$6.00</b></h5>
                                    <p class="pr-70">Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis. </p>
                            </div>
                        </div>
                    </div>
                    
            </div>
        </div>
        </section>
        </>
    )
}