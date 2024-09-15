import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from '@mui/material';

const ProjectSubmission = () => {
  return (
    <Container maxWidth="md">
      {/* Page Title */}
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Submit Your Proposal
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Provide details for your proposal including milestones, timeline, and bid amount.
        </Typography>
      </Box>

      {/* Proposal Form */}
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={3}>
            {/* Bid Amount */}
            <Grid item xs={12}>
              <TextField
                label="Your Bid Amount (USD)"
                variant="outlined"
                fullWidth
                type="number"
                placeholder="Enter your bid amount"
              />
            </Grid>

            {/* Project Milestones */}
            <Grid item xs={12}>
              <TextField
                label="Project Milestones"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                placeholder="Define key milestones for the project"
              />
            </Grid>

            {/* Estimated Timeline */}
            <Grid item xs={12}>
              <TextField
                label="Estimated Timeline"
                variant="outlined"
                fullWidth
                placeholder="E.g., 2 weeks"
              />
            </Grid>

            {/* Proposal Details */}
            <Grid item xs={12}>
              <TextField
                label="Proposal Details"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                placeholder="Explain your approach to the project and why you are the best fit"
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box mt={3}>
            <Button variant="contained" color="primary" fullWidth>
              Submit Proposal
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProjectSubmission;
