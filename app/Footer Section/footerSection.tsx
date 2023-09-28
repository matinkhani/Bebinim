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
import Link from "next/link";

export default function FooterSection() {
  return (
    <Container>
      <FooterContainer>
        <FooterDetails>
          <Support>
            <Link href="#">پشتیبانی</Link>
          </Support>
          <Rules>
            <Link href="#">قوانین</Link>
          </Rules>
          <AboutUs>
            <Link href="#">درباره ما</Link>{" "}
          </AboutUs>
          <BuySubscription><Link href="#">خرید اشتراک</Link></BuySubscription>
          <HomePage><Link href="#">صفحه اصلی</Link></HomePage>
        </FooterDetails>
      </FooterContainer>
    </Container>
  );
}
