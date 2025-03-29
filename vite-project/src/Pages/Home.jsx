import "./Home.page.css";
import NabBar from "../Components/NabBar.jsx";
import BannerAdd from "../Components/BannerAdd.jsx";
import CardList from "../Components/CardList.jsx";
import popularRadio from "../assets/popularRadio.json";
import spotifyPlaylists from "../assets/spotifyPlaylists.json";
import featuredCharts from "../assets/featuredCharts.json";
import FooterLinks from "../Components/FooterLinks.jsx";
import ftrCompany from "../assets/ftrCompany.json";
import ftrSpotifyPlans from "../assets/ftrSpotifyPlans.json";
import FtrSocials from "../Components/FtrSocial.jsx";

function Home() {
  return (
    <div>
      <NabBar />
      <BannerAdd />
      <CardList listTitle={popularRadio.listTitle} list={popularRadio.list} />
      <CardList
        listTitle={featuredCharts.listTitle}
        list={featuredCharts.list}
      />
      <CardList
        listTitle={spotifyPlaylists.listTitle}
        list={spotifyPlaylists.list}
      />
      <FooterLinks linkTitle={ftrCompany.linksTitle} links={ftrCompany.links} />
      <FooterLinks
        linkTitle={ftrSpotifyPlans.linksTitle}
        links={ftrSpotifyPlans.links}
      />
      <FtrSocials />
    </div>
  );
}

export default Home;
