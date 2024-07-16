import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  setPointsToday,
  setPointsLast7Days,
  setPointsLast30Days,
  setPointsRedeemed,
  setCustomers,
} from '../redux/slices/rewardsSlice';
import { fetchCustomerData } from '../services/api';
import { Container, Typography, Paper, Grid, Tabs, Tab, Box } from '@mui/material';
import TabPanel from './CustomTabPanel';
import theme from '../theme';

interface Customer {
  id: number;
  name: string;
  pointsToday: number;
  points: number;
}

const toCapitalCase = (str: string) => {
  return str.replace(/\b\w/g, char => char.toUpperCase()).toLowerCase();
};

const Dashboard: React.FC = () => {
  const dispatch = useDispatch(); 
  const { pointsToday, pointsLast7Days, pointsLast30Days, pointsRedeemed, customers } = useSelector((state: RootState) => state.rewards);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    fetchCustomerData().then((data: Customer[]) => {
      const updatedCustomers = data.map((customer) => ({
        ...customer,
        pointsToday: Math.floor(Math.random() * 50)
      }));

      const totalPointsToday = updatedCustomers.reduce((acc: number, customer: Customer) => acc + customer.pointsToday, 0);
      dispatch(setPointsLast7Days(450)); 
      dispatch(setPointsLast30Days(1800)); 
      dispatch(setPointsRedeemed(30000)); 
      dispatch(setCustomers(updatedCustomers));
      dispatch(setPointsToday(totalPointsToday));
    });
  }, [dispatch]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container>
      <Typography variant='h4' style={{ color: theme.palette.primary.main }}>Dashboard</Typography>
      <div style={{ borderBottom: `2px solid ${theme.palette.primary.main}`, marginBottom: "17px", marginTop: "5px" }}></div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: theme.palette.background.default }}>
            <Typography variant="h5" align='center' style={{ color: theme.palette.primary.main }} gutterBottom>
              Points Earned
            </Typography>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="points tabs"
              variant="scrollable"
              scrollButtons="auto"
              style={{ borderBottom: `2px solid ${theme.palette.primary.main}` }}
            >
              <Tab label="Today" />
              <Tab label="Last 7 Days" />
              <Tab label="Last 30 Days" />
            </Tabs>

            <TabPanel value={tabValue} index={0}>
              <Typography variant="h6" style={{ color: theme.palette.primary.main }} align='center' gutterBottom>Points Earned Today</Typography>
              <Typography variant="h5" style={{ color: theme.palette.secondary.main }} align='center' data-cy="points-today">{pointsToday}</Typography>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <Typography variant="h6" style={{ color: theme.palette.primary.main }} align='center' gutterBottom>Points Earned in Last 7 Days</Typography>
              <Typography variant="h5" style={{ color: theme.palette.secondary.main }} align='center' data-cy="points-last-seven">{pointsLast7Days}</Typography>
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              <Typography variant="h6" style={{ color: theme.palette.primary.main }} align='center' gutterBottom>Points Earned in Last 30 Days</Typography>
              <Typography variant="h5" style={{ color: theme.palette.secondary.main }} align='center' data-cy="points-last-thirty">{pointsLast30Days}</Typography>
            </TabPanel>
          </Paper>

          <Paper elevation={3} style={{ padding: '20px', backgroundColor: theme.palette.background.default, marginTop: '20px' }}>
            <Typography variant="h5" style={{ color: theme.palette.primary.main }} align='center' gutterBottom>
              Total Points Redeemed
            </Typography>
            <div style={{ borderBottom: `2px solid ${theme.palette.primary.main}`, marginBottom:"20px", marginTop:"17px" }}></div>
            <Typography variant="h5" style={{ color: theme.palette.secondary.main }} align='center' data-cy="points-redeemed">{pointsRedeemed}</Typography>
          </Paper>
        </Grid>
         
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: theme.palette.background.default, height: "415px", display: 'flex', flexDirection: 'column', marginBottom:"10px"}}>
            <Typography variant="h5" align='center' style={{ color: theme.palette.primary.main }}>
              Customers
            </Typography>
            <div style={{ borderBottom: `2px solid ${theme.palette.primary.main}`, marginBottom: "10px", marginTop: "17px" }}></div>
            <div style={{ flex: 1, overflowY: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
              {customers.map((customer) => (
                <Paper key={customer.id} elevation={3} style={{ padding: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center', borderRadius: 8 }}>
                  <img src={`${process.env.PUBLIC_URL}/default.jpg`} alt="profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '20px' }} />
                  <div style={{ flexGrow: 1 }}>
                    <Typography variant="body1" style={{ textTransform: 'capitalize', color: theme.palette.primary.main, fontSize:"18px" }}>{toCapitalCase(customer.name)}</Typography>
                    <Typography variant="body2">Points Today: {customer.pointsToday}</Typography>
                  </div>
                </Paper>
              ))}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
