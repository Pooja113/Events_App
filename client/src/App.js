import {Container} from '@material-ui/core'
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';


function App() {

  return (
    <BrowserRouter>
      <Container maxWidth="lg" >
        <Navbar />
          <Routes>
            <Route exact path='/' ><Home/></Route>
            <Route exact path='/auth' ><Auth /></Route>
          </Routes>
        
      </Container>
    </BrowserRouter>
    
  );
}

export default App;
