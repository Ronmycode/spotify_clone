import NabBar from "../Components/NabBar.jsx";
import BannerAdd from "../Components/BannerAdd.jsx";
import "../Components/NabBar.css";
import "../Components/BannerAdd.css";
import CardList from "../Components/CardList.jsx";
import popularRadio from "../assets/popularRadio.json";
import "../Components/CardList.css";
import spotifyPlaylists from "../assets/spotifyPlaylists.json";
import featuredCharts from "../assets/featuredCharts.json";
import FooterLinks from "../Components/FooterLinks.jsx";
import "../Components/FooterLinks.css";
import ftrCompany from "../assets/ftrCompany.json";
import ftrSpotifyPlans from "../assets/ftrSpotifyPlans.json";
import FtrSocials from "../Components/FtrSocial.jsx";
import "../Components/FtrSocial.css";
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
