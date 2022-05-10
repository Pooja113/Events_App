import {Container,AppBar,Typography, Grow,Grid} from '@material-ui/core'
import eventimg from './images/event.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from './action/posts.js';

function App() {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch,currentId])
  
  return (
    <Container maxWidth="lg" >
      <AppBar className={classes.appBar} position='static' color='inherit'>
      <Typography className={classes.heading} variant='h2' align='center'>EVENTS</Typography>
      <img className={classes.image} src={eventimg} alt="events" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
