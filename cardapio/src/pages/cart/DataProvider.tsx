import React, { useState } from "react";
import { FoodItems } from "./foodItems";

interface AppState {
  topRated: FoodItems[];
  allCategories: FoodItems[];
  dishesNearYou: FoodItems[];
  cartItemCount: number;
  cartItems: FoodItems[];
}

interface AppContext extends AppState {
  addToCart: (item: FoodItems) => void;
  removeItem: (item: FoodItems) => void;
}

export const DataContext = React.createContext<AppContext>({} as AppContext);

function DataProvider({ children }: { children: React.ReactNode }) { // Alterar JSX.Element para React.ReactNode
  const [state, setState] = useState<AppState>({
    topRated: [
      {
        id: 1,
        name: 'Lanche de Frango',
        description: '100g', 
        preco: 15,
        url: "/cardapio/src/images/frango.jfif",
      },
      {
        id: 2,
        name: 'X-Salada',
        description: 'Peso: 90g',
        preco: 12,
        url: "/cardapio/src/images/x-salada.jfif",
      },
      {
        id: 3,
        name: 'X-Burguer',
        description: 'Peso: 80g',
        preco: 14,
        url: "/cardapio/src/images/X-burguer.jfif",
      },
    ],
    allCategories: [
      {
        id: 1,
        name: 'Lanche de Frango',
        description: '100g', 
        preco: 15,
        url: "/cardapio/src/images/frango.jfif",
      },
      {
        id: 2,
        name: 'X-Salada',
        description: 'Peso: 90g',
        preco: 12,
        url: "/cardapio/src/images/x-salada.jfif",
      },
      {
        id: 3,
        name: 'X-Burguer',
        description: 'Peso: 80g',
        preco: 14,
        url: "/cardapio/src/images/X-burguer.jfif",
      },
    ],
    dishesNearYou: [
      {
        id: 1,
        name: 'Lanche de Frango',
        description: '100g', 
        preco: 15,
        url: "../../images/frango.jfif",
      },
      {
        id: 2,
        name: 'X-Salada',
        description: 'Peso: 90g',
        preco: 12,
        url: "/cardapio/src/images/x-salada.jfif",
      },
      {
        id: 3,
        name: 'X-Burguer',
        description: 'Peso: 80g',
        preco: 14,
        url: "/cardapio/src/images/X-burguer.jfif",
      },
    ],
    cartItemCount: 0,
    cartItems: [],
  });

  const addToCart = (item: FoodItems) => {
    const updatedCartItems = [...state.cartItems];
    const itemIndex = updatedCartItems.findIndex((el) => el.id === item.id);
    if (itemIndex >= 0) {
      updatedCartItems[itemIndex].quantity! += 1;
    } else {
      updatedCartItems.push({ ...item, quantity: 1 });
    }
    setState({
      ...state,
      cartItems: updatedCartItems,
      cartItemCount: state.cartItemCount + 1,
    });
  };

  const removeItem = (item: FoodItems) => {
    const updatedCartItems = [...state.cartItems];
    const itemIndex = updatedCartItems.findIndex((el) => el.id === item.id);
    if (itemIndex >= 0) {
      if (updatedCartItems[itemIndex].quantity! > 1) {
        updatedCartItems[itemIndex].quantity! -= 1;
      } else {
        updatedCartItems.splice(itemIndex, 1);
      }
      setState({
        ...state,
        cartItems: updatedCartItems,
        cartItemCount: state.cartItemCount - 1,
      });
    }
  };

  return (
    <DataContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
