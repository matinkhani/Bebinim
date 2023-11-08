import {
  ChangeOneMonth,
  ChangeOneMonthAuto,
  ChangeSixMonth,
  ChangeThreeMonth,
  CreateAccount,
} from "@/app/Redux/createslice";
import { RoutState } from "@/app/Redux/store";
import {
  AccDropContainer,
  BuySub,
  BuySubBtn,
  BuySubText,
  ExplainSub,
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
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AccountDrop() {
  const dispatch = useDispatch();
  const LogingOut = () => {
    dispatch(CreateAccount(false));
    dispatch(ChangeOneMonthAuto(false));
    dispatch(ChangeOneMonth(false));
    dispatch(ChangeThreeMonth(false));
    dispatch(ChangeSixMonth(false));
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
                <Image
                  height={16}
                  width={16}
                  alt="buy icon"
                  src="./images/AccDropDown/buyIcon.svg"
                />
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
              <Image
                height={16}
                width={16}
                alt="vector"
                src="./images/AccDropDown/Vector.svg"
              />
            </TabsLeft>
            <TabsRight>
              <Texts>حساب کاربری</Texts>
              <Image
                height={16}
                width={16}
                alt="profile"
                src="./images/AccDropDown/profile.svg"
              />
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
              <Image
                height={16}
                width={16}
                alt="vector"
                src="./images/AccDropDown/Vector.svg"
              />
            </TabsLeft>
            <TabsRight>
              <Texts>نشان شده‌ها</Texts>
              <Image
                height={16}
                width={16}
                alt="saved list"
                src="./images/AccDropDown/save.svg"
              />
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
              <Image
                height={16}
                width={16}
                alt="vector"
                src="./images/AccDropDown/Vector.svg"
              />
            </TabsLeft>
            <TabsRight>
              <Texts>خرید اشتراک</Texts>
              <Image
                height={16}
                width={16}
                alt="ticket"
                src="./images/AccDropDown/ticket.svg"
              />
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
              <Image
                height={16}
                width={16}
                alt="vector"
                src="./images/AccDropDown/Vector.svg"
              />
            </TabsLeft>
            <TabsRight>
              <Texts>کارت هدیه</Texts>
              <Image
                height={16}
                width={16}
                alt="gift card"
                src="./images/AccDropDown/gift.svg"
              />
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
            <Image
              height={16}
              width={16}
              alt="vector"
              src="./images/AccDropDown/Vector.svg"
            />
          </LogOutTabLeft>
          <LogOutTabRight>
            <Texts>خروج از حساب کاربری</Texts>
            <Image
              height={16}
              width={16}
              alt="log out"
              src="./images/AccDropDown/logoutcurve.svg"
            />
          </LogOutTabRight>
        </LogOutTab>
      </MoreContainer>
    </AccDropContainer>
  );
}
