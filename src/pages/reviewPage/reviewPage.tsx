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
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

const reviews = [
  {
    id: 1,
    reviewer: 'Alice Smith',
    rating: 4,
    review: 'Great freelancer, delivered the project on time and met all requirements.',
    date: '2024-09-12',
  },
  {
    id: 2,
    reviewer: 'John Doe',
    rating: 5,
    review: 'Excellent work! Highly recommended for future projects.',
    date: '2024-09-10',
  },
];

const ReviewPage = () => {
  return (
    <Container maxWidth="md">
      {/* Page Title */}
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Reputation and Reviews
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          View and manage reviews and ratings from clients and freelancers.
        </Typography>
      </Box>

      {/* Review List */}
      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Reviews
          </Typography>
          <List>
            {reviews.map((review) => (
              <React.Fragment key={review.id}>
                <ListItem>
                  <ListItemText
                    primary={`${review.reviewer} (${review.rating} stars)`}
                    secondary={
                      <>
                        <Typography variant="body2" color="textSecondary">
                          {review.review}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          {review.date}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Leave a Review */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Leave a Review
          </Typography>
          <TextField
            label="Your Rating"
            variant="outlined"
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 1, max: 5 } }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Your Review"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            placeholder="Write your feedback here"
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth>
            Submit Review
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ReviewPage;
