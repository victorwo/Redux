import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../redux/user/action";

import Cart from "../cart/index";
import * as Styles from "./styles";
import { selectProductsCount } from "../../redux/cart/cart.selector";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector(state => state.user)
  const products = useSelector(state => state.cart?.products ?? []);
  
  const productsCount = useSelector(selectProductsCount)

  const dispatch = useDispatch()

  

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({nome: 'Victor', email:'victorwilson2016@gmail.com'}))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? <div onClick={handleLogoutClick}>Sair</div> : (<div onClick={handleLoginClick}>Login</div>)}

        <div onClick={handleCartClick}>Carrinho ({productsCount}) </div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
