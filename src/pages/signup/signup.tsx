import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
} from '@mui/material';


const SignUp = () => {
  const [role, setRole] = useState('freelancer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (e:any) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission and DID integration logic here
    console.log('Form Data:', formData, 'Role:', role);
  };

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Join OGhire as a freelancer or client and start collaborating with trust and transparency.
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Name Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Grid>

          {/* Email Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Grid>

          {/* Password Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </Grid>

          {/* Role Selection */}
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Sign Up as</FormLabel>
              <RadioGroup row name="role" value={role} onChange={handleRoleChange}>
                <FormControlLabel
                  value="freelancer"
                  control={<Radio />}
                  label="Freelancer"
                />
                <FormControlLabel
                  value="client"
                  control={<Radio />}
                  label="Client"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          {/* DID Integration (Optional) */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => console.log('Integrating DID...')}
            >
              Integrate Decentralized Identity (DID)
            </Button>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUp;
