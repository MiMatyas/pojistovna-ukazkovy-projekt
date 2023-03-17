import './App.css';
import User from "./components/User";
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import UserDetails from './components/UserDetails';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';
import Insurance from './components/Insurance';
import InsuranceDetails from './components/InsuranceDetails';
import InsuranceCreate from './components/InsuranceCreate';
import InsuranceEdit from './components/InsuranceEdit';
import Index from './components/Index';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import UserInsuranciesDetails from './components/UserInsuranciesDetails';





function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact component={Index}/>
          <Route path="/users" exact component={User}/>
          <Route path="/user/create" exact component={UserCreate}/>
          <Route path="/user/:id" exact component={UserDetails}/>
          <Route path="/user/edit/:id" exact component={UserEdit}/>
          <Route path="/Insurencies" exact component={Insurance}/>
          <Route path="/insurance/:id" exact component={InsuranceDetails}/>
          <Route path="/insurance/create/:userId" exact component={InsuranceCreate}/>
          <Route path="/insurance/edit/:id" exact component={InsuranceEdit}/>

          <Route path="/user/insurancies/:id/:name/:surname" exact component={UserInsuranciesDetails}/>


          
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
