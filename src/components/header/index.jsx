import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import userActionTypes from "../../redux/user/action-types";
import { loginUser, logoutUser } from "../../redux/user/action";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { act } from "react";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector(state => state.user)
  const dispatch = useDispatch()
  console.log(currentUser)

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

        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
