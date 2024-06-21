import Header from "../../home/Header/Header";
import Hero from "../../home/Hero/Hero";
import AboutUs from "../../home/AboutUs/AboutUs";
import Choose from "../../home/Choose/Choose";
import Service from "../../home/Service/Service";
import Stats from "../../home/Stats/Stats";
import Team from "../../home/Team/Team";
import Features from "../../home/Features/Features";
import ClientFeedback from "../../home/ClientFeedback/ClientFeedback";
import Footer from "../../home/Footer/Footer";

function HomePage() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Choose></Choose>
      <Service></Service>
      <Stats></Stats>
      <Team></Team>
      <Features></Features>
      <ClientFeedback></ClientFeedback>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
