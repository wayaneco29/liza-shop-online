import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, firestore, createUser, getAllCartItems } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { addItem } from './redux/cart-items/cart-items.actions';

import NavigationBar from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';
import Collection from './components/collection/collection.component';
import About from './components/about/about.component';
import CollectionPage from './pages/collection/collection.component';
import Checkout from './components/checkout/checkout.component';
import Footer from './components/footer/footer.component';

import './App.css';

class App extends Component {


  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser, addItem } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const cartItemsSnapshot = await getAllCartItems(userAuth.uid);
        cartItemsSnapshot.onSnapshot(async(snapshot) => {
          // const data = snapshot.docs.map(snapshot => snapshot.data())
          const req1 = await firestore.collection(`users/${userAuth.uid}/cartItems`);
          const req2 = await req1.get()
          const data1 = await req2.docs.map( data => data.data())
          console.log(data1)
          addItem(data1)
        })
        const userRef = await createUser(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }

      return setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={Collection} />
            <Route path='/shop/:collectionId' component={CollectionPage} />
            <Route path='/about' component={About} />
            <Route path='/checkout' component={Checkout} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: userAuth => dispatch(setCurrentUser(userAuth)),
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(App);
