import React from "react";

import './Backup.css'

const ProfileCard = ({plan}) => {

   

 
   

    return (
        <>
            <div className="container-profile">
                <div className="card-profile">
                    <div className="top_part">
                        <div className="circle">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        
                    </div>
                    <div className="image">
                        <img src="https://imgur.com/VcypK5c.png" />
                    </div>
                    <div className="vitamin">
                        <h2>{plan.planName}</h2>
                       
                    </div>
                    <div className="reviews">
                        <p><strong>Min. Investment</strong><br/>{plan.minInvestmentAmount}</p>
                       
                    </div>
                    <div className="reviews">
                        <p><strong>Risk</strong><br/>{plan.risk}</p>
                       
                    </div>
                    <div className="size">
                        <p>👥<br/>{plan.noOfSubscription}</p>
                        
                    </div>
                    <div className="buttons">
                        <button>Open</button>
                        
                    </div>
                    

                    
                </div>
            </div>


        </>
    );
}


export default ProfileCard;