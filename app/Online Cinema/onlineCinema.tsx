import React from "react";
import {
  CinemaOlineText,
  Container,
  DetailsPlace,
  DetailsText,
  DetalisDown,
  DetalisTop,
  Hover,
  HoverText,
  Line,
  Movie1,
  Movie2,
  Movie3,
  Movie4,
  Name,
  PosterPlace,
  Year,
} from "../Styled Components/onlineCinema";

export default function OnlineCinema() {
  return (
    <Container>
      <CinemaOlineText>سینما آنلاین</CinemaOlineText>
      <PosterPlace>
        {/* Movie 1 */}
        <Movie1>
          <Hover>
            <HoverText>
              <DetailsPlace>
                <DetalisTop>
                  <Year>۱۳۹۹</Year>
                  <Line />
                  <Name>ابلق</Name>
                </DetalisTop>
                <DetalisDown>
                  <DetailsText>
                    راحله به همراه همسرش علی و دختر کوچکش در یکی از محله‌های
                    حاشیه‌ای تهران زندگی می‌کنند...
                  </DetailsText>
                </DetalisDown>
              </DetailsPlace>
            </HoverText>
          </Hover>
        </Movie1>
        {/* Movie 2 */}
        <Movie2>
          <Hover>
            <HoverText>
              <DetailsPlace>
                <DetalisTop>
                  <Year>۱۴۰۱</Year>
                  <Line />
                  <Name>جنگ جهانی سوم</Name>
                </DetalisTop>
                <DetalisDown>
                  <DetailsText>
                    شکیب (محسن تنابنده) یک کارگر روزمزد میانسالِ بی‌خانمان است
                    که همسر و پسرش را سال‌ها پیش در زلزله از دست داده و تاکنون
                    با این امر کنار نیامده است. او در طی چند سال گذشته، با یک زن
                    لال و ناشنوای جوان به نام لادن رابطه برقرار کرده‌است...
                  </DetailsText>
                </DetalisDown>
              </DetailsPlace>
            </HoverText>
          </Hover>
        </Movie2>
        {/* Movie 3 */}
        <Movie3>
          <Hover>
            <HoverText>
              <DetailsPlace>
                <DetalisTop>
                  <Year>۱۳۹۹</Year>
                  <Line />
                  <Name>مصلحت</Name>
                </DetalisTop>
                <DetalisDown>
                  <DetailsText>
                    {" "}
                    داستان از آنجایی آغاز می‌شود که «مهدی» پسر آیت‌الله مشکاتیان
                    که یکی از مقامات بلندپایه‌ی قوه‌ی قضائیه است، مرتکب قتل
                    می‌شود، اما از پذیرفتن آن سر باز می‌زند و ...
                  </DetailsText>
                </DetalisDown>
              </DetailsPlace>
            </HoverText>
          </Hover>
        </Movie3>
        {/* Movie 4 */}
        <Movie4>
          <Hover>
            <HoverText>
              <DetailsPlace>
                <DetalisTop>
                  <Year>۱۳۹۹</Year>
                  <Line />
                  <Name>فسیل</Name>
                </DetalisTop>
                <DetalisDown>
                  <DetailsText>
                    اسماعیل، سعید و صفا که عضو گروه موسیقی بلک داگز هستند، برای
                    معروفیت و موفقیت تلاش دارند. اسماعیل (با نام خوانندگی اسی)
                    دنبال اجرا جلوی شاه است. اما صفا گرایش چپ دارد ...
                  </DetailsText>
                </DetalisDown>
              </DetailsPlace>
            </HoverText>
          </Hover>
        </Movie4>
      </PosterPlace>
    </Container>
  );
}
