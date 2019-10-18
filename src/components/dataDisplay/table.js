import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
      backgroundColor: theme.palette.background.default,
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Manchester City', 38, 32, 2, 4),
  createData('Liverpool', 38, 30, 7, 1),
  createData('Chelsea', 38, 21, 9, 8),
  createData('Tottenham', 38, 23,2, 13),
  createData('Arsenal', 38, 21, 7, 10),
];

const useStyles = makeStyles(theme => ({
  root: {
 display:'flex'
  },
  table: {
    
    flexShrink:0,
    marginTop:0,
    width:300,
    height:350,
    background: 'linear-gradient(to top, #000000, #DCDCDC)',
    borderStyle: 'solid',
    borderColor: 'black',
  },

  drawerPaper: {
    marginTop:65,
  height:360,
    background: 'linear-gradient(to top, #000000, #DCDCDC)',
    borderStyle: 'solid',
    borderColor: 'black',
  },
}));

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
    anchor="left"
  >
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Teams</StyledTableCell>
            <StyledTableCell align="right">Played</StyledTableCell>
            <StyledTableCell align="right">Win</StyledTableCell>
            <StyledTableCell align="right">Draw</StyledTableCell>
            <StyledTableCell align="right">Lose</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

    </Drawer>
    </div>
  );
}