import { useContext } from 'react';
import { CartContext } from '../../../CartContext';
import { Product } from '../../../types/fetch';
import AddCartButton from './AddCartButton/AddCartButton';
import * as S from './ProductCard.styled';
import Stepper from './Stepper/Stepper';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addProductToCart, patchToRemoveCart } = useContext(CartContext);

  return (
    <S.ProductCardContainer>
      <S.ProductImage src={product.imageUrl} />
      <S.ContentWrapper>
        <S.InfoWrapper>
          <S.ProductName>{product.name}</S.ProductName>
          <S.ProductPrice>{product.price.toLocaleString()}원</S.ProductPrice>
        </S.InfoWrapper>

        <S.ButtonContainer>
          <AddCartButton
            id={product.id}
            onAddClick={() => {
              addProductToCart(product.id);
            }}
            onDeleteClick={() => {
              patchToRemoveCart(product.id);
            }}
          />
          <Stepper />
        </S.ButtonContainer>
      </S.ContentWrapper>
    </S.ProductCardContainer>
  );
};

export default ProductCard;
