import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  Alert
} from '@mui/material';
import { registerFreelance } from '../../../contract/interact.ts'; // Adjust the import path as needed

const SignUp: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!walletAddress) return; // Ensure wallet address is provided

    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      await registerFreelance(walletAddress);
      setMessage('Freelancer successfully registered!');
    } catch (err) {
      setError(`Error: ${(err as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Register as a freelancer by providing your wallet address.
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Wallet Address"
          variant="outlined"
          value={walletAddress}
          onChange={handleInputChange}
          required
          margin="normal"
          InputLabelProps={{
            style: { color: 'gray' }, // Label color
          }}
          InputProps={{
            style: { color: 'black' }, // Input text color
          }}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Register'}
        </Button>

        {/* Success or Error Message */}
        {message && (
          <Box mt={2}>
            <Alert severity="success">{message}</Alert>
          </Box>
        )}
        {error && (
          <Box mt={2}>
            <Alert severity="error">{error}</Alert>
          </Box>
        )}
      </form>
    </Container>
  );
};

export default SignUp;
