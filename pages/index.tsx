import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Error from 'next/error';
import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-fetch'
import StoryList from '../components/StoryList/StoryList'
import Layout from '../components/Layout/Layout'

const Footer = styled.footer`
  padding: 1rem;
  a {
    font-weight: 700;
    color: #000;
    text-decoration: none;
  }
`

export default function Home({ stories, page }) {
  return (
    <>
      <Layout title="Hacker news clone" description="hacker news clone made with Next JS">
        <StoryList stories={stories} />
        <Footer>
          <Link href={`/?page=${page + 1}`}>
            <a>
              Next Page (
              {page + 1}
              )
            </a>
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
    const i = await res.json()
    stories = JSON.parse(i)
  } catch (error) {
    console.error(error)
    stories = []
  }
  return { stories, page }
}
