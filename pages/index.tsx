import Head from 'next/head'
import Layout from '../components/Layout/Layout';
import Link from 'next/link';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 1rem;
  a {
    font-weight: 700;
    color: #000;
    text-decoration: none;
  }
`


export default function Home() {
  return (
    <>
    <Layout 
      title="Hacker news clone"
      description="hacker news clone made with Next JS"
    />
  <Footer>
    <Link href={`/?page=${page + 1}`}>
      <a>Next Page ({ page + 1 })</a>
    </Link>

  </Footer>

    </>
  )
}
