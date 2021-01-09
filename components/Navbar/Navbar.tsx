import React from 'react';
import Router from 'next/router';
import Link from 'next/link';

import {
    Nav,
    NavTitle,
    BackBtn,

} from './NavbarEl';

const Navbar = ({backButton}) => {
    return ( 
        <> 
        <Nav>
        {backButton && (
            <BackBtn onClick={() => Router.back()} >&#x2b05;</BackBtn>
        )}
        <Link href='/'>
            <a>
              <NavTitle>Hacker News Clone</NavTitle>  
            </a>
        </Link>
        </Nav>
        </>
    )
}
export default Navbar;