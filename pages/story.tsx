import React from 'react'
import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import Layout from '../components/Layout/Layout'
import CommentList from '../components/CommentList/CommentList'
import styled from 'styled-components'

const StoryMain = styled.div`
  padding: 1rem;
`

const StoryDetails = styled.div`
  font-size: 0.8rem;
  padding-bottom: 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;
	strong { 
		margin-right: 1rem;
	}
	a { 
		color: #f60;
	}
`

const Title = styled.h1`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 300;
`

const Story = ({ story }) => {
  return (
    <>
		<Layout title={story.title} backButton={true}>
      <StoryMain>
        <Title>
          <a href={story.url}>{story.title}</a>
        </Title>
        <StoryDetails>
          <strong>{story.points} points</strong>
          <strong>{story.comments_count} comments</strong>
          <strong>{story.time_ago}</strong>
        </StoryDetails>
        {story.comments.length > 0 ? <CommentList comments={story.comments} /> : <div>No comments for this story</div>}
      </StoryMain>
			</Layout>
    </>
  )
}
export default Story


Story.getInitialProps = async ({req, res, query}) => { 
	let story;
	try {
		const storyId = query.id;
		const res = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
		story = await res.json()
	} catch (e) {
		console.error(e);
		story = [];
		
	}
	return { story }; 
}