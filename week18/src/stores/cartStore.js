import {create} from 'zustand';
import {persist} from 'zustand/middleware';

const useCartStore = create(
    persist(
    (set,get) => ({
        cartItems: [],
        discount: 0,
        loading: false,

        addItem: (product) => { // 새 상품을 추가하는 경우는 전체 상품 정보 필요
            set((state) => {
                const existingItem = state.cartItems.find(
                    (item) => item.name === product.name && item.price === product.price
                );
                if (existingItem) { // 이미 있는 상품이면 수량 증가 
                    return{
                        cartItems : state.cartItems.map((item) =>
                        item.name === product.name && item.price === product.price
                        ? { ...item, quantity: item.quantity + 1} : item
                    ),
                    };
                }
                return { // 없는 상품이면 장바구니에 추가
                    cartItems: [...state.cartItems, {...product, id: Date.now(), quantity:1, checked: true}],
                };
            });
        },

        addAllItem: (product) => {
            set((state) => {
                return {
                    cartItems : state.cartItems.map(item=>({
                        ...item,
                        checked: true,
                    })),
                };
            });
        },

        removeItem: (id) => // 상품이 이미 장바구니에 추가되어있는 경우 구별할 수 있는 id만 있으면 충분
            set((state) => ({
                cartItems : state.cartItems.filter((item) => item.id !==id),
            })),

        removeAllItem: (id) =>{
            set((state) => {
                return {
                    cartItems : state.cartItems.map(item=>({
                    ...item,
                    checked: false,
                })),
            };
        });
        },
        
        updateQuantity: (id, quantity) => 
            set((state) => ({
                cartItems: state.cartItems.map((item) =>
                item.id === id? { ...item, quantity: Math.max(1,quantity)} : item
        ),
        })),

        toggleItemChecked: (id) =>
            set((state) => ({
                cartItems: state.cartItems.map((item) =>
                item.id === id? {...item, checked: !item.checked}:item
                ),
            })),

        applyDiscount: async(code) => {
            set((state) => ({ ...state, loading:true}));
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const discountMap = {
                'XAERINOO' : 0.1,
                'ILOVECAU' : 0.5,
            };

            const discount = discountMap[code.toUpperCase()] || 0 ;
            if(!discount) alert('유효하지 않은 할인 코드입니다!');
            set((state) => ({ ...state, discount, loading:false}));
        },

        getOriginalTotalPrice: () =>
            get().cartItems.reduce(
        (total, item) =>
            item.checked ? total + ((item.price || 0)) * (item.quantity || 1) : total, 0
        ),

        getTotalPrice: () => {
            const total=get().cartItems.reduce(
                (total, item) =>
                    item.checked ? total + item.price * item.quantity : total, 0,
            );
            return total * (1 - get().discount);
        },
    }),
    {
        name: 'cart-storage',
    }
    )
)

export default useCartStore;