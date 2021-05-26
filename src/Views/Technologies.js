import React from 'react';

export default function Technologies() {
  return (
    <div>
      <h1>Technologies</h1>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Javascript</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src="http://x7d4c5z5.stackpathcdn.com/wp-content/uploads/2014/10/css3.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>CSS</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://hackr.io/tutorials/learn-html-5/logo/logo-html-5?ver=1587977020" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>HTML</h5>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
    </div>
  );
}
