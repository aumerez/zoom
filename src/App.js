import "./App.css";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LogoTitle from "./components/home/LogoTitle";
import TextSection from "./components/home/TextSection";
import CardTiers from "./components/home/CardTiers";
import Partnership from "./components/home/Partnership";
import TheTeam from "./components/home/TheTeam";




const textSections1 = [
  {
    title: "Our Mission",
    body:
      "DPC strives to be a digital player card platform for all athletes of all genders and sports.\n" +
      "DPC through its partnerships with athletes and entities, will grow its community into one of the largest sports communities in the world.",
    anchor: "mission",
  },
  {
    title: "What You Get",
    body:
      "When purchasing a DPC card you enter an exclusive community of card holders.\n" +
      "Card holders will receive not only an exclusive card as unique memorabilia of their athletes, but also owning a DPC card unlocks long-term benefits and amazing giveaways.\n" +
      "Each card tier will have different incentives, giveaways, and opportunities at real-life engagements with the athletes you hold. The higher the card tier, the better rewards you can receive!",
    anchor: "get",
  },
  {
    title: "What You Can Do On DPC",
    body: "You will be able to BUY, SELL, TRADE and HODL your NFT's on the most dynamic NFT ecosystem for sports enthusiast and NFT collectors!",
    anchor: "do",
  }
];

const textSections2 = [
  {
    title: "Business Opportunity",
    body:
      "NIL: Name Image and Likeness\n" +
      "We are creating business opportunities for all athletes to monetize on their\n" +
      "Name, Image and Likeness with the click of a button.\n" +
      "For further information please email us at:\n" +
      "dpardo@dpc-nft.com",
    anchor: "business",
  },
];

function App() {
  return (
    <><Box
     
      sx={{
        minHeight: "100vh",
      }}
    >
      <Header />
      <CssBaseline />
      <LogoTitle />
      {textSections1.map((element, index) => {
        return (
          <TextSection
            id={index}
            title={element.title}
            body={element.body}
          ></TextSection>
        );
      })}
      <CardTiers />
      {textSections2.map((element, index) => {
        return (
          <TextSection
            id={index}
            title={element.title}
            body={element.body}
          ></TextSection>
        );
      })}
      {/*<TheTeam />*/}
      <Partnership />
      <Footer />
    </Box></>
  );
}

export default App;
