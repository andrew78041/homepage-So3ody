import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
 import PL from '../Images/new/zla.jpg'
const useStyles = makeStyles(theme => ({
    card: {
        width:350,
        marginLeft:'1.6%',
        marginTop:'3%'
      },
  media: {
    height: 0,
    paddingTop: '70%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const styles = {
  icon:{
    color: sessionStorage.getItem('l7')==='f'?'red':'black',
  }
}
export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleClick(event) {
    {sessionStorage.getItem('l7')==='f'? sessionStorage.setItem('l7','t'): sessionStorage.setItem('l7','f')}
    window.location.reload()
  }
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            A+
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Top Players"
        subheader="June 17, 2019"
      />
       
      <CardMedia
        className={classes.media}
        image={PL}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
      Ibrahimovic
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
        <FavoriteIcon onClick={handleClick} style={styles.icon}/>
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}