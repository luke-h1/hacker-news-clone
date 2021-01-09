import React from 'react'

import { Wrapper, CommentUser, CommentContent, NestedComments } from './CommentEl';

const Comment = ({ comment }) => (
  <Wrapper>
    <CommentUser>{comment.user}</CommentUser>
    <CommentContent dangerouslySetInnerHTML={{ __html: comment.content }} />
    {comment.comments && (
      <NestedComments>
        {comment.comments.map((nestedComment) => (
          <Comment key={nestedComment.id} comment={nestedComment} />
        ))}
      </NestedComments>
    )}
  </Wrapper>
)
export default Comment;