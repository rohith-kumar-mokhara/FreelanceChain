import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Avatar,
  IconButton,
  Divider
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {
  // State for managing edit mode
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    bio: 'Experienced blockchain developer and freelancer',
    skills: ['React', 'Node.js', 'Solidity', 'Web3.js'],
    portfolio: ['Project 1', 'Project 2', 'Project 3'],
    rating: 4.8,
  });

  // Toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Handle input changes when in edit mode
  const handleInputChange = (field: string, value: string | string[]) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <Container maxWidth="md">
      {/* Header: Profile Picture and Name */}
      <Box my={4} textAlign="center">
        <Avatar sx={{ width: 100, height: 100, mx: 'auto' }}>JD</Avatar>
        {editMode ? (
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            value={profileData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        ) : (
          <Typography variant="h4" component="h1">
            {profileData.name}
          </Typography>
        )}
        <IconButton onClick={toggleEditMode}>
          <EditIcon />
        </IconButton>
      </Box>

      {/* Bio Section */}
      <Box my={4}>
        <Typography variant="h6">Bio</Typography>
        {editMode ? (
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={profileData.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
          />
        ) : (
          <Typography variant="body1">{profileData.bio}</Typography>
        )}
      </Box>

      <Divider />

      {/* Skills Section */}
      <Box my={4}>
        <Typography variant="h6">Skills</Typography>
        {editMode ? (
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            value={profileData.skills.join(', ')}
            onChange={(e) => handleInputChange('skills', e.target.value.split(', '))}
          />
        ) : (
          <Typography variant="body1">
            {profileData.skills.join(', ')}
          </Typography>
        )}
      </Box>

      <Divider />

      {/* Portfolio Section */}
      <Box my={4}>
        <Typography variant="h6">Portfolio</Typography>
        {editMode ? (
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={profileData.portfolio.join(', ')}
            onChange={(e) => handleInputChange('portfolio', e.target.value.split(', '))}
          />
        ) : (
          <Grid container spacing={2}>
            {profileData.portfolio.map((project, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Typography variant="body1">{project}</Typography>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      <Divider />

      {/* Rating Section */}
      <Box my={4}>
        <Typography variant="h6">Rating</Typography>
        <Typography variant="body1">{profileData.rating}/5</Typography>
      </Box>

      {/* Save Button */}
      {editMode && (
        <Box textAlign="center" mt={4}>
          <Button variant="contained" color="primary" onClick={toggleEditMode}>
            Save Profile
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Profile;
