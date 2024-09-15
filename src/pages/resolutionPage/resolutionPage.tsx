import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';

const disputes = [
  {
    id: 1,
    title: 'Milestone 2 Payment Not Released',
    status: 'Pending',
    date: '2024-09-15',
  },
  {
    id: 2,
    title: 'Project Requirements Dispute',
    status: 'Resolved',
    date: '2024-09-10',
  },
];

const ResolutionPage = () => {
  const [selectedDispute, setSelectedDispute] = useState('');
  const [resolutionMessage, setResolutionMessage] = useState('');

  const handleDisputeSelect = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedDispute(event.target.value);
  };

  const handleResolutionMessageChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setResolutionMessage(event.target.value);
  };

  const handleSubmitResolution = () => {
    // Logic to handle resolution submission
    console.log('Resolution submitted:', selectedDispute, resolutionMessage);
  };

  return (
    <Container maxWidth="md">
      {/* Page Title */}
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Dispute Resolution
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Raise, manage, and resolve disputes with clients or freelancers.
        </Typography>
      </Box>

      {/* Dispute List */}
      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Your Disputes
          </Typography>
          <List>
            {disputes.map((dispute) => (
              <React.Fragment key={dispute.id}>
                <ListItem>
                  <ListItemText
                    primary={dispute.title}
                    secondary={`Status: ${dispute.status} | Date: ${dispute.date}`}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Dispute Resolution Form */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Resolve a Dispute
          </Typography>
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
            <InputLabel id="dispute-select-label">Select Dispute</InputLabel>
            <Select
              labelId="dispute-select-label"
              value={selectedDispute}
              onChange={handleDisputeSelect}
              label="Select Dispute"
            >
              {disputes.map((dispute) => (
                <MenuItem key={dispute.id} value={dispute.id}>
                  {dispute.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Resolution Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={resolutionMessage}
            onChange={handleResolutionMessageChange}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmitResolution}
          >
            Submit Resolution
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ResolutionPage;
