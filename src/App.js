import './assets/reset.css';
import './assets/App.scss';
import Header from './components/organisms/Header'
import FirstView from './components/organisms/FirstView'
import Profile from './components/organisms/Profile'
import Work from './components/organisms/Work'
import Contact from './components/organisms/Contact'
import Footer from './components/organisms/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <FirstView />
      <Profile />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
