import React from "react"
import Helmet from 'react-helmet';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

function About(props) {
  return (
    <div>

      <Helmet>
        <title>Aamos | About me</title>
      </Helmet>

      <Box mt={5}>

        <Typography variant="h3">
          About me
        </Typography>

        <Box mt={7}>
          <Grid container spacing={10}>

            <Grid item xs={12} sm={6}>
              <Paper elevation={5} class="textbox">
                <Box p={3}>
                  <Typography variant="h5">
                    General
                  </Typography>
                  <Box p={2}>
                    <Divider />
                  </Box>
                  <Typography variant="body1">
                    My name is Aamos Riihinen. I was born in the city of Jyväskylä, Finland,
                    and although I have since moved to Tampere in pursuit of studies my heart
                    will always remain in Central Finland. <br></br><br></br>
                    I'm a calm and easy-going person who doesn't stress too much about things.
                    Although I enjoy solitude, I get along well with all kinds of people.
                    I'm observant and I have a good eye for details.<br></br><br></br>
                    I'm a practical person who enjoys finding creative solutions to problems. New challenges and
                    experiences excite me: I like using my skills and knowledge to achieve results.
                    Unfamiliar and sudden situations don't bother me, and I perform well under
                    pressure.
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper elevation={5} class="textbox">
                <Box p={3}>
                  <Typography variant="h5">
                    Education
                  </Typography>
                  <Box p={2}>
                    <Divider />
                  </Box>
                  <Typography variant="body1">
                    I'm currently working towards a master's degree in information technology at Tampere University. I began my studies there in 2018.<br />
                    I am majoring in software engineering and minoring in cyber security.<br /><br />
                    I have a bachelor's degree in information technology, with a major 
                    in software engineering and a minor in industrial management.<br></br><br></br>
                    I graduated upper secondary school from Jyväskylän normaalikoulun lukio in 2017.
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper elevation={5} class="textbox">
                <Box p={3}>
                  <Typography variant="h5">
                    Work experience
                  </Typography>
                  <Box p={2}>
                    <Divider />
                  </Box>
                  <Typography variant="body1">
                    2021 - 2022<br></br>Associate Cloud Developer at Basware Oy
                    <br></br><br></br>

                    2020<br></br>Postal delivery worker at Posti Palvelut Oy
                    <br></br><br></br>

                    2017 - 2018<br></br>Laboratory assistant at University of
                    Jyväskylä, Faculty of Information Technology (civilian service)<br></br><br></br>
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper elevation={5} class="textbox">
                <Box p={3}>
                  <Typography variant="h5">
                    Skills and interests
                  </Typography>
                  <Box p={2}>
                    <Divider />
                  </Box>
                  <Typography variant="body1">
                    I have experience developing full stack web applications and desktop applications for work, university and personal projects.
                    I'm interested in all kinds of programming. I'm comfortable using and configuring Linux, working with Git version control and using SQL databases.<br />
                    Some technologies and programming languages I'm familiar with:<br /><br />
                    ASP.NET, React, Vue, Node, Django, Qt, C++, C#, Python, Haskell, JavaScript/HTML/CSS.

                    <br></br><br></br>
                    Some of my interests include: technology, cars, video games, investing, movies, reading, archery, photography.
                  </Typography>
                </Box>
              </Paper>
            </Grid>

          </Grid>
        </Box>

      </Box>

    </div>
  )
}

export default About;
