import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  CircularProgress,
} from '@mui/material';
import { viewFreelanceProfile } from '../../../contract/interact'; // Adjust the import path as needed

const Login: React.FC = () => {
  const [freeID, setFreeID] = useState<number | ''>('');
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (freeID === '') return; // No ID entered

    setLoading(true);
    setError(null);

    try {
      const profileData = await viewFreelanceProfile(freeID);
      // Convert BigInt values to number or string as needed
      //console.log(profileData&&profileData.projectCompleted);
      const convertedProfileData = {
        ...profileData,
        projectsCompleted: profileData.projectsCompleted.toString(),
        rating: profileData.rating.toString(),
        projectsTakenUp: profileData.projectsTakenUp.map((id: any) => id.toString()),
      };
      
      setProfile(convertedProfileData);
    } catch (err) {
      setError(`Error: ${(err as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      {/* Header */}
      <Box my={5} textAlign="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Fetch Freelancer Profile
        </Typography>
        <Typography variant="body1" component="p">
          Enter the Freelancer ID to view the profile details.
        </Typography>
      </Box>

      {/* Form */}
      <Box component="form" noValidate onSubmit={handleFetchProfile}>
        <TextField
          label="Freelancer ID"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={freeID}
          onChange={(e) => setFreeID(Number(e.target.value))}
          InputLabelProps={{
            style: { color: 'gray' }, // Label color
          }}
          InputProps={{
            style: { color: 'black' }, // Input text color
          }}
        />

        {/* Fetch Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
        >
          Fetch Profile
        </Button>
      </Box>

      {/* Profile Display */}
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {profile && (
        <Box mt={4}>
          <Typography variant="h6">Freelancer Profile:</Typography>
          <Box mb={1}>
            <Typography variant="body1">
              <strong>Projects Completed:</strong> {profile.projectsCompleted || 0}
            </Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="body1">
              <strong>Wallet Address:</strong> {profile.walletAddress}
            </Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="body1">
              <strong>Projects Taken Up:</strong> {profile.projectsTakenUp?.length || 0}
            </Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="body1">
              <strong>Profile Rating:</strong> {profile.rating || 0}
            </Typography>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Login;
