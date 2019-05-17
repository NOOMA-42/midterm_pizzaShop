import React from 'react';

export default () => {
    return (
        <footer className="pb-50  pt-70 pos-relative">
        <div className="pos-top triangle-bottom"></div>
            <div className="container-fluid">
                <a href="index.html"><img src={require('../images/logo-white.png')} alt="Logo"></img></a>

                <div className="pt-30">
                        <p className="underline-secondary"><b>Address:</b></p>
                        <p>481 Creekside Lane Avila Beach, CA 93424 </p>
                </div>

                <div className="pt-30">
                        <p className="underline-secondary mb-10"><b>Phone:</b></p>
                        <a href="tel:+53 345 7953 32453 ">+53 345 7953 32453 </a>
                </div>

                <div className="pt-30">
                        <p className="underline-secondary mb-10"><b>Email:</b></p>
                        <a href="mailto:yourmail@gmail.com"> yourmail@gmail.com</a>
                </div>

                <ul className="icon mt-30">
                        <li><a href="c"><i className="ion-social-pinterest"></i></a></li>
                        <li><a href="c"><i className="ion-social-facebook"></i></a></li>
                        <li><a href="c"><i className="ion-social-twitter"></i></a></li>
                        <li><a href="c"><i className="ion-social-dribbble-outline"></i></a></li>
                        <li><a href="c"><i className="ion-social-linkedin"></i></a></li>
                        <li><a href="c"><i className="ion-social-vimeo"></i></a></li>
                </ul>

                <p className="color-light font-9 mt-50 mt-sm-30">
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ion-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
            </div>
        </footer>
    )
}
// Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.