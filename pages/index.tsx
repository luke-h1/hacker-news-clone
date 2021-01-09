import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Link from 'next/link'
import styled from 'styled-components'
import { GetServerSideProps } from 'next'
import Error from 'next/error';
import React, { useEffect, useState } from 'react'
import StoryList from '../components/StoryList/StoryList'
import fetch from 'isomorphic-fetch'

const Footer = styled.footer`
  padding: 1rem;
  a {
    font-weight: 700;
    color: #000;
    text-decoration: none;
  }
`



export default function Home(props) {
  const [error, setError] = useState(false);
  const { stories, page } = props;
  // if (stories.length === 0 || stories.length === undefined){
  //   return <Error statusCode={503} /> 
  // }
  return (
    <>
      <Layout title="Hacker news clone" description="hacker news clone made with Next JS">
      <StoryList stories={stories} /> 
        <Footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page ({page + 1})</a>
          </Link>
        </Footer>
      </Layout>
    </>
  )
}

Home.getInitialProps = async ({ req, res, query }) => {
  let stories
  let page
  try {
    page = Number(query.page) || 1
    const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
    stories = await res.json()
    console.log(stories)
  } catch (error) {
    console.error(error)
    stories = []
  }
  return { props: stories, page }
}