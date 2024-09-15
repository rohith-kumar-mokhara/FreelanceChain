import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';

const EscrowManage = () => {
  // Sample milestones for the project
  const milestones = [
    { title: 'Milestone 1: Initial Design', status: 'Completed' },
    { title: 'Milestone 2: Development', status: 'In Progress' },
    { title: 'Milestone 3: Final Delivery', status: 'Pending' },
  ];

  return (
    <Container maxWidth="md">
      {/* Page Title */}
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Manage Escrow
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          View and manage your project’s escrow account, milestones, and funds.
        </Typography>
      </Box>

      {/* Escrow Details */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Project: Build Decentralized Marketplace
          </Typography>
          <Typography variant="body1">
            Total Escrow Amount: $5,000
          </Typography>
          <Typography variant="body1" gutterBottom>
            Current Status: In Progress
          </Typography>

          {/* Milestone Management */}
          <Box my={3}>
            <Typography variant="h6">Milestone Management</Typography>
            <Stepper activeStep={1} alternativeLabel>
              {milestones.map((milestone, index) => (
                <Step key={index} completed={milestone.status === 'Completed'}>
                  <StepLabel>{milestone.title}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          {/* Actions */}
          <Grid container spacing={3} mt={2}>
            {/* Request Milestone Completion Button (For Freelancer) */}
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disabled={milestones[1].status === 'Completed'}
              >
                Request Milestone Completion
              </Button>
            </Grid>

            {/* Verify Milestone Button (For Client) */}
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disabled={milestones[1].status !== 'In Progress'}
              >
                Verify Milestone
              </Button>
            </Grid>

            {/* Request Release of Funds Button (For Freelancer) */}
            <Grid item xs={12} md={6}>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                disabled={milestones[1].status !== 'Completed'}
              >
                Request Release of Funds
              </Button>
            </Grid>

            {/* Release Payment Button (For Client) */}
            <Grid item xs={12} md={6}>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                disabled={milestones[1].status !== 'Completed'}
              >
                Release Payment
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EscrowManage;
