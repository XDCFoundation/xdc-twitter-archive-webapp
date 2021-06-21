// import React from "react";
// import styled from "styled-components";
// import { Row, Column } from "simple-flexbox";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import Box from "@material-ui/core/Box";
// import { Dialog } from "material-ui";

// const Main = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const useStyles = makeStyles((theme) => ({
//   main: {},
//   root: {},
//   grid: {},
//   grid2: {},
//   grid3: {},
//   span: {
//     padding: "25px",
//     textAlign: "center",
//     display: "flex",
//     justifyContent: "center",
//     fontSize: "32px",
//     fontWeight: "600",
//     fontStretch: "normal",
//     fontStyle: "normal",
//     letterSpacing: "normal",
//     fontFamily: "Raleway, sans-serif !important",
//     lineHeight: "1.16",
//     letterSpacing: "normal",
//     color: " #09184b",
//   },
//   input: {
//     borderRadius: "4px",
//     background: "url(/images/search.svg) no-repeat 10px",
//     border: "solid 1px #aab1ff",
//     padding: "5px",
//     width: " 37%",
//   },
//   button: {
//     backgroundColor: "#3366ff",
//     borderRadius: "4px",
//     color: "#ffffff",
//     border: "none",
//     fontSize: "15px",
//   },
// }));
// const Image = styled.img`
//   width: 55%;
// `;

// const FakeNewsImage = styled.img`
//   width: 50%;
// `;

// const ImageContainer = styled.div`
//   margin-top: 50px;
// `;

// const Label = styled.label`
//   font-size: 14px;
//   margin-top: 14px;
//   margin-left: 12px;
// `;

// const FakeNewsLabel = styled.label`
//   margin-top: 13px;
//   font-size: 14px;
// `;

// const SubContent = styled.span`
//   margin-top: 10px;
//   font-size: 12px;
//   text-align: center;
// `;
// export default function DemoComponent() {
//   const classes = useStyles();
//   return (
//     <div className={classes.main}>
//       <div className={classes.root}>
//         <Grid container>
//           <Grid item xs={12}>
//             <Row className="justify-content-center">
//               <span className={classes.span}>Enter Tweet Link</span>
//             </Row>
//           </Grid>
//           <Grid item xs={12}>
//             <Row className="justify-content-center">
//               <input className={classes.input} type="text" />
//               <button className={classes.button}>Archive</button>
//             </Row>
//           </Grid>
//           <Row className="justify-content-center">
//             <Grid item xs={12} sm={12} md={4}>
//               <Row>
//                 <img src="images/Fake.svg" />
//               </Row>
//             </Grid>
//             <Grid item xs={12} sm={12} md={4}>
//               <Row>
//                 <img src="images/archivetweet.svg" />
//               </Row>
//             </Grid>
//             <Grid item xs={12} sm={12} md={4}>
//               <Row>
//                 <img src="images/Legalnews.svg" />
//               </Row>
//             </Grid>
//           </Row>
//         </Grid>
//       </div>
//     </div>
//   );
// }

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import CardActionArea from "@material-ui/core/CardActionArea";

import { Row, Column } from "simple-flexbox";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       <Link color="inherit" href="">
//         XinFin
//       </Link>{" "}
//       {" Â© "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    fontFamily: "Raleway sans-serif !important",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),

    outline: "none !important",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    outline: "none !important",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    height: 140,
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "center",
    outline: "none !important",
    border: "none !important",
  },

  input: {
    border: "none",
    borderRadius: "4px",
    background: "url(/images/search.svg) no-repeat 20px",
    border: "solid 1px #aab1ff",
    width: "545px",
    height: "40px",
    marginRight: "7px",
    paddingLeft: "60px",
  },
  button: {
    backgroundColor: " #3366ff",
    borderRadius: "4px",
    color: "#ffffff",
    border: "none",
    fontSize: "15px",
    width: "115px",
  },
  span: { marginLeft: "448px" },
}));

// const cards = [1, 2, 3, 4, 5, 6];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h4"
              align="center"
              color="textPrimary"
              font-family="Raleway sans-serif !important"
              gutterBottom
            >
              Enter Tweet Link
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            ></Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Row>
                    <input className={classes.input} type="text" />
                    <button className={classes.button}>Archive</button>
                  </Row>
                  <Row>
                    <span className={classes.span}>
                      20,000 tweets have been archived
                    </span>
                  </Row>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} fixed>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                    title="Paella dish"
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Stop Fake News
                    </Typography>
                    <Typography>
                      Help in making the world better-informed by stopping fake
                      news
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                    title="Paella dish"
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Archive your Tweets
                    </Typography>
                    <Typography>
                      Archive your tweets in our platform so that it stays
                      forever
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                    title="Paella dish"
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Save links for legal actions
                    </Typography>
                    <Typography>
                      Use your saved links for the future legal actions
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
