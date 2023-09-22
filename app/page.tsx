"use client"
import React from 'react'
import { Container, GlobalStyle } from './Styled Components/Landing'
import Header from './Header/Header'
export default function Home() {
  return (
<React.Fragment>
  <GlobalStyle/>
  <Container>
    <Header/>
  </Container>
</React.Fragment>
  )
}
