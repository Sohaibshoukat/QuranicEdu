"use client"
import React from "react";
import Card from "../Card";
import "./style.scss";
import  { useState, useEffect } from 'react';

const CardContainer = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 800);
    }

    // Add a listener for window resize events
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
{isMobile ?
  <div className="card-container">
      <div className="Row">
        <Card title="Noorani Qaida" imageurl="https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1" />
        <Card title="Noorani Qaida" imageurl="https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1" />

       
      </div>

      <div className="Row">
      <Card title="Noorani Qaida" imageurl="https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1" />
        <Card title="Noorani Qaida" imageurl="https://picsum.photos/200/300" />
      
    
      </div>
      <div className="Row">
      <Card title="Noorani Qaida" imageurl="https://picsum.photos/200/300" />
        <Card title="Noorani Qaida" imageurl="https://picsum.photos/200/300" />
        
    

      </div>
      <div className="Row">
      <Card title="Noorani Qaida" imageurl="https://picsum.photos/200/300" />
        <Card title="Noorani Qaida" imageurl="https://picsum.photos/200/300" />
        
    

      </div>
    

    </div>

 :
   
    <div className="card-container">
      <div className="Row">
        <Card title="Noorani Qaida" imageurl="https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1" />
        <Card title="Noorani Qaida" imageurl="https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1" />

        <Card title="Noorani Qaida" imageurl="https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1" />
      </div>

      <div className="Row">
      <Card title="Noorani Qaida" imageurl="https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1" />
        <Card title="Noorani Qaida" imageurl="https://picsum.photos/200/300" />
        <Card title="Noorani Qaida" imageurl="https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1" />
    
      </div>
      <div className="Row">
      <Card title="Noorani Qaida" imageurl="https://picsum.photos/200/300" />
        <Card title="Noorani Qaida" imageurl="https://picsum.photos/200/300" />
        
    

      </div>
    </div>
    
    }
    </div>
  );
};

export default CardContainer;
