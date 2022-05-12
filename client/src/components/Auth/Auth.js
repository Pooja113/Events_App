import React, { useState } from 'react'
import useStyles from './styles'
import {Container,Avatar,Button,Paper,Grid,Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import GoogleLogin from 'react-google-login'
import Icon from './Icon'

const Auth = () => {
  const classes = useStyles()
  const [showPassword,setShowPassword] = useState(false)

  const [isSignUp,setIsSignUp] = useState(false)
 
  const handleSubmit = () => {

  }

  const handleShowPassword = () => {
     setShowPassword((prevShowPassword)=> !prevShowPassword)
  }
  const handleChange = () => {

  }

  const switchMode = () =>{
    setIsSignUp((prevIsSignUp)=> !prevIsSignUp)
  }

  const googleSuccess = async (res) =>{
    console.log(res)
  }

  const googleFailure =(err) =>{
    console.log(err);
    console.log("Google Sign In is unsuccessfull, Try Again Later!")
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
          <GoogleLogin 
              clientId='812119341998-amvgi1d19t2enavto6c2vst28hh7kimj.apps.googleusercontent.com'
              render={(renderProps)=>(
                <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disable} startIcon={<Icon />} variant="contained">Google Sign In</Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin" 
              />
          <Grid container justifyContent='flex-end'>
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignUp ? "Already have an account ? Sign In" : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
