import { ContanierSidebar, CSidebar, ProductCheckout, EndSidebar, FinalPrice, IconSidebar } from "./SidebarCSS";
import ItemCheckout from "../ItemCheckout/ItemCheckout";
import React from "react";
import { useAppSelector } from "../../context/hooks";
import { getTotalPrice } from "../../counter/cartSlices";
import { formatPrice } from "../../utils/formatPrice";
import { SidebarProps } from "../Header/Header";

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {

    const totalPrice = useAppSelector(getTotalPrice);
    const products = useAppSelector((state) => state.cart);

    return (
        <ContanierSidebar>
            <CSidebar>
                <IconSidebar>
                    <p>Carrinho de compras</p>
                    <p className="close" onClick={onClose}>X</p>
                </IconSidebar>
                <ProductCheckout>
                    {
                        products.map((product) => (
                            <ItemCheckout key={product.id} id={product.id} quantity={product.quantity} name={product.name} photo={product.photo} price={product.price} />
                        ))
                    }
                </ProductCheckout>
                <FinalPrice>
                    <p>Total:</p>
                    <p>{formatPrice(String(totalPrice))}</p>
                </FinalPrice>
                <EndSidebar>
                    <button onClick={() => {}}>Finalizar Compra!</button>
                </EndSidebar>
            </CSidebar>
        </ContanierSidebar>
    );
}

export default Sidebar;