import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img3 from '../../components/Images/new/mb.jpg'
import Haha from '../layout/Buttons/BlueButton'

const useStyles = makeStyles({
  card: {
    maxWidth: 350,
    marginLeft:'2.7%',
    marginTop:'2.9%'
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
      <span>
              <img src={img3} width={500} height={300} mode="cover" />
            </span>
     
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{marginLeft:200}}>
     لاغب الجيل القادم
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p"style={{marginLeft:20}}>
            !!امبابى يدخل نادى المئه !! و الفاجئه هى دخوله قبل عمر ميسى او رونالدو  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Haha/>
        <Button size="large" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}