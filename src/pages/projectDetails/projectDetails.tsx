import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
  Divider,
  TextField
} from '@mui/material';

const projectDetailsData = {
  id: 1,
  title: 'Blockchain Integration for E-commerce',
  description:
    'Develop a decentralized payment system for an e-commerce platform. The project requires smart contract development, integration with existing e-commerce systems, and testing of the solution.',
  requirements: [
    'Experience with blockchain technology and smart contracts',
    'Proficiency in Solidity and Ethereum',
    'Knowledge of e-commerce systems and APIs',
  ],
  budget: '1000-5000 USD',
  deadline: '2 weeks',
  clientName: 'John Doe',
  clientRating: 4.5,
  clientReviews: 10,
};

const ProjectDetails = () => {
  return (
    <Container maxWidth="md">
      {/* Project Title */}
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          {projectDetailsData.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Budget: {projectDetailsData.budget} | Deadline: {projectDetailsData.deadline}
        </Typography>
      </Box>

      {/* Project Description and Requirements */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Project Description
          </Typography>
          <Typography variant="body1" paragraph>
            {projectDetailsData.description}
          </Typography>

          <Typography variant="h6" gutterBottom>
            Requirements
          </Typography>
          <ul>
            {projectDetailsData.requirements.map((requirement, index) => (
              <li key={index}>
                <Typography variant="body1">{requirement}</Typography>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Client Information */}
      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          Client Information
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">
                  <strong>Client Name: </strong> {projectDetailsData.clientName}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">
                  <strong>Rating: </strong> {projectDetailsData.clientRating} / 5 (
                  {projectDetailsData.clientReviews} reviews)
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Submit Proposal Section */}
      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          Submit Your Proposal
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Your Bid Amount (USD)"
                  variant="outlined"
                  fullWidth
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Proposal"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Explain why you're a good fit for this project"
                />
              </Grid>
            </Grid>
            <Box mt={3}>
              <Button variant="contained" color="primary" fullWidth>
                Submit Proposal
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ProjectDetails;
