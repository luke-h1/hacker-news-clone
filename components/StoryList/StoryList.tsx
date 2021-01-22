import Link from 'next/link'
import React from 'react';

import {
  StoryListWrapper, StoryWrapper, StoryTitle, StoryDetails, ExternalLink,
} from './StoryListEl'

const StoryList = ({ stories }) => (
  <StoryListWrapper>
    {console.log(stories)}
    {stories.hits.map((story) => (
      <StoryWrapper key={story.author}>
        <StoryTitle>
          {story.url ? (
            <ExternalLink target="_blank" rel="noreferrer noopener" href={story.url}>
              {story.title ? story.title : null}
            </ExternalLink>
          ) : (
            <ExternalLink target="_blank" rel="noreferrer noopener" href={story.url}>
              {story.url ? story.url : ''}
            </ExternalLink>
          )}

        </StoryTitle>

        <StoryDetails>
          <span>{story.points || '0'}</span>
          {/* <Link href={`/story?id=${story.objectID}`}>
          <a>
            {`${story.num_comments}` || 0}
          </a>
        </Link> */}
        </StoryDetails>
      </StoryWrapper>

    ))}
    {/* {stories.map((story) => (
      <StoryWrapper key={story.id}>
        <StoryTitle>
          <ExternalLink target="_blank" rel="noreferrer noopener" href={story.url}>
            {story.title}
          </ExternalLink>
        </StoryTitle>
        <StoryDetails>
          <span>{story.points || 0}</span>
          <Link href={`/story?id=${story.id}`}>
            <a>
              {story.comments_count || 0}
              {' '}
              comments
            </a>
          </Link>
        </StoryDetails>
      </StoryWrapper>
    ))} */}
  </StoryListWrapper>
)
export default StoryList
