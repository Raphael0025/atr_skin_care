import { Navbar } from '../src/Components'
import { LandingPage, NewsFeedPage, AboutPage, ContactPage } from '../src/pages/Site'

function App() {
  return (
    <div className="App w-auto">
      <Navbar />
      {/* <LandingPage /> */}
      {/* <ContactPage /> */}
      <AboutPage />
    </div>
  );
}

export default App;
