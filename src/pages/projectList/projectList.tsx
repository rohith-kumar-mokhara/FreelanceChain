import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Divider,
  CircularProgress,
  Alert,
} from '@mui/material';
import { getProjects } from '../../../contract/interact'; // Adjust the import path as needed

// Define TypeScript interface for project data
interface Project {
  FreelancerId: number;
  isCompleted: boolean;
  noOfMilestones: number;
  noOfMilestonesCompleted: number;
  amount: number;
  isTakenUp: boolean;
  description: string;
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch the raw data
        const fetchedProjectsRaw = await getProjects();
        
        // Map the raw data to the Project interface
        const fetchedProjects: Project[] = fetchedProjectsRaw.map((project: any) => ({
          FreelancerId: Number(project[0]), // Convert BigInt to number
          isCompleted: project[1],
          noOfMilestones: Number(project[2]), // Convert BigInt to number
          noOfMilestonesCompleted: Number(project[3]), // Convert BigInt to number
          amount: Number(project[4]), // Convert BigInt to number
          isTakenUp: project[5],
          description: project[6],
        }));
        
        setProjects(fetchedProjects);
      } catch (err) {
        setError(`Error fetching projects: ${(err as Error).message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  console.log(projects); // For debugging

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Available Projects
        </Typography>
        {loading ? (
          <Box textAlign="center" mt={4}>
            <CircularProgress />
            <Typography variant="body1" mt={2}>Loading projects...</Typography>
          </Box>
        ) : error ? (
          <Box mt={2}>
            <Alert severity="error">{error}</Alert>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Project {index}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      Freelancer ID: {project.FreelancerId}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      Completed: {project.isCompleted ? 'Yes' : 'No'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      No. of Milestones: {project.noOfMilestones}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      Milestones Completed: {project.noOfMilestonesCompleted}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      Amount: {project.amount}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      Taken Up: {project.isTakenUp ? 'Yes' : 'No'}
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
        )}
      </Box>
    </Container>
  );
};

export default ProjectList;
