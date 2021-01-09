import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import { GlobalStyle } from '../../styles/GlobalStyles'
import Navbar from '../../components/Navbar/Navbar'

const Wrap = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: #f6f6ef;
`

const Layout = ({ children, title, description, backButton }) => {
  return (
    <>
      <GlobalStyle />
      <NextSeo title={title} description={description} />
      <Navbar backButton={backButton}/>
      <Wrap>{children}</Wrap>
    </>
  )
}
export default Layout