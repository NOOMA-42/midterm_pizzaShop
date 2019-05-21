import React from 'react';

export default () => {
    return (
        <footer className="pb-50  pt-70 pos-relative">
        <div className="pos-top triangle-bottom"></div>
            <div className="container-fluid">
                <a href="index.html"><img src={require('../../images/logo-white.png')} alt="Logo"></img></a>

                <p className="color-light font-9 mt-50 mt-sm-30">
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ion-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
            </div>
        </footer>
    )
}
// Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.