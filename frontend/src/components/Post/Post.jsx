import React, { useEffect } from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles.js';

import { getPosts } from '../../app/action-creators/posts.js';

function PostSingle({ title, body, date }) {
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

function Post() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const loadMore = () => {
    dispatch(getPosts(posts.length + 1));
  };
  useEffect(() => {
    dispatch(getPosts(0));
    console.log(posts);
  }, []);

  return (
    <Box sx={{ minWidth: 275 }}>
      {posts.map((post) => <PostSingle key={post._id} title={post.title} body={post.body} date={post.date} />)}
      <button onClick={loadMore}>Load more</button>

    </Box>
  );
}

export default Post;
