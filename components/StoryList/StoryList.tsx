import Link from 'next/link';

import { StoryList, StoryWrapper, StoryTitle, StoryDetails } from './StoryListEl';


const StoryList = ({ stories }) => (
    <StoryList>
        {stories.map((story) => (
            <StoryWrapper key={story.id}>
                <StoryTitle>
                    <a href={story.url}>{story.title}</a>
                </StoryTitle>
                <StoryDetails>
                    <span>{story.points || 0}</span>
                    <Link href={`/story?id=${story.id}`}>
                        <a>{story.comments_count || 0} comments</a>
                    </Link>
                </StoryDetails>
            </StoryWrapper>
        ))}
    </StoryList>
)
export default StoryList;
