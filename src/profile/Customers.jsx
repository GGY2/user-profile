import React from 'react';
import { useState, useEffect } from 'react';
import JoinButton from './JoinButton';

const Customers = () => {
        const [currentNumber, setNumber] =  useState(12992);
        useEffect(() => {
            const timeFrames = [50, 500, 100, 3000, 500, 1000, 200, 700];        
            const random = Math.floor(Math.random() * timeFrames.length);
            let interval = setInterval(() => {

                setNumber(current => current + 1);
            }, timeFrames[random]);

            return () => clearInterval(interval);
        
        }, [currentNumber]);

    return(
        <>
            <h2>Join our <span style={{color:'dodgerblue', fontWeight:'700'}}>{currentNumber.toLocaleString()}</span> customers </h2>
            {/* <p>Numbers are constantly growing</p> */}
            <JoinButton /> 
        </>
    );
};

export default Customers;