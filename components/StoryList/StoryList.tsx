import Link from 'next/link'

import { StoryListWrapper, StoryWrapper, StoryTitle, StoryDetails, ExternalLink } from './StoryListEl'

const StoryList = ({ stories }) => (
  <StoryListWrapper>
    {stories.map((story) => (
      <StoryWrapper key={story.id}>
        <StoryTitle>
          <ExternalLink target="_blank" rel="noreferrer noopener" href={story.url}>
            {story.title}
          </ExternalLink>
        </StoryTitle>
        <StoryDetails>
          <span>{story.points || 0}</span>
          <Link href={`/story?id=${story.id}`}>
            <a>{story.comments_count || 0} comments</a>
          </Link>
        </StoryDetails>
      </StoryWrapper>
    ))}
  </StoryListWrapper>
)
export default StoryList
