import { ContanierSidebar, ContentCheckout, ProductCheckout, EndSidebar, FinalPrice, IconSidebar } from "./SidebarCSS";
import ItemCheckout from "../ItemCheckout/ItemCheckout";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../context/hooks";
import { getTotalPrice, reset } from "../../slices/cartSlices";
import { formatPrice } from "../../utils/formatPrice";
import { SidebarProps } from "../Header/Header";
import { IProduct } from "../../interfaces/interface";

const Sidebar: React.FC<SidebarProps> = ({ onClose }, product: IProduct) => {

    const totalPrice = useAppSelector(getTotalPrice);
    const products = useAppSelector((state) => state.cart);

    const dispatch = useAppDispatch();
    
    const resetTest = (product: IProduct) => dispatch(reset(product));

    return (
        <ContanierSidebar>
            <ContentCheckout>
                <IconSidebar>
                    <p>Carrinho de compras</p>
                    <p className="close" onClick={onClose}>X</p>
                </IconSidebar>
                <ProductCheckout>
                    { totalPrice > 0 ?
                        products.map((product) => (
                            <ItemCheckout key={product.id} id={product.id} quantity={product.quantity} name={product.name} photo={product.photo} price={product.price} />
                        )) : <p>Seu carrinho esta vazio, compre alguma coisa.</p>
                    }
                </ProductCheckout>
                <FinalPrice>
                    <p>Total:</p>
                    <p>{formatPrice(String(totalPrice))}</p>
                </FinalPrice>
                <EndSidebar>
                    {totalPrice === 0
                        ? <button disabled>Começe a comprar</button>
                        : <button onClick={() => resetTest((product))}>Finalizar Compra!</button>
                    }
                </EndSidebar>
            </ContentCheckout>
        </ContanierSidebar>
    );
}

export default Sidebar;