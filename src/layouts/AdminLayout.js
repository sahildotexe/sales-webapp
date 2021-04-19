import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from './../redux/User/user.actions';

import Header from './../components/Header';
import VerticalNav from './../components/VerticalNav';
import Footer from './../components/Footer';

const AdminLayout = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div className="adminLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li style={{color:"white"}}>
                <Link to="/admin" style={{color:"white"}}>
                  Home
                </Link>
              </li>
              <li style={{color:"white"}}>
                <span className="signOut" onClick={() => signOut()} style={{color:"white"}}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
