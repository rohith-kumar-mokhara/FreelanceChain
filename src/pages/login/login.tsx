import React from 'react';
import { Container, Typography, Button, TextField, Box, Grid, Link } from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth="sm">
      {/* Header */}
      <Box my={5} textAlign="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Log In to OGhire
        </Typography>
        <Typography variant="body1" component="p">
          Access your account and continue managing your projects or freelancing opportunities.
        </Typography>
      </Box>

      {/* Login Form */}
      <Box component="form" noValidate>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          InputLabelProps={{
            style: { color: 'gray' }, // Label color
          }}
          InputProps={{
            style: { color: 'black' }, // Input text color
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          InputLabelProps={{
            style: { color: 'gray' }, // Label color
          }}
          InputProps={{
            style: { color: 'black' }, // Input text color
          }}
        />

        {/* Forgot Password Link */}
        <Box textAlign="right" my={2}>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Box>

        {/* Login Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
        >
          Log In
        </Button>
      </Box>

      {/* DID or Account Recovery Section */}
      <Grid container justifyContent="center" my={4}>
        <Grid item>
          <Typography variant="body2">
            New to OGhire?{' '}
            <Link href="/signup" variant="body2">
              Sign Up here
            </Link>
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="body2">
            Having trouble with your account?{' '}
            <Link href="#" variant="body2">
              Recover your account with Decentralized Identity (DID)
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
