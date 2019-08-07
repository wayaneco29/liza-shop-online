import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Link } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { selectUserProfile } from '../../redux/user/user.selector';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { toggleComponent } from '../../redux/cart-items/cart-items.actions';
import { selectCartCollectionsTotal } from '../../redux/cart-items/cart-items.selector';

import { FaOpencart } from 'react-icons/fa';

import './navigation.styles.scss';

class NavigationBar extends React.Component {
    constructor() {
        super();

        this.state = {
            toggleNav: 'hidden',
            hamburger: 'normal'
        }
    }
    toggleNav = () => {
        const toggleHandler = this.state.toggleNav == 'hidden' ? 'show' : 'hidden';
        const hamburgerHandler = this.state.hamburger == 'normal' ? 'animate' : 'normal';
        this.setState({
            toggleNav: toggleHandler,
            hamburger: hamburgerHandler
        })
    }

    render() {
        const { toggleNav, hamburger } = this.state;
        const { totalItems, currentUser, dispatch } = this.props;
        return (
            <nav className="navbar">
                <div className="nav-container">
                    <Link to='/' className="navbar-logo">
                        <div className="circle"></div>
                        <div className="text">Li-Shop</div>
                    </Link>

                    <div className={`ul-container ${toggleNav}`} onClick={this.toggleNav}>
                        <ul className="nav">
                            <Link to='/' className="nav-links">HOME</Link>
                            <Link to='/shop' className="nav-links">SHOP</Link>
                            <Link to='/about' className="nav-links">ABOUT</Link>
                            {
                                currentUser ?
                                    <div className="nav-links" onClick={() => auth.signOut()}>LOGOUT</div>
                                    :
                                    <Link onClick={signInWithGoogle} to='/' className="nav-links">LOGIN</Link>
                            }
                        </ul>
                    </div>
                    <div className="cart-logo" onClick={() => dispatch(toggleComponent())}>
                        <FaOpencart size={43} />
                        <span className="cart-count">{totalItems}</span>
                    </div>

                    <div className="hamburger" onClick={this.toggleNav}>
                        <span className={hamburger}></span>
                        <span className={hamburger}></span>
                        <span className={hamburger}></span>
                        <span className={hamburger}></span>
                    </div>
                    <CartDropdown />
                </div>
            </nav>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    totalItems: selectCartCollectionsTotal,
    currentUser: selectUserProfile
})

export default connect(mapStateToProps)(NavigationBar);