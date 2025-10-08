// Styles
import * as Styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cart-item/index";
import { removeAllProducts } from "../../redux/cart/actions";
import Button from 'react-bootstrap/Button';
import { selectProductsTotalPrice } from "../../redux/cart/cart.selector";



const Cart = ({ isVisible, setIsVisible }) => {
  const dispatch = useDispatch();

  const handleEscapeAreaClick = () => setIsVisible(false);
  const handleClearCart = () => {
    dispatch(removeAllProducts());
  };


  const products = useSelector((state) => state.cart?.products ?? []);
  
  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        <Styles.CartTotal>Valor: R${productsTotalPrice}</Styles.CartTotal>
        <Button variant='outline-secondary' onClick={handleClearCart}>Limpar Carrinho</Button>
                
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
