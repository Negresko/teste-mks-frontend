import { ButtonItem, ContainerCard, DescriptionItem, ItemImage, ItemTitle } from './CardItemCSS';
import { IProduct } from '../../interfaces/interface';
import { formatPrice } from '../../utils/formatPrice';
import { addToCart } from '../../slices/cartSlices';
import { useState } from 'react';
import logoCompra from '../../icons/path.svg';
import { useAppDispatch } from '../../context/hooks';
import { Shimmer } from 'react-shimmer';
import { useEffect } from 'react';

const CardItem: React.FC<IProduct> = (product) => {

    const [isLoading, setIsLoading] = useState(false);
    const { name, photo, description, price } = product;
    const dispatch = useAppDispatch();
    const addToCardHandler = (product: IProduct) => dispatch(addToCart({...product}));

    useEffect(() => {
        if(product){
            setTimeout(() => {
                setIsLoading(true);
            }, 1000);
        }
    }, [])

    

    return (
        <ContainerCard>
            <ItemImage>
                {isLoading ? <img src={photo} alt='' /> : <Shimmer width={130} height={130} />}
            </ItemImage>
            <ItemTitle>
                {isLoading ? <h1>{name}</h1> : <Shimmer width={115} height={40} />}
                {isLoading ? <span>{formatPrice(price)}</span> : <Shimmer width={75} height={40} />}
            </ItemTitle>
            <DescriptionItem>
                {isLoading ? description : <Shimmer width={200} height={50} />}
            </DescriptionItem>
            {isLoading ? <ButtonItem onClick={() => addToCardHandler(product)}>
                <img src={logoCompra} alt="" /><p>COMPRAR</p>
            </ButtonItem> : <Shimmer width={215} height={35} />}
        </ContainerCard>
    );
}

export default CardItem;