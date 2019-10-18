import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Haha from '../layout/Buttons/BlueButton'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img3 from '../../components/Images/content/4.jpg'

const useStyles = makeStyles({
  card: {
    
    maxWidth: 350,
    marginLeft:'2%  ',
    marginTop:'-20%'
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
      <span>
              <img src={img3} width={400} height={300} mode="cover" />
            </span>
     
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{marginLeft:260}}>
           مرتبات
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p"style={{marginLeft:0}}>
             ميسى هو الاعلى اجرا فى جميع الرياضيين معتليا الصداره فوق رونالدو
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