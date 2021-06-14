import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import ProjectHome from './Pages/Projects/Projects';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/Header/Header.css';
import '../node_modules/bootstrap/js/dist/collapse';
import Company from './Pages/Company/Company';
import Offerts from './Pages/Offers/Offers';
import Contact from './Pages/Contact/Contact';
import Page404 from './Pages/404/Page404';



function App() {

  const content = (
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path="/offers" component={Offerts} />
      <Route path="/projects" component={ProjectHome} />
      <Route path="/about" component={Company} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  );
  const footer = <Footer />

  return (
    <>
      <Router>
        <Layout
          content={content}
          footer={footer}
        />
      </Router>
    </>
  )
}

export default App;