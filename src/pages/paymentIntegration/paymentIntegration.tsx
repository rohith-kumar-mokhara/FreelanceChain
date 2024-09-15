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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const transactions = [
  {
    id: 1,
    date: '2024-09-15',
    amount: '0.5 BTC',
    status: 'Completed',
  },
  {
    id: 2,
    date: '2024-09-10',
    amount: '1.0 ETH',
    status: 'Pending',
  },
];

const PaymentIntegration = () => {
  return (
    <Container maxWidth="md">
      {/* Page Title */}
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Payment Integration
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Manage cryptocurrency payments and view your transaction history.
        </Typography>
      </Box>

      {/* Cryptocurrency Payment Interface */}
      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Make a Payment
          </Typography>
          <TextField
            label="Recipient Address"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Amount"
            variant="outlined"
            fullWidth
            type="number"
            InputProps={{ startAdornment: <Typography>BTC</Typography> }}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth>
            Send Payment
          </Button>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Payment History
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PaymentIntegration;
