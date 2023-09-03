import { Navbar } from '../src/Components'
import { LandingPage, NewsFeedPage, FeaturedPage, AboutPage, ContactPage, ServicePage, TestimonyPage } from '../src/pages/Site'

function App() {
  return (
    <div className="App w-auto">
      <Navbar />
      {/* <LandingPage /> */}
      {/* <ContactPage /> */}
      {/* <AboutPage /> */}
      {/* <ServicePage /> */}
      {/* <TestimonyPage /> */}
      {/* <NewsFeedPage /> */}
      <FeaturedPage />
    </div>
  );
}

export default App;
