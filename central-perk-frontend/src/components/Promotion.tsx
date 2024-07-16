import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Paper,
  FormControlLabel,
  Divider,
  Drawer,
  Box,
} from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import ReactQuill from 'react-quill';
import Swal from 'sweetalert2';
import 'react-quill/dist/quill.snow.css';
import { fetchCustomerData } from '../services/api'; 
import { setCustomers } from '../redux/slices/rewardsSlice';

const Promotion: React.FC = () => {
  const [selectedCustomers, setSelectedCustomers] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { customers } = useSelector((state: RootState) => state.rewards);
  const [message, setMessage] = useState('');
  const [openSidebar, setOpenSidebar] = useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (customers.length === 0) {
      fetchCustomerData().then((data) => {
        dispatch(setCustomers(data));
      }).catch((error) => {
        console.error('Error fetching customer data:', error);
      });
    }
  }, [dispatch, customers.length]);

  const handleSelectCustomer = (id: number) => {
    setSelectedCustomers((prev) =>
      prev.includes(id) ? prev.filter((custId) => custId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedCustomers.length === customers.length) {
      setSelectedCustomers([]);
    } else {
      setSelectedCustomers(customers.map((customer) => customer.id));
    }
  };

  const handleSendPromotion = () => {
    if (selectedCustomers.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select at least one customer to send the promotion!',
      });
    } else if (message.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a promotion message!',
      });
    } else {
      Swal.fire({
        title: 'Send Promotion?',
        text: 'Are you sure you want to send this promotion?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, send it!',
        cancelButtonText: 'No, cancel!',
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('Sending promotion to:', selectedCustomers, 'Message:', message);
          Swal.fire('Success!', 'Promotion sent successfully!', 'success');
        }
      });
    }
  };

  const handleCancelMessage = () => {
    setMessage('');
  };

  const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const quillStyles = {
    marginBottom: isSmallScreen ? '80px' : '60px',
    marginRight: isSmallScreen ? '0' : '1px',
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Typography variant='h4' style={{ color: theme.palette.primary.main }}>Send Promotion</Typography>
      <div style={{ borderBottom: `2px solid ${theme.palette.primary.main}`, marginBottom: "17px", marginTop: "5px" }}></div>
      <Box sx={{ mt: 2 }}>
        <Typography variant='h5' style={{ color: theme.palette.primary.main }} gutterBottom>Promotion Message</Typography>
        <div style={quillStyles}>
          <ReactQuill
            value={message}
            onChange={setMessage}
            theme='snow'
            style={{ height: '200px' }}
          />
        </div>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: isSmallScreen ? 'column' : 'row', mb: 2 }}>
        <Box sx={{ mb: isSmallScreen ? 1 : 0, mr: isSmallScreen ? 0 : 1 }}>
          <Button variant="contained" color="primary" onClick={handleSendPromotion} sx={{ mb: isSmallScreen ? 1 : 0 }}>
            Send Promotion
          </Button>
          <Button
            onClick={handleCancelMessage}
            sx={{
              color: 'brown',
              marginLeft: "10px",
              textTransform: 'none',
              boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'white',
              },
              mb: isSmallScreen ? 1 : 0,
            }}
          >
            Cancel
          </Button>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setOpenSidebar(!openSidebar)}
          sx={{ mb: isSmallScreen ? 1 : 0 }}
        >
          {openSidebar ? 'Hide Customer List' : 'Select Customers'}
        </Button>
      </Box>
      <Drawer
        anchor="right"
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
        sx={{ width: '300px' }}
      >
        <Box sx={{ p: 2 }}>
          <TextField
            label="Search Customers"
            fullWidth
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Paper elevation={3} sx={{ mb: 2 }}>
            <List>
              <ListItem>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedCustomers.length === customers.length}
                      onChange={handleSelectAll}
                    />
                  }
                  label="Select All"
                />
              </ListItem>
              <Divider />
              {filteredCustomers.map((customer) => (
                <ListItem key={customer.id} button onClick={() => handleSelectCustomer(customer.id)}>
                  <Checkbox checked={selectedCustomers.includes(customer.id)} />
                  <ListItemText primary={capitalizeWords(customer.name)} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Drawer>
    </Container>
  );
};

export default Promotion;
