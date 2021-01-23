import React from "react"
import cvkuva from './cvkuva.jpg';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function Info(props) {
  return (
    <div>

    <Box mt={5}>
      <Typography variant="h3">
      Welcome to my home page!
      </Typography>

      <Box mt={3}>
      <Grid container spacing={0}>

        <Grid item xs={12} sm={6} backgroundColor="white">
          <img src={cvkuva} alt="me :)" id="cvkuva" />
        </Grid>

        <Grid item xs>
          <Paper id="infobox" elevation={5}>
          <Typography variant="body1">
          Hello!
          <br></br><br></br>
          My name is Aamos Riihinen. I am a university student living in Tampere,
          Finland. I study information technology at Tampere University.
          <br></br><br></br>
          This is my home page. At the moment it functions as
          an online résumé of sorts. Other features might appear in the future.
          Enjoy your stay!
          <br></br><br></br>
          - Aamos
          </Typography>
          </Paper>

        </Grid>

      </Grid>
      </Box>

    </Box>

    </div>
  )
}

export default Info;
