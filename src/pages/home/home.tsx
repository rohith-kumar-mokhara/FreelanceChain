import React from 'react';
import { Container, Typography, Button, Grid, TextField, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Box my={5} textAlign="center">
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to OGhire
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          A decentralized freelancing platform built on trust, transparency, and blockchain technology.
        </Typography>
        <Box mt={3}>
          <Button variant="contained" color="primary" href="/signup" sx={{ mx: 1 }}>
            Sign Up
          </Button>
          <Button variant="outlined" color="secondary" href="/login" sx={{ mx: 1 }}>
            Log In
          </Button>
        </Box>
      </Box>

      {/* Key Features Section */}
      <Box my={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="p">
              Decentralized Escrow System
            </Typography>
            <Typography variant="body1">
              Payments are secured via smart contracts and only released when project milestones are met.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="p">
              Reputation System
            </Typography>
            <Typography variant="body1">
              Immutable blockchain-based reviews to build trust between freelancers and clients.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="p">
              Decentralized Identity (DID)
            </Typography>
            <Typography variant="body1">
              Manage your identity with complete control over your data and profile.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Search Bar */}
      <Box my={5} textAlign="center">
        <Typography variant="h5" gutterBottom>
          Find Freelancers or Projects
        </Typography>
        <TextField
          variant="outlined"
          label="Search for freelancers or projects"
          fullWidth
          sx={{ maxWidth: '600px', mx: 'auto', mt: 2 }}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Search
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
