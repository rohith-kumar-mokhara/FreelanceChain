import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import { takeUpProject } from '../../../contract/interact'; // Adjust the import path as needed

const TakeUp = () => {
  const [freelancerId, setFreelancerId] = useState<number | ''>('');
  const [projectId, setProjectId] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleTakeUpProject = async () => {
    if (freelancerId !== '' && projectId !== '') {
      try {
        await takeUpProject(Number(freelancerId), Number(projectId));
        setSuccess('Project taken up successfully!');
        setError(null);
      } catch (err) {
        setError(`Error: ${(err as Error).message}`);
        setSuccess(null);
      }
    } else {
      setError('Please fill in both fields.');
    }
  };

  return (
    <Container maxWidth="md">
      {/* Page Title */}
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Project Management
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Take up a project and manage your tasks.
        </Typography>
      </Box>

      {/* Take Up Project Form */}
      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Take Up a Project
          </Typography>
          <TextField
            label="Freelancer ID"
            variant="outlined"
            fullWidth
            type="number"
            value={freelancerId}
            onChange={(e) => setFreelancerId(parseInt(e.target.value))}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Project ID"
            variant="outlined"
            fullWidth
            type="number"
            value={projectId}
            onChange={(e) => setProjectId(parseInt(e.target.value))}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleTakeUpProject}>
            Take Up Project
          </Button>
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ mt: 2 }}>{success}</Alert>}
        </CardContent>
      </Card>
    </Container>
  );
};

export default TakeUp;
