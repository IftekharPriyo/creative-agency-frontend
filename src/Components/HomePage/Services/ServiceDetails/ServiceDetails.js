import React, { useState } from 'react';
import { useEffect } from 'react';
import DB from '../../../DB/DB';
import ServiceCards from './ServiceCards';
import './ServiceDetails.css'
const ServiceDetails = () => {
    const services = DB()
    return (
        <div className="text-center service-details" >
        <h1>Provide awesome <span style={{color: '#7AB259'}}>services</span> </h1>
        <div className="services-provided">
        {
            services.length?(services.map(service =><ServiceCards key={service._id} service={service}></ServiceCards>))
            :(<p>Loading...</p>)
        }
        </div>
            
        </div>
    );
};

export default ServiceDetails;