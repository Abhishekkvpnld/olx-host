import React from 'react';
import BannerImg from '../../public/Images/bannerImg.png'
import './Banner.css';
import Arrow from '../../assets/Arrow'

function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span className='category'>ALL CATEGORIES</span>
          </div>
          <div> <span className='arrow'>
            < Arrow></Arrow> 
            </span></div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcy...</span>
            <span>Mobile Ph...</span>
            <span>For Sale:Houses & Apart...</span>
            <span>Scoot...</span>
            <span>Commercial & Other Ve...</span>
            <span>For Rent: House & Apart...</span>
          </div>
        </div>
        <div className="banner">
          <img
            src={BannerImg}
            alt="img"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
