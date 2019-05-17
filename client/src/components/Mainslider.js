import React from 'react';

export default ({ type }) => {
    return (
        <MainSlider sectionBg={sectionProp[type][0]} sectionHeight={sectionProp[type][1]}>
            {sliderContent[type]}
        </MainSlider>
    )
}

function MainSlider ({ sectionBg, sectionHeight, children}) {
    return (
        <section className={"bg-" + sectionBg + " h-" + sectionHeight + "x main-slider pos-relative"}>
            <div className="triangle-up pos-bottom"></div>
            <div className="container h-100">
                <div className="dplay-tbl">
                    {children}
                </div>
            </div>
        </section>
    );
}

const sliderContent = {
    mainPage:   <div className="dplay-tbl-cell center-text color-white">
                    <h5><b>BEST IN TOWN</b></h5>
                    <h1 className="mt-30 mb-15">Pizza & Pasta</h1>
                    <h5><a href="c" className="btn-primaryc plr-25"><b>SEE TODAYS MENU</b></a></h5>
                </div>,
    aboutUs:    <div className="dplay-tbl-cell center-text color-white pt-90">
                    <h5><b>THE BEST IN TOWN</b></h5>
                    <h2 className="mt-30 mb-15">About our Pizzaria</h2>
                </div>,
    menu:   <div className="dplay-tbl-cell center-text color-white pt-90">
                <h5><b>THE BEST IN TOWN</b></h5>
                <h2 className="mt-30 mb-15">Menu</h2>
            </div>,
    blog:   <div className="dplay-tbl-cell center-text color-white pt-90">
                <h5><b>THE BEST IN TOWN</b></h5>
                <h3 className="mt-30 mb-15">Our Blog</h3>
            </div>,
    contact:    <div className="dplay-tbl-cell center-text color-white pt-90">
                    <h5><b>SAY HELLO</b></h5>
                    <h3 className="mt-30 mb-15">Contact</h3>
                </div>,
}
    
const sectionProp = {
    mainPage: [1, 900],
    aboutUs: [4, 500],
    menu: [5, 500],
    blog: [7, 500],
    contact: [6, 500],
}