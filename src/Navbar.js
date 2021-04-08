import React from 'react';

const Navbar = (props) => {
      return (
          <div style = {styles.nav}>
              <div style = {styles.cartIconContainer}>
                  <img style = {styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/3144/3144456.svg?token=exp=1617825461~hmac=7dc417a954845feab6e0911b186b7e19"
                  alt="Cart Image" ></img>
                  <span style = {styles.cartCount}>{props.count}</span>
              </div>
          </div>
      )
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
};

export default Navbar;