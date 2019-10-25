import React from 'react';

function Carousel(props) {
    return (
        <div className="bd-example">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://privetmadrid.com/wp-content/uploads/2017/05/Restaurante-1110x577.jpg" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Peytra's Paellas</h5>
                            <p>Authentic Spanish Cuisine</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://image1.masterfile.com/getImage/ODYyLTA3NjkwODY3ZW4uMDAwMDAwMDA=ADzowg/862-07690867en_Masterfile.jpg" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Come by for Breakfast, Lunch, Dinner or Happy Hour!</h5>
                            <p>Both inside and outside seating, and full bar.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.theculturetrip.com/images/56-3721938-14384372412b27818d626544db8d068d04336a2cbd.jpg" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Our World Renowned <emphasis>Desayuno</emphasis>!</h5>
                            <p>A full-fledged breakfast for those ready to sieze the day, served until 11:00 a.m.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Carousel;