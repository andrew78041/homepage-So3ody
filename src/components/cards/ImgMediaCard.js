import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Haha from '../layout/Buttons/BlueButton'
import Typography from '@material-ui/core/Typography';
import img3 from '../../components/Images/new/me.jpg'

const useStyles = makeStyles({
  card: {
    
    maxWidth: 350,
    marginLeft:'-15.7%',
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
            صفقات
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p"style={{marginLeft:0}}>
              ريال مادريد يوقع مع ميندى بصفقه تبلغ ال 47 ميليون يورو 
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