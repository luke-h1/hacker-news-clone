import React from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout/Layout';
import CommentList from '../components/CommentList/CommentList';
import styled from 'styled-components';

const StoryMain = styled.div``

const StoryDetails = styled.div``




const Story = ({story}) => { 
    return ( 
        <>
        <StoryMain>
            <h1>
                <a href={story.url}>{story.title}</a>
            </h1>
            <StoryDetails>
                <strong>{story.points} points</strong>
                <strong></strong>
                <strong></strong>

            </StoryDetails>
        </StoryMain>
        </>
    )
}