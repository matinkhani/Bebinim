import {
  AccDropContainer,
  ArrowIcon,
  BuySub,
  BuySubBtn,
  BuySubIcon,
  BuySubText,
  ConatinerAcc,
  ExplainSub,
  Icons,
  Line,
  LineMidlle,
  LogOutTab,
  LogOutTabLeft,
  LogOutTabRight,
  MoreContainer,
  SubBtnMiddle,
  SubContainer,
  SubText,
  Tabs,
  TabsLeft,
  TabsRight,
  Texts,
} from "@/app/Styled Components/AccDropDown";
import React from "react";

export default function AccountDrop() {
  return (
      <AccDropContainer>
        <SubContainer>
          <ExplainSub>
            <SubText> {"."}اشتراک فعال ندارید </SubText>
          </ExplainSub>
          <BuySub>
            <BuySubBtn>
              <SubBtnMiddle>
                <BuySubIcon src="./images/AccDropDown/buyIcon.svg" />
                <BuySubText>خرید اشتراک</BuySubText>
              </SubBtnMiddle>
            </BuySubBtn>
          </BuySub>
        </SubContainer>
        <MoreContainer>
          {/* Profile Tab */}
          <Tabs>
            <TabsLeft>
              <ArrowIcon src="./images/AccDropDown/Vector.svg" />
            </TabsLeft>
            <TabsRight>
              <Texts>حساب کاربری</Texts>
              <Icons src="./images/AccDropDown/profile.svg" />
            </TabsRight>
          </Tabs>
          {/* Saved List Tab */}
          <Tabs>
            <TabsLeft>
              <ArrowIcon src="./images/AccDropDown/Vector.svg" />
            </TabsLeft>
            <TabsRight>
              <Texts>نشان شده‌ها</Texts>
              <Icons src="./images/AccDropDown/save.svg" />
            </TabsRight>
          </Tabs>
          {/* Buy Sub Tab */}
          <Tabs>
            <TabsLeft>
              <ArrowIcon src="./images/AccDropDown/Vector.svg" />
            </TabsLeft>
            <TabsRight>
              <Texts>خرید اشتراک</Texts>
              <Icons src="./images/AccDropDown/ticket.svg" />
            </TabsRight>
          </Tabs>
          {/* Gift Card Tab */}
          <Tabs>
            <TabsLeft>
              <ArrowIcon src="./images/AccDropDown/Vector.svg" />
            </TabsLeft>
            <TabsRight>
              <Texts>کارت هدیه</Texts>
              <Icons src="./images/AccDropDown/gift.svg" />
            </TabsRight>
          </Tabs>
          {/* Line */}
          <Line>
            <LineMidlle />
          </Line>
          {/* Log Out Tab */}
          <LogOutTab>
            <LogOutTabLeft>
              <ArrowIcon src="./images/AccDropDown/Vector.svg" />
            </LogOutTabLeft>
            <LogOutTabRight>
              <Texts>خروج از حساب کاربری</Texts>
              <Icons src="./images/AccDropDown/logoutcurve.svg" />
            </LogOutTabRight>
          </LogOutTab>
        </MoreContainer>
      </AccDropContainer>
  );
}
