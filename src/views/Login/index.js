import {
  Container,
  Typography,
  TextField,
  Box,
  Grid,
  Card,
  Button,
  CardMedia,
} from '@material-ui/core';
import logoChimu from 'assets/logo_chimu.png';
import React, { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Required!'),
    password: Yup.string()
      .min(4, 'Your password is too short!')
      .max(20, 'Your password is too long!')
      .required('Required!'),
  });

  const formik = useFormik({
    initialValues: {
      email: enteredEmail,
      password: enteredPassword,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      setEnteredEmail(values.email);
      setEnteredPassword(values.password);
      console.log('Email:' + values.email + ', Password:' + values.password);
    },
  });

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          maxWidth: '474px',
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box my={6}>
              <CardMedia
                component="img"
                height="80px"
                width="auto"
                image={logoChimu}
                alt="Chimu"
              />
            </Box>
            <Grid
              container
              my={4}
              px={3}
              py={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Grid item md={12} xs={12}>
                <Typography>Username or E-mail</Typography>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  placeholder="nome@email.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography>Password</Typography>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  placeholder="topsecret"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{
                my: 4,
              }}
            >
              Log In
            </Button>
          </Box>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
