import { Navbar } from '../src/Components'
import { LandingPage, NewsFeedPage, AboutPage, ContactPage, ServicePage } from '../src/pages/Site'

function App() {
  return (
    <div className="App w-auto">
      <Navbar />
      {/* <LandingPage /> */}
      {/* <ContactPage /> */}
      {/* <AboutPage /> */}
      <ServicePage />
    </div>
  );
}

export default App;
