import React, { useEffect } from 'react';
import { Typography, Card, CardContent, Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import useStyles from './styles.js';

import { getReports, loadMoreReports } from '../../app/action-creators/reports';

function ReportSingle({ title, body, date }) {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.postBox}>
      <CardContent>
        <Typography variant="h4" component="div" className={classes.title}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="body2" className={classes.text}>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Report() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reports);

  const loadMore = () => {
    dispatch(loadMoreReports(reports.length + 1));
  };
  useEffect(() => {
    dispatch(getReports(0));
  }, []);

  return (
    <Box sx={{ minWidth: 275 }}>
      {reports.map((report) => <ReportSingle key={report._id} title={report.title} body={report.body} resolved={report.isResolved} />)}
      <Button size="small" type="button" onClick={loadMore} className={classes.loadMore}>Load More...</Button>
    </Box>
  );
}

export default Report;
