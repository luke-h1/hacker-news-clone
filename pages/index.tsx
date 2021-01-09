import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Link from 'next/link'
import styled from 'styled-components'
import { GetStaticProps } from 'next'
import React, { useEffect } from 'react'
import { StoryList } from '../components/StoryList/StoryListEl'

const Footer = styled.footer`
  padding: 1rem;
  a {
    font-weight: 700;
    color: #000;
    text-decoration: none;
  }
`

const getStaticProps: GetStaticProps = async ({ req, res, query }) => {
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
  return {
    props: {
      stories,
      page,
    },
  }
}

export default function Home({ stories, page }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout title="Hacker news clone" description="hacker news clone made with Next JS">
        <Footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page ({page + 1})</a>
          </Link>
          <StoryList stories={stories} />
        </Footer>
      </Layout>
    </>
  )
}
