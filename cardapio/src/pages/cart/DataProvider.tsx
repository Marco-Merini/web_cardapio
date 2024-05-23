import React, { useState } from "react";
import { FoodItems } from "./foodItems";

import frango from '../../images/frango.jfif';
import salada from '../../images/x-salada.jfif';
import burguer from '../../images/X-burguer.jfif';
import coca from '../../images/coca-2l.jfif';

interface AppState {
  topRated: FoodItems[];
  allCategories: FoodItems[];
  cartItemCount: number;
  cartItems: FoodItems[];
}

interface AppContext extends AppState {
  addToCart: (item: FoodItems) => void;
  removeItem: (item: FoodItems) => void;
}

export const DataContext = React.createContext<AppContext>({} as AppContext);

function DataProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>({
    topRated: [
      {
        id: 1,
        name: 'Lanche de Frango',
        description: '100g',
        preco: 15,
        url: frango,
        rate: 5
      },
      {
        id: 2,
        name: 'X-Salada',
        description: '90g',
        preco: 12,
        url: salada,
        rate: 5
      },
      {
        id: 3,
        name: 'X-Burguer',
        description: '80g',
        preco: 14,
        url: burguer,
        rate: 5
      },
    ],
    allCategories: [
      {
        id: 1,
        name: 'Lanche de Frango',
        description: '100g',
        preco: 15,
        url: frango,
        rate: 5
      },
      {
        id: 2,
        name: 'X-Salada',
        description: '90g',
        preco: 12,
        url: salada,
        rate: 5
      },
      {
        id: 3,
        name: 'X-Burguer',
        description: '80g',
        preco: 14,
        url: burguer,
        rate: 5
      },
      {
        id: 4,
        name: 'Coca-Cola',
        description: '2L',
        preco: 10,
        url: coca,
        rate: 5
      },
      {
        id: 5,
        name: 'Coca-Cola',
        description: '1L',
        preco: 8,
        quantity: 12,
        url: coca,
        rate: 5
      },
    ],
    cartItemCount: 0,
    cartItems: [],
  });

  const { topRated, allCategories, cartItemCount, cartItems } =
    state;

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
        topRated,
        allCategories,
        cartItemCount,
        cartItems,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
