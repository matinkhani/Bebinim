import React from 'react'
import { Container, Details, DetailsBottom, DetailsTop, ExclusiveMovie, ExclusiveText, Hover, HoverText, Movies1, Movies2, Movies3, Movies4 } from '../Styled Components/exclusive'

export default function Exclusive() {
  return (
  <Container>
    <ExclusiveText>اختصاصی ببینیم</ExclusiveText>
  <ExclusiveMovie>
    <Movies1>
        <Hover>
            <HoverText><Details>
                <DetailsTop></DetailsTop>
                <DetailsBottom></DetailsBottom>
                </Details></HoverText>
        </Hover>
    </Movies1>
    <Movies2>
        <Hover>
            <HoverText><Details>
                <DetailsTop></DetailsTop>
                <DetailsBottom></DetailsBottom>
                </Details></HoverText>
        </Hover>
    </Movies2>
    <Movies3>
        <Hover>
            <HoverText><Details>
                <DetailsTop></DetailsTop>
                <DetailsBottom></DetailsBottom>
                </Details></HoverText>
        </Hover>
    </Movies3>
    <Movies4>
        <Hover>
            <HoverText><Details>
                <DetailsTop></DetailsTop>
                <DetailsBottom></DetailsBottom>
                </Details></HoverText>
        </Hover>
    </Movies4>
  </ExclusiveMovie>
  </Container>
  )
}
