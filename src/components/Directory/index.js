import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import Homeimg from './../../assets/homepage.png'
import Button from '@material-ui/core/Button';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
         <div className="welcome">
           Welcome to Barter.it!
           <div className="img">
           <img src={Homeimg} alt="shakehands"/>
           </div>
         </div>
         <div className="btt">
         <Link to="/search" className="btn btn-primary hov">Shop Now</Link>
         </div>
      </div>
     
    </div>
  );
};

export default Directory;
