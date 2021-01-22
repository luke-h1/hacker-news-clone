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
              {story.title}
            </ExternalLink>
          ) : <h1>{story.title}</h1>}

        </StoryTitle>
        <StoryDetails>
          <span>{story.points || 'no points'}</span>
          <Link href={`/story?id=${story.id}`}>
            <a>
              {story.num_comments || 0}
            </a>
          </Link>
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
