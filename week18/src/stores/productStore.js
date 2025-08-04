import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useProductStore = create(
  persist(
    (set) => ({
      products: [
        { name: '사탕', price: 2000 },
        { name: '젤리', price: 1000 },
        { name: '초콜렛', price: 2500 },
        { name: '쿠키', price: 3500 },
        { name: '마카롱', price: 4000 },
        { name: '아이스크림', price: 990 },
        { name: '도넛', price: 5000 },
        { name: '엽떡', price: 14000 },
        { name: '양꼬치', price: 25000 },
      ],

      sortByPriceAsc: () => {
        set((state) => ({
          products: [...state.products].sort((a, b) => a.price - b.price),
        }));
      },

      sortByPriceDesc: () => {
        set((state) => ({
          products: [...state.products].sort((a, b) => b.price - a.price),
        }));
      },
    }),
    {
      name: 'product-storage',
    }
  )
);

export default useProductStore;
