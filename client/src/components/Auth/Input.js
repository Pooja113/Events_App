import React from 'react'
import {IconButton, InputAdornment, Grid, TextField} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'



const Input = ({ half,name,handleChange,label,autoFocus,type,handleShowPassword}) => {
  return (
    <Grid item xs={12} sm={ half ? 6: 12}>
      <TextField 
        name={name} 
        onChange={handleChange} 
        autoFocus ={autoFocus} 
        required
        fullWidth
        label={label}
        variant="outlined"
        type={type}
        InputProps={name==="password" ? {endAdornment : (
          <InputAdornment position='end'>
            <IconButton onClick={handleShowPassword}>
              {type==="password" ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )} : null}

      />

    </Grid>
  )
}

export default Input
