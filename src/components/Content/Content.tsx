import { useState, useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import { ContainerContent, SpaceContent } from './ContentCSS';
import axios from '../../connection/axios';
import { IProduct } from '../../interfaces/interface';

const Content = () => {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    axios.get('/products', {
      params: {
        page: 1,
        rows: 50,
        sortBy: 'id',
        orderBy: 'DESC',
      }

    }).then(response => {
      setProducts(response.data.products);
    })
  }, [products]);

  return (
    <ContainerContent>
      <SpaceContent >

        {
          products.map((product) =>
            <CardItem key={product.id} id={product.id} name={product.name} quantity={1} photo={product.photo} description={product.description} price={product.price} />
          )
        }

      </SpaceContent>
    </ContainerContent>
  );
}

export default Content;