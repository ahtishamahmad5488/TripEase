import React from 'react';
import {ScrollView, View, StyleSheet, StatusBar} from 'react-native';
import UpdateProfileCard from '../components/Admin/UpdateProfileCard';
import DashboardStatsCards from '../components/Admin/DashboardStatsCards';
import RecentActivityList from '../components/Admin/RecentActivityList';
import TransporterBiddingList from '../components/Admin/TransporterBiddingList';
import UpcomingToursTable from '../components/Admin/UpcomingToursTable';
import AcceptedBidsList from '../components/Admin/AcceptedBidsList';

const AdminPanel = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView>
        <UpdateProfileCard />
        <DashboardStatsCards />
        <RecentActivityList />
        <UpcomingToursTable />
        <TransporterBiddingList />
        <AcceptedBidsList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default AdminPanel;
