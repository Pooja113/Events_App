import React, { useState } from 'react'
import useStyles from './styles'
import {Container,Avatar,Button,Paper,Grid,Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'



const Auth = () => {
  const isSignUp = false;
  const classes = useStyles()
  const [showPassword,setShowPassword] = useState(false)

  const handleSubmit = () => {

  }

  const handleShowPassword = () => {
     setShowPassword((prevShowPassword)=> !prevShowPassword)
  }
  const handleChange = () => {

  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
         <Typography variant='h5'>{isSignUp ? "Sign Up" : "Sign In" }</Typography>
        <form className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={2}>
            {isSignUp && (
              <React.Fragment>
                  <Input  name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                  <Input  name='firstName' label='First Name' handleChange={handleChange} half />
           </React.Fragment>
            )}
            <Input  name='email' label='Email Address' handleChange={handleChange} type="email" />
            <Input  name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : "password"} handleShowPassword={handleShowPassword} />
              {isSignUp &&  <Input name="confirmPassword" label="Repeat Password" type="password" handleChange={handleChange} />}
          </Grid>
          <Button type="submit" variant="contained" fullWidth color="primary" className={classes.submit}>{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
