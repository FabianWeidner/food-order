import React, { Fragment } from 'react';
import classes from './Header.module.css';
import mainImage from '../../assets/stefan-vladimirov-Q_Moi2xjieU-unsplash.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>LikeHomeMade</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.main_image}>
        <img src={mainImage} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
