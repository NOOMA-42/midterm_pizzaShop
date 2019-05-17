import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <section class="story-area left-text center-sm-text">
        <div class="container">

                <div class="row">
                    <div class="col-md-6"><img class="mb-30" src={require("../../images/about-1-600x400.jpg")} alt=""></img></div>
                    <div class="col-md-6"><img class="mb-30" src={require("../../images/about-2-600x400.jpg")} alt=""></img></div>
                        <div class="col-md-12">
                                <div class="mt-50 mt-sm-30 mb-50 mb-sm-30 center-text"> <h2>We are Lugais</h2> </div>

                                <h5 class="center-text mb-50 mb-sm-30 plr-25">Maecenas fermentum tortor id
                                        fringilla molestie. In  hac habitasse platea dictumst. Morbi maximus lobortis
                                        ipsum, ut blandit augue ullamcorper vitae.  Nulla dignissim leo felis, eget
                                        cursus elit aliquet ut.</h5>
                        </div>
                        <div class="col-md-6">
                                <p class="mb-15">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.  Morbi maximus
                                        lobortis ipsum, ut blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis
                                        massa. Morbi tellus ortor, luctus et lacinia non, tincidunt in lacus.
                                        Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id dapibus dolor, ac cursus nulla. </p>
                        </div>

                        <div class="col-md-6">
                                <p class="mb-15">Maecenas fermentum tortor id fringilla molestie. In hac habitasse
                                        platea
                                        dictumst.Morbi maximus lobortis ipsum, ut blandit augue ullamcorper vitae.
                                        Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel
                                        convallismassa. Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus.
                                        Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulumidda
                                        pibus dolor, accursus nulla. </p>
                        </div>
                </div>

                <h6 class="center-text mt-40 mt-sm-30 mb-20">
                        <Link to="/" className="btn-primaryc plr-25 mb-10 mlr-5"><b>SEE TODAYS MENU</b></Link>
                        <Link to="/" className="btn-primaryc secondary plr-50 mlr-5 mb-10"><b>ORDER NOW</b></Link>
                </h6>

        </div>
</section>
    )
}