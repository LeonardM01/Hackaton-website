import React, { useEffect } from 'react';
import { Typography, Card, CardContent, Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import useStyles from './styles.js';

import { getPosts, loadMorePosts } from '../../app/action-creators/posts.js';

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
    dispatch(loadMorePosts(posts.length + 1));
  };
  useEffect(() => {
    dispatch(getPosts(0));
  }, []);

  return (
    <Box sx={{ minWidth: 275 }}>
      {posts.map((post) => <PostSingle key={post._id} title={post.title} body={post.body} date={post.date} />)}
      <Button size="small" type="button" onClick={loadMore} className={classes.loadMore}>Load More...</Button>
    </Box>
  );
}

export default Post;
