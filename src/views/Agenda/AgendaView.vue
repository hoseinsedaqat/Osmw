<template>
  <div>
    <HeaderAppDark></HeaderAppDark>
    <section id="agenda">
      <h4 class="text-center text-muted">What’s happening?</h4>
      <h2 class="text-center font-weight-bold">Program</h2>
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto my-3">
            <div
              class="d-flex happeningBtn d-flex-align-items-center justify-content-center"
            >
              <button @click="dayOneClick">Day One</button>
              <button @click="dayTwoClick">Day Two</button>
            </div>
          </div>
        </div>
        <div class="row my-3" v-if="dayOne">
          <div class="col-md-6 mx-auto text-center">
            <h2>Day One</h2>
          </div>
        </div>
        <div class="row my-3" v-if="dayTwo">
          <div class="col-md-6 mx-auto text-center">
            <h2>Day Two</h2>
          </div>
        </div>
        <!-- Day One -->
      <div class="row mt-3" v-if="dayOne">
        <div class="col-md-10 offset-md-1">
          <div class="eventHappening">
            <div class="eventTitle">
              <span>09:00 am</span>
              <span>Registration and networking</span>
            </div>
          </div>
          <div class="eventHappening">
            <div class="eventTitle">
              <span>9:30 am</span>
              <span>VIP welcome at Majlis</span>
            </div>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>10:00 am</span>
                <span>Welcome remarks by The National Publishing Agency</span>
              </div>
              <span
                data-toggle="collapse"
                href="#hOne"
                role="button"
                aria-expanded="false"
                aria-controls="hOne"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse font-sm-own" id="hOne">
              <span> Introduced by Hawra Al Farsi: Influencer, TV Host </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>10:05 am</span>
                <span
                  >The role of digital marketing in accelerating the digital economy</span
                >
              </div>
              <span
                data-toggle="collapse"
                href="#eventSeven"
                role="button"
                aria-expanded="false"
                aria-controls="eventSeven"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse font-sm-own" id="eventSeven">
              <span>
                H.E Talal Al Rahbi: Vice Chairman: Implementation Follow up Unit, Oman
                Vision 2040 (TBC)
              </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>10:10 am</span>
                <span
                  >The importance of social media in the media mix, and the role of
                  regulators in promoting best practices</span
                >
              </div>
              <span
                data-toggle="collapse"
                href="#eventEight"
                role="button"
                aria-expanded="false"
                aria-controls="eventEight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse font-sm-own" id="eventEight">
              <span> Ministry of Information </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="eventTitle">
              <span>10:15 am</span>
              <span>Trophy Handing to Chief Guest</span>
            </div>
          </div>
          <div class="eventHappening">
            <div class="eventTitle">
              <span>10:15 am</span>
              <span>Morning Break</span>
            </div>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>11:00 am</span>
                <span
                  >Panel Discussion: Social Media Trends: a holistic view on regional and
                  global social media usage and adaptation.</span
                >
              </div>
              <span
                data-toggle="collapse"
                href="#eventOne"
                role="button"
                aria-expanded="false"
                aria-controls="eventOne"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse" id="eventOne">
              <span>
                <span class="font-weight-bold d-block m-4"> Points of Discussion: </span>
                <li class="m-4">
                  Shifts in social media objectives: what businesses are using social
                  media for?
                </li>
                <li class="m-4">
                  Strategizing social media to build communities and cultural capital.
                </li>
                <li class="m-4">Evolving usage of social media channels</li>
                <li class="m-4">
                  Advertising and social media: how creativity in curating content is
                  impacting leads acquisition and social media engagement.
                </li>
                <li class="m-4">
                  Increasing business impact by social listening: building reputation and
                  managing risks.
                </li>
                <li class="m-4">
                  Social selling and customer acquisition by personalized shopping.
                </li>
                <li class="m-4">Social customer service</li>
                <span class="font-weight-bold d-block m-4">
                  MCEE: Tariq Al Barwani- Award-Winning Technology Professional &amp;
                  Practical Motivational Speaker
                </span>
                <span class="font-weight-bold d-block mx-4"> Speakers: (Reserved) </span>
                <li class="m-4"><b class="mx-1">Ali Shabdar</b>, ZOHO Corporation.</li>
                <li class="m-4">
                  <b class="mx-1">Richie Santosdiaz</b>, Fintech Thoughtleader TBC
                </li>
                <li class="m-4">
                  <img
                    src="@/assets/Images/Said Al Busiaid - Manager Communication and Sustainability at Mazoon Electricity .jpeg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Said Al Busaidi</b>, Certified Digital Marketer | PR
                  Expert | Change Management
                </li>
              </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>12:00 am</span>
                <span
                  >Panel Discussion: How technology is driving social media evolution and
                  changing future outlook of business and social networking:</span
                >
              </div>
              <span
                data-toggle="collapse"
                href="#eventTwo"
                role="button"
                aria-expanded="false"
                aria-controls="eventTwo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse" id="eventTwo">
              <span>
                <span class="font-weight-bold d-block m-4">
                  MCEE: Tarek Al Barwani: Award-Winning Technology Professional &amp;
                  Practical Motivational Speaker
                </span>
                <li class="m-4">RFID Radio Frequency Identification Tags</li>
                <li class="m-4">
                  NFT: Non Fungible Tokens: Avatars, Digital Artifacts, NFT marketplace.
                </li>
                <li class="m-4">Metaverse</li>
                <li class="m-4">Artificial Intelligence</li>
                <li class="m-4">Augmented and Virtual Reality</li>
                <li class="m-4">Block chain: Decentralized social media</li>
                <li class="m-4">
                  Internet of Things: real-time monitoring of data and insights.
                </li>
                <span class="font-weight-bold d-block mx-4"> Speakers: (Reserved) </span>
                <li class="m-4">
                  <img
                    src="@/assets/Images/SpeakersMain.png"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Steve Bambury</b>,Metaverse, Web3 and XR Consultant
                </li>
                <li class="m-4">
                  <img
                    src="@/assets/Images/Hala Al Zadjali.jpeg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Hala Al Zadjali</b>,Senior Executive of Governance
                </li>
                <li class="m-4">
                  <img
                    src="@/assets/Images/Tazima Al Ghannami- Senior Manager HR Analytics, Omantel.jpeg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Tazima Al Ghannami</b>,Senior Manager, Omantel
                </li>
                <li class="m-4">
                  <img
                    src="@/assets/Images/Amira Al Busaidi.jpeg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1 my-1">Amira AlBusaidi</b>,4IR | Consultant | Training
                  Lead | Metaverse | Entrepreneur | Researcher | Speaker | VR-Healthcare
                  Specialist (TBC)
                </li>
                <li class="m-4">
                  <b class="mx-1">Sumaya Al Kindi</b>: Senior Media & Communications
                  Specialist (TBC)
                </li>
              </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="eventTitle">
              <span>13:00 pm</span>
              <span>Lunch and Networking Break</span>
            </div>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>14:00 pm</span>
                <span
                  >The Social Metaverse: the shift towards immersive social experiences
                </span>
              </div>
              <span
                data-toggle="collapse"
                href="#eventThree"
                role="button"
                aria-expanded="false"
                aria-controls="eventThree"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse" id="eventThree">
              <span>
                <span class="font-weight-bold d-block m-4"> Speakers: </span>
                <li class="m-4">
                  <img
                    src="@/assets/Images/SpeakersMain.png"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Steve Bambury</b>Metaverse, Web3 and XR Consultant
                </li>
              </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>14:30 pm</span>
                <span
                  >Keynote: How to build a mental health oriented social media campaign.
                </span>
              </div>
              <span
                data-toggle="collapse"
                href="#eventFour"
                role="button"
                aria-expanded="false"
                aria-controls="eventFour"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse font-sm-own" id="eventFour">
              <span class="font-weight-bold"> MCEE: Tariq Al Barwani </span>
              <span>
                <span class="font-weight-bold d-block m-4"> Speakers: </span>
                <li class="m-4">
                  <img
                    src="@/assets/Images/Sayyeda Basma AL Said.jpg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">H.H Sayyeda Basma Al Said</b>
                </li>
              </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>15:00 pm</span>
                <span
                  >Keynote: From Web2 to Web3 – how block chain and NFTs will redefine the
                  use of social media.
                </span>
              </div>
              <span
                data-toggle="collapse"
                href="#eventFive"
                role="button"
                aria-expanded="false"
                aria-controls="eventFive"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse font-sm-own" id="eventFive">
              <span class="font-weight-bold"> MCEE: Tariq Al Barwani </span>
              <span>
                <span class="font-weight-bold d-block m-4"> Speakers: </span>
                <li class="m-4">
                  <img
                    src="@/assets/Images/SpeakersMain.png"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Steve Bambury</b>Metaverse, Web3 and XR Consultant
                </li>
              </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>15:30 pm</span>
                <span
                  >Keynote: Data Analytics: evaluating ROI and forecasting performance
                </span>
              </div>
              <span
                data-toggle="collapse"
                href="#eventSix"
                role="button"
                aria-expanded="false"
                aria-controls="eventSix"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse" id="eventSix">
              <span class="d-block mt-4"
                ><b> Mr. Arvindo Shankar</b>: Marketing Director at Tamimah Group</span
              >
            </p>
          </div>
        </div>
      </div>

      <!-- Day Two -->
      <div class="row mt-3" v-if="dayTwo">
        <div class="col-md-10 offset-md-1">
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>09:00 am</span>
                <span>Registration and networking</span>
              </div>
            </div>
          </div>
          <div class="eventHappening">
            <div class="eventTitle">
              <span>10:00 am</span>
              <span>Welcome note - MCEE</span>
            </div>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>10:05 am</span>
                <span
                  >Panel Discussion: The Influencers Talks: The growing importance of
                  influencer marketing
                </span>
              </div>
              <span
                data-toggle="collapse"
                href="#eventEleven"
                role="button"
                aria-expanded="false"
                aria-controls="eventEleven"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse" id="eventEleven">
              <span>
                <span class="font-weight-bold d-block m-4"> Points of Discussion: </span>
                <li class="m-4">
                  The value of influencers in the socio-economic landscape of a country.
                </li>
                <li class="m-4">
                  From quick results to strategizing influencer marketing: how to work
                  with influencers to build long-term strategy for community engagement.
                </li>
                <li class="m-4">
                  Influencer marketing best practices: how to collaborate with influencers
                  to obtain best results for building a strong brand presence.
                </li>
                <!-- <li class="m-4">
                  Advertising and social media: how creativity in curating content is
                  impacting leads acquisition and social media engagement.
                </li> -->
                <span class="font-weight-bold d-block m-4">
                  MCEE: Tariq Al Barwani- Award-Winning Technology Professional &amp;
                  Practical Motivational Speaker
                </span>
                <span class="font-weight-bold d-block mx-4"> Speakers: (Reserved) </span>
                <li class="m-4">
                  <img
                    src="@/assets/Images/Hawra Al Farsi.jpg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Hawra Al Farsi</b>: Influencer, TV Host
                </li>
                <li class="m-4">
                  <img
                    src="@/assets/Images/Taj Noor .jpg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Taj Noor</b>: Influencer, TV & Radio Presenter
                </li>
                <li class="m-4">
                  <img
                    src="@/assets/Images/Ibtihal Al Zadjali 1.jpg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Ibtihal Al Zadjali</b>: (TBC)Influencer, Omani Media
                  Personality
                </li>
                <li class="m-4">
                  <b class="mx-1">Dr. Ahmed Murad</b> Influencer & Speaker: Community
                </li>
              </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>11:05 am</span>
                <span>Morning Break</span>
              </div>
            </div>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>11:30 am</span>
                <span>Panel Discussion: </span>
              </div>
              <span
                data-toggle="collapse"
                href="#eventTwelve"
                role="button"
                aria-expanded="false"
                aria-controls="eventTwelve"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse" id="eventTwelve">
              <span>
                <span class="font-weight-bold d-block m-4">
                  Creative influencing: how content, planning and strategy makes all the
                  difference
                </span>
                <span class="font-weight-bold d-block m-4">
                  MCEE: Tariq Al Barwani- Award-Winning Technology Professional &amp;
                  Practical Motivational Speaker
                </span>
                <span class="font-weight-bold d-block mx-4"> Speakers: (Reserved) </span>
                <li class="m-4">
                  <img
                    src="@/assets/Images/Imad Al Habsi.jpg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Imad Al Habsi</b> | Video Creator
                </li>
                <li class="m-4">
                  <img
                    src="@/assets/Images/WhatsApp Image 2022-04-21 at 12.21.21 PM.jpeg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1"> Rehab Ibrahim</b> : Founder & MD at Space| TEDx Speaker
                </li>
                <li class="m-4">
                  <img
                    src="@/assets/Images/Harith AlShereiqi.jpeg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Harith AlShereiqi</b> Adventurer| Travel content creator
                </li>
              </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>12:30 pm</span>
                <span>Morning Photo booth and Networking with influencers </span>
              </div>
            </div>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>13:00 pm</span>
                <span>Lunch Break and networking</span>
              </div>
            </div>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>14:00 pm</span>
                <span
                  >Keynote: How the landscape of brands is changing drastically with all
                  the new possibilities that spatial computing offers
                </span>
              </div>
              <span
                data-toggle="collapse"
                href="#eventThirteen"
                role="button"
                aria-expanded="false"
                aria-controls="eventThirteen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse" id="eventThirteen">
              <span>
                <span class="font-weight-bold d-block m-4">
                  A showcase of various brands capitalizing on immersive technologies to
                  market, sell and offer a new paradigm for product interaction. MCee:
                  Tariq Al-Barwani
                </span>
                <!-- <li class="m-4">
                  Advertising and social media: how creativity in curating content is
                  impacting leads acquisition and social media engagement.
                </li> -->
                <span class="font-weight-bold d-block mx-4"> Speakers: (Reserved) </span>
                <li class="m-4">
                  <img
                    src="@/assets/Images/Maged Farrag GAT2.jpg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Maged Farrag</b>: Digital media evangelist
                </li>
              </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>14:30 pm</span>
                <span
                  >Harnessing the impact of influencer marketing in tourism by meaningful
                  and authentic content
                </span>
              </div>
              <span
                data-toggle="collapse"
                href="#eventFourteen"
                role="button"
                aria-expanded="false"
                aria-controls="eventFourteen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse" id="eventFourteen">
              <span>
                <span class="font-weight-bold d-block">
                  <li class="m-4">
                    <img
                      src="@/assets/Images/Tariq Al Barwani-Award-Winning Technology Professional & Practical Motivational Speaker .jpeg"
                      style="width: 50px; border-radius: 50%"
                      alt=""
                    />
                    <b class="mx-1">MCee: Tariq Al-Barwani</b>
                  </li>
                </span>
                <!-- <li class="m-4">
                  Advertising and social media: how creativity in curating content is
                  impacting leads acquisition and social media engagement.
                </li> -->
                <span class="font-weight-bold d-block mx-4"> Speakers: (Reserved) </span>
                <li class="m-4">
                  <img
                    src="@/assets/Images/Harith AlShereiqi.jpeg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Harith AlShereiqi</b> Adventurer| Travel content creator
                </li>
              </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>15:00 pm</span>
                <span
                  >Keynote: Boosting social media profiles by quality video production
                </span>
              </div>
              <span
                data-toggle="collapse"
                href="#eventFiftheen"
                role="button"
                aria-expanded="false"
                aria-controls="eventFiftheen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse" id="eventFiftheen">
              <span>
                <span class="font-weight-bold d-block">
                  <li class="m-4">
                    <img
                      src="@/assets/Images/Tariq Al Barwani-Award-Winning Technology Professional & Practical Motivational Speaker .jpeg"
                      style="width: 50px; border-radius: 50%"
                      alt=""
                    />
                    <b class="mx-1">MCee: Tariq Al-Barwani</b>
                  </li>
                </span>
                <!-- <li class="m-4">
                  Advertising and social media: how creativity in curating content is
                  impacting leads acquisition and social media engagement.
                </li> -->
                <span class="font-weight-bold d-block mx-4"> Speakers: (Reserved) </span>
                <li class="m-4">
                  <img
                    src="@/assets/Images/Imad Al Habsi.jpg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Imad Al Habsi</b> | Video Creator
                </li>
              </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>15:30 pm</span>
                <span>Metaverse in Education </span>
              </div>
              <span
                data-toggle="collapse"
                href="#hoseintwo"
                role="button"
                aria-expanded="false"
                aria-controls="hoseintwo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse" id="hoseintwo">
              <span>
                <span class="font-weight-bold d-block">
                  <li class="m-4">
                    <img
                      src="@/assets/Images/Tariq Al Barwani-Award-Winning Technology Professional & Practical Motivational Speaker .jpeg"
                      style="width: 50px; border-radius: 50%"
                      alt=""
                    />
                    <b class="mx-1">MCee: Tariq Al-Barwani</b>
                  </li>
                </span>
                <!-- <li class="m-4">
                  Advertising and social media: how creativity in curating content is
                  impacting leads acquisition and social media engagement.
                </li> -->
                <span class="font-weight-bold d-block mx-4"> Speakers: (Reserved) </span>
                <li class="m-4">
                  <img
                    src="@/assets/Images/SpeakersMain.png"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1">Steve Bambury</b>,Metaverse, Web3 and XR Consultant
                </li>
              </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>16:00 pm</span>
                <span>The Power of Words </span>
              </div>
              <span
                data-toggle="collapse"
                href="#hoseinthree"
                role="button"
                aria-expanded="false"
                aria-controls="hoseinthree"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse" id="hoseinthree">
              <span>
                <span class="font-weight-bold d-block">
                  <li class="m-4">
                    <img
                      src="@/assets/Images/Tariq Al Barwani-Award-Winning Technology Professional & Practical Motivational Speaker .jpeg"
                      style="width: 50px; border-radius: 50%"
                      alt=""
                    />
                    <b class="mx-1">MCee: Tariq Al-Barwani</b>
                  </li>
                </span>
                <!-- <li class="m-4">
                  Advertising and social media: how creativity in curating content is
                  impacting leads acquisition and social media engagement.
                </li> -->
                <span class="font-weight-bold d-block mx-4"> Speakers: (Reserved) </span>
                <li class="m-4">
                  <img
                    src="@/assets/Images/WhatsApp Image 2022-04-21 at 12.21.21 PM.jpeg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1"> Rehab Ibrahim</b> : Founder & MD at Space| TEDx Speaker
                </li>
              </span>
            </p>
          </div>
          <div class="eventHappening">
            <div class="d-flex align-items-center justify-content-between">
              <div class="eventTitle">
                <span>16:30 pm</span>
                <span>Keynote: Metaverse in Healthcare </span>
              </div>
              <span
                data-toggle="collapse"
                href="#hoseinfours"
                role="button"
                aria-expanded="false"
                aria-controls="hoseinfours"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
              </span>
            </div>
            <p class="collapse" id="hoseinfours">
              <span>
                <span class="font-weight-bold d-block">
                  <li class="m-4">
                    <img
                      src="@/assets/Images/Tariq Al Barwani-Award-Winning Technology Professional & Practical Motivational Speaker .jpeg"
                      style="width: 50px; border-radius: 50%"
                      alt=""
                    />
                    <b class="mx-1">MCee: Tariq Al-Barwani</b>
                  </li>
                </span>
                <!-- <li class="m-4">
                  Advertising and social media: how creativity in curating content is
                  impacting leads acquisition and social media engagement.
                </li> -->
                <span class="font-weight-bold d-block mx-4"> Speakers: (Reserved) </span>
                <li class="m-4">
                  <img
                    src="@/assets/Images/Amira Al Busaidi.jpeg"
                    style="width: 50px; border-radius: 50%"
                    alt=""
                  />
                  <b class="mx-1 my-1">Amira AlBusaidi</b>,4IR | Consultant | Training
                  Lead | Metaverse | Entrepreneur | Researcher | Speaker | VR-Healthcare
                  Specialist (TBC)
                </li>
              </span>
            </p>
          </div>
        </div>
      </div>

      </div>
    </section>
    <FormContacts></FormContacts>
    <FooterApp></FooterApp>
  </div>
