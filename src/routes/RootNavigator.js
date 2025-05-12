import React, { useContext } from 'react';
import AuthStack from './AuthStack';
import CustomerStack from './CustomerStack';
import TransporterStack from './TransporterStack';
import AdminStack from './AdminStack';
import {AuthContext} from '../context/AuthContext';

const RootNavigator = () => {
  const {isLoggedIn, userRole} = useContext(AuthContext);

  if (!isLoggedIn) {
    return <AuthStack />;
  }
  if (userRole === 'customer') {
    return <CustomerStack />;
  }
  if (userRole === 'transporter') {
    return <TransporterStack />;
  }
  return <AdminStack />;
};

export default RootNavigator;
