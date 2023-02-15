import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World,} from '../sections';
import Quarterone from '../components/Quarterone';
const Page = () => (
  <div className="bg-green-100 overflow-x-hidden  overflow-y-hidden">
    <Navbar />
    <Hero />
    <About />

<Quarterone />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