</template>

<script>
export default {
  name: "AgendaView",
  data() {
    return {
      dayOne: true,
      dayTwo: false,
    };
  },
  methods: {
    dayOneClick() {
      this.dayOne = true;
      this.dayTwo = false;
    },
    dayTwoClick() {
      this.dayOne = false;
      this.dayTwo = true;
    },
  },
  mounted() {
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
  },
};
</script>

<style scoped>
#agenda {
  padding: 5rem;
  margin: 5rem 0 0 0;
}
.happeningBtn button {
  margin: 0.1rem 1rem;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 15px;
}

.happeningBtn button:nth-child(1) {
  background-color: #e6007e;
}

.happeningBtn button:nth-child(2) {
  background-color: #00aeef;
}

.eventHappening {
  border: 1px solid #e6007e;
  background-color: #fff;
  color: #333;
  border-radius: 5px;
  padding: 1rem;
  margin: 0.8rem 0;
}

.eventHappening .eventTitle span:nth-child(2) {
  margin: 0 0.4rem;
  padding: 0 1rem;
  border-left: 3px solid gray;
  font-size: 13px;
}

.font-sm-own {
  font-size: 14px;
  margin: 1rem 0 0 0 !important;
}

@media screen and (max-width: 1000px) {
  #agenda {
    padding: 2rem;
  }
}
</style>
