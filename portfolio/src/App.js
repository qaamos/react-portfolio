import './App.css';
import { HashRouter, Route, Link } from 'react-router-dom';
import About from './About.js';
import Info from './Info.js';
import 'fontsource-roboto';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <HashRouter>
    <div className="App">
    <Container>

      <Route exact path="/" component={Info} />
      <Route path="/about" component={About} />

      <AppBar position="fixed" id="navbar">
        <Toolbar>

          <Box display='flex' flexGrow={1}>
            <Typography variant="h6">
              Aamos Riihinen
            </Typography>
            <Box pl={3}>
              <Button className="menuButton" variant="contained"
              style={{color:"white", backgroundColor:"#005DEF"}}
              href="https://linkedin.com/in/aamos-riihinen/">
                LinkedIn
              </Button>
            </Box>
            <Box pl={3}>
              <Button className="menuButton" variant="contained"
              style={{color:"white", backgroundColor:"#005DEF"}}
              href="https://github.com/qaamos">
                Github
              </Button>
            </Box>
          </Box>

          <Box pr={3}>
            <Button className="menuButton" variant="contained"
            style={{color:"white", backgroundColor:"#005DEF"}}
            component={Link} to="/">
              Welcome
            </Button>
          </Box>
          <Button className="menuButton" variant="contained"
          style={{color:"white", backgroundColor:"#005DEF"}}
          component={Link} to="/about">
            About me
          </Button>
        </Toolbar>
      </AppBar>

    </Container>
    </div>
    </HashRouter>
  );
}

export default App;
