import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  Alert,
} from '@mui/material';
import { createProject } from '../../../contract/interact.ts'; // Adjust the import path as needed

const CreateProject: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [noOfMilestones, setNoOfMilestones] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleNoOfMilestonesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoOfMilestones(Number(e.target.value));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (amount <= 0 || noOfMilestones <= 0 || !description) {
      setError('Please fill in all fields correctly.');
      return;
    }

    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      await createProject(amount, noOfMilestones, description);
      setMessage('Project created successfully!');
      setAmount(0);
      setNoOfMilestones(0);
      setDescription('');
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
          Create New Project
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Fill out the form below to create a new project.
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Amount"
          type="number"
          variant="outlined"
          value={amount}
          onChange={handleAmountChange}
          required
          margin="normal"
          InputLabelProps={{
            style: { color: 'gray' }, // Label color
          }}
          InputProps={{
            style: { color: 'black' }, // Input text color
          }}
        />

        <TextField
          fullWidth
          label="Number of Milestones"
          type="number"
          variant="outlined"
          value={noOfMilestones}
          onChange={handleNoOfMilestonesChange}
          required
          margin="normal"
          InputLabelProps={{
            style: { color: 'gray' }, // Label color
          }}
          InputProps={{
            style: { color: 'black' }, // Input text color
          }}
        />

        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          value={description}
          onChange={handleDescriptionChange}
          required
          margin="normal"
          InputLabelProps={{
            style: { color: 'gray' }, // Label color
          }}
          InputProps={{
            style: { color: 'black' }, // Input text color
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? <CircularProgress size={24} /> : 'Create Project'}
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

export default CreateProject;
