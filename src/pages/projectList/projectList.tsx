import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Divider,
  Select,
  InputLabel,
  FormControl
} from '@mui/material';

const projectData = [
  {
    id: 1,
    title: 'Blockchain Integration for E-commerce',
    category: 'Blockchain',
    budget: '1000-5000 USD',
    deadline: '2 weeks',
    description: 'Develop a decentralized payment system for an e-commerce platform.'
  },
  {
    id: 2,
    title: 'React Web App Development',
    category: 'Web Development',
    budget: '500-2000 USD',
    deadline: '1 month',
    description: 'Build a responsive web app using React and Material UI.'
  },
  {
    id: 3,
    title: 'Smart Contract Auditing',
    category: 'Blockchain',
    budget: '2000-7000 USD',
    deadline: '1 month',
    description: 'Audit smart contracts for vulnerabilities and improve security.'
  }
];

const ProjectList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCategory(e.target.value);
  };

  const handleBudgetChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setBudget(e.target.value);
  };

  const handleDeadlineChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setDeadline(e.target.value);
  };

  const filteredProjects = projectData.filter((project) => {
    return (
      (category === '' || project.category === category) &&
      (budget === '' || project.budget === budget) &&
      (deadline === '' || project.deadline === deadline) &&
      (searchTerm === '' || project.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <Container maxWidth="lg">
      {/* Search and Filter Section */}
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Browse Available Projects
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Search Projects"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Category</InputLabel>
              <Select value={category} onChange={handleCategoryChange} label="Category">
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="Blockchain">Blockchain</MenuItem>
                <MenuItem value="Web Development">Web Development</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Budget</InputLabel>
              <Select value={budget} onChange={handleBudgetChange} label="Budget">
                <MenuItem value="">Any Budget</MenuItem>
                <MenuItem value="500-2000 USD">500-2000 USD</MenuItem>
                <MenuItem value="1000-5000 USD">1000-5000 USD</MenuItem>
                <MenuItem value="2000-7000 USD">2000-7000 USD</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Deadline</InputLabel>
              <Select value={deadline} onChange={handleDeadlineChange} label="Deadline">
                <MenuItem value="">Any Deadline</MenuItem>
                <MenuItem value="1 week">1 week</MenuItem>
                <MenuItem value="2 weeks">2 weeks</MenuItem>
                <MenuItem value="1 month">1 month</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={2}>
            <Button variant="contained" color="primary" fullWidth sx={{ height: '100%' }}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Project Listings */}
      <Grid container spacing={4}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} md={4} key={project.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Category: {project.category}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Budget: {project.budget}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Deadline: {project.deadline}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectList;
