import React from "react";
import HomePage from "./components/pages/homepage/homepage";
import HatsPage from "./components/pages/hats/hats";
import ClothesPage from "./components/pages/clothes/clothes";
import ShoesPage from "./components/pages/shoes/shoes";
import MensPage from "./components/pages/mens/mens";
import WomensPage from "./components/pages/womens/womens";
import ShopPage from "./components/pages/shoppage/shoppage";
import Header from "./components/header/header";
import MemberForm from "./components/member/memberpage";
import { Route, Switch } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            }
          );
          console.log(this.state)
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/shop" component={ShopPage} />
          <Route exact={true} path="/member" component={MemberForm} />
          {/* <Route exact={true} path="/shop/hats" component = {HatsPage} />
        <Route exact={true} path="/shop/clothes" component = {ClothesPage} />
        <Route exact={true} path="/shop/shoes" component = {ShoesPage} />
        <Route exact={true} path="/shop/mens" component = {MensPage} />
        <Route exact={true} path="/shop/womens" component = {WomensPage} />
        <Route exact={true} path="/shop/hats/:prodId" component = {Product} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
