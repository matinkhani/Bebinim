import { CreateAccount } from "@/app/Redux/createslice";
import { RoutState } from "@/app/Redux/store";
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
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AccountDrop() {
  const dispatch = useDispatch();
  const LogingOut = () => {
    dispatch(CreateAccount(false));
  };

  const select = useSelector((state: RoutState) => state.Reducer);

  return (
    <AccDropContainer>
      <SubContainer>
        <ExplainSub>
          <SubText>
            {select.OneMonthAuto ? (
              <> {"."}اشتراک یک ماهه با تمدید خودکار دارید </>
            ) : select.OneMonth ? (
              <> {"."}اشتراک یک ماهه دارید </>
            ) : select.ThreeMonth ? (
              <> {"."}اشتراک سه ماهه دارید </>
            ) : select.SixMonth ? (
              <> {"."}اشتراک شش ماهه دارید </>
            ) : (
              <> {"."}اشتراک فعال ندارید </>
            )}
          </SubText>
        </ExplainSub>
        <BuySub>
          <Link href="/Subscribe">
            <BuySubBtn>
              <SubBtnMiddle>
                <BuySubIcon src="./images/AccDropDown/buyIcon.svg" />
                <BuySubText>خرید اشتراک</BuySubText>
              </SubBtnMiddle>
            </BuySubBtn>
          </Link>
        </BuySub>
      </SubContainer>
      <MoreContainer>
        {/* Profile Tab */}
        <Tabs>
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            href="/Account"
          >
            <TabsLeft>
              <ArrowIcon src="./images/AccDropDown/Vector.svg" />
            </TabsLeft>
            <TabsRight>
              <Texts>حساب کاربری</Texts>
              <Icons src="./images/AccDropDown/profile.svg" />
            </TabsRight>
          </Link>
        </Tabs>
        {/* Saved List Tab */}
        <Tabs>
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            href="/Saved-List"
          >
            <TabsLeft>
              <ArrowIcon src="./images/AccDropDown/Vector.svg" />
            </TabsLeft>
            <TabsRight>
              <Texts>نشان شده‌ها</Texts>
              <Icons src="./images/AccDropDown/save.svg" />
            </TabsRight>
          </Link>
        </Tabs>
        {/* Buy Sub Tab */}
        <Tabs>
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            href="/Subscribe"
          >
            <TabsLeft>
              <ArrowIcon src="./images/AccDropDown/Vector.svg" />
            </TabsLeft>
            <TabsRight>
              <Texts>خرید اشتراک</Texts>
              <Icons src="./images/AccDropDown/ticket.svg" />
            </TabsRight>
          </Link>
        </Tabs>
        {/* Gift Card Tab */}
        <Tabs>
          <Link
            style={{ display: "flex", height: "100%", width: "100%" }}
            href="#"
          >
            <TabsLeft>
              <ArrowIcon src="./images/AccDropDown/Vector.svg" />
            </TabsLeft>
            <TabsRight>
              <Texts>کارت هدیه</Texts>
              <Icons src="./images/AccDropDown/gift.svg" />
            </TabsRight>
          </Link>
        </Tabs>
        {/* Line */}
        <Line>
          <LineMidlle />
        </Line>
        {/* Log Out Tab */}
        <LogOutTab onClick={LogingOut}>
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
