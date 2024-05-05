import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import blockchain from '../Components/assets/blockchain.gif';

function checkWidth() {
  if (window.innerWidth < 1400) {
    document.querySelector(".start").style.display = "none";
  } else {
    document.querySelector(".start").style.display = "flex";
  }
}

function Home() {
  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <div className="Home">
      <div className='left'>
        <div className='title'>COIN DASH</div>
        <div className='slogan'>Blockchain<div className='period'>.</div> Learn<div className='period'>.</div>Get Involved<div className='period'>.</div></div>
        <div className="startContainer">
          <Link to="/Learn" className="enter">
            <button className="start">Start Now</button>
          </Link>
        </div>
      </div>
      <div className='right'><img className='blockchain' src={blockchain} alt="blockchain" /></div>
    </div>
  );
}

export default Home;
