import styled from 'styled-components';

export const StoryListWrapper = styled.div`
    padding: 0 1em;
`

export const StoryWrapper = styled.div`
    padding: 1em 0;
`

export const StoryTitle = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 0.5rem;
    a { 
        color: #333;
        text-decoration: none;
        &:hover { 
            text-decoration: underline;
        }
    }
`

export const StoryDetails = styled.div`
    font-size: 0.8rem;
    font-weight: 700;
    span { 
        margin-right: 1rem;
    }
    a { 
        color: #6600ff;
        text-decoration: none;
    }
`