import React, { useCallback } from 'react'
import styled from 'styled-components';
import useCartStore from '../stores/cartStore';
import useProductStore from '../stores/productStore';

export const importImage = (name) => {
    const path = `${process.env.PUBLIC_URL}/assets/${name}.png`;
    return path;
}


const ProductList = () => {
    const {addItem} = useCartStore();

    const {
      products,
      sortByPriceAsc,
      sortByPriceDesc,  
    } = useProductStore();

    const handleSortChange = (e) => {
    if (e.target.value === 'low') 
      sortByPriceAsc();
    else if (e.target.value === 'high') 
      sortByPriceDesc();
}

    return (
    <ProductListContainer>
      <SelectContainer onChange={handleSortChange}>
        <option value="low">낮은 가격순</option>
        <option value="high">높은 가격순</option>
      </SelectContainer>
      <ProductGrid>
        {products.map((product, index) => (
          <ProductItem key={index}>
            <ProductImage
              src={importImage(product.name)}
              alt={product.name}
            />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
            <AddButton onClick={() => addItem(product)}>카트에 추가</AddButton>
          </ProductItem>
        ))}
      </ProductGrid>
    </ProductListContainer>
  );
};

export default ProductList


const ProductListContainer = styled.div`
  width: calc(100% - 350px);
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 5px;
  list-style: none;
  padding: 0;
  width: 100%;
  justify-content: center;
  max-width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 280px);
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 280px);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 280px);
  }
`;

const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 280px;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const ProductName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 8px;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: #555;
  margin: 0 0 10px;
`;

const AddButton = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #218838;
  }
`;

const SelectContainer = styled.select`
  border-radius: 6px;
  padding: 5px;
  cursor: pointer;
  width: 100px;
  margin-left: 170px;
}
`;
