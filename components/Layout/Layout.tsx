import React from 'react'
import Router from 'next/router'
import { NextSeo } from 'next-seo'
import { GlobalStyle } from '../../styles/GlobalStyles'

const Layout = ({ children, title, description, backButton }) => {
  return (
    <>
      <GlobalStyle />
      <NextSeo title={title} description={description} />
      <Navbar /> 
      {children}
      <Footer /> 
    </>
  )
}
