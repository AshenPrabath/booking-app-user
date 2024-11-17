// /views/Register.js
import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { Button, TextField, Grid, CircularProgress, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const registerUser = useStoreActions((actions) => actions.registerUser);
  const loading = useStoreActions((actions) => actions.loading);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ name, email, password, phone, city })
      .then(() => {
        setError('');
        alert("Login successful! Please login")
        navigate('/'); // Redirect to home or login after successful registration
      })
      .catch(() => {
        setError('Registration failed');
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f7fc',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 3, color: '#333' }}>
        Register
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 450 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City Name"
              fullWidth
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ color: 'red', textAlign: 'center' }}>
                {error}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                padding: '12px',
                backgroundColor: '#007bff',
                '&:hover': {
                  backgroundColor: '#0056b3',
                },
                marginTop: 2,
              }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="white" /> : 'Register'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Register;
