import React, { useContext } from 'react';
import CustomerStack from '../CustomerRoutes/CustomerStack';
import AdminStack from '../AdminRoutes/AdminStack';
import {AuthContext} from '../../context/AuthContext';
import TransporterStack from '../TransporterRoutes/TransporterStack';
import AuthStack from '../AuthRoutes/AuthStack';

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
