import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      maxWidth: 180,
      maxHeight:180,
      display:"inline-block",
      margin:"15px"
    }
  });
function Chart({data,title}) {
    const classes = useStyles();
    return (
        <div className="chart">
        {data && <h3 className="chart-title">{title}</h3>}
        <div className="chart-body">
        {data && data.map((e,i)=>
             <Card key={e+i} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={e.snippet.thumbnails.high.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="p">
          {e.snippet.title.slice(0, 70) + " ..."}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card> 
        )}
        </div>
        </div>
    )
}

export default Chart
