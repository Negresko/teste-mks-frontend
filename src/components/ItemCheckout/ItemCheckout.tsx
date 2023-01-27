import { AmountItem, CheckoutSidebar, DescriptionCheckout, ImageCheckout, PriceItem, QtdItem, ContainerCheckout, ButtonClose } from "./ItemCheckoutCSS";

import { IProduct } from "../../interfaces/interface";
import { useAppDispatch } from "../../context/hooks";

import { decrementToCart, incrementToCart, removeToCart } from '../../counter/cartSlices';
import { formatPrice } from "../../utils/formatPrice";

const ItemCheckout: React.FC<IProduct> = (product) => {

    const dispatch = useAppDispatch();

    const removeToCartHandler = (id: string) => dispatch(removeToCart(id));
    const incrementToCartHandler = (id: string) => dispatch(incrementToCart(id));
    const decrementToCartHandler = (id: string) => dispatch(decrementToCart(id));

    return (
        <CheckoutSidebar>
            <ContainerCheckout key={product.id}>
                <ImageCheckout>
                    <img src={product.photo} alt="" />
                </ImageCheckout>
                <DescriptionCheckout>
                    <span>{product.name}</span>
                </DescriptionCheckout>
                <QtdItem>
                    <p>Qtd:</p>
                </QtdItem>
                <AmountItem>
                    <span onClick={() => decrementToCartHandler(String(product.id))}>-</span>
                    <span className="numberItem">{product.quantity}</span>
                    <span onClick={() => incrementToCartHandler(String(product.id))}>+</span>
                </AmountItem>
                <PriceItem>
                    <p>{formatPrice(String(product.price))}</p>
                </PriceItem>
                <ButtonClose>
                    <p className="close" onClick={() => removeToCartHandler(String(product.id))}>X</p>
                </ButtonClose>
            </ContainerCheckout>
        </CheckoutSidebar>
    )
}

export default ItemCheckout;