import React from "react";
import {
  Container,
  FooterContainer,
  Support,
  Rules,
  AboutUs,
  BuySubscription,
  HomePage,
  FooterDetails,
} from "../Styled Components/footerSection";

export default function FooterSection() {
  return (
    <Container>
      <FooterContainer>
        <FooterDetails>
          <Support>پشتیبانی</Support>
          <Rules>قوانین</Rules>
          <AboutUs>درباره ما</AboutUs>
          <BuySubscription>خرید اشتراک</BuySubscription>
          <HomePage>صفحه اصلی</HomePage>
        </FooterDetails>
      </FooterContainer>
    </Container>
  );
}
