import MyNavbar from './components/MyNavbar'
import Hero from './components/Hero';
import Tabs from './components/Tabs';
import Specials from './components/Specials';
import BestSellers from './components/BestSellers';
import RecentlyViewed from './components/RecentlyViewed';
import Footer from './components/Footer';
import Links from './utilityFunction/Links';
import TabLinks from './utilityFunction/TabLinks';
import { navigationLinks } from './navigationLinks';
import { tabsData } from './tabsData';

function HomePage (){

  let navbarLinks = Links(navigationLinks);
  let tabsLinks = TabLinks(tabsData);

    return(
        <div>
          <MyNavbar
          links={navbarLinks}
          />
          <Hero />
          <Tabs
          tabs={tabsLinks}        
          />
          <Specials />
          <BestSellers />
          <RecentlyViewed />
          <Footer />
        </div>        
    )
} 

export default HomePage;