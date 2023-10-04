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
  Place,
} from "../Styled Components/footerSection";
import Link from "next/link";

export default function FooterSection() {
  return (
    <Container>
      <FooterContainer>
        <FooterDetails>
          <Place>
            <Support>
              <Link href="#">پشتیبانی</Link>
            </Support>
            <Rules>
              <Link href="#">قوانین</Link>
            </Rules>
            <AboutUs>
              <Link href="#">درباره ما</Link>{" "}
            </AboutUs>
            <BuySubscription>
              <Link href="/Subscribe">خرید اشتراک</Link>
            </BuySubscription>
            <HomePage>
              <Link href="#">صفحه اصلی</Link>
            </HomePage>
          </Place>
        </FooterDetails>
      </FooterContainer>
    </Container>
  );
}
