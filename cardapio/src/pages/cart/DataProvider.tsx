import React, { useState, useEffect } from "react";
import { FoodItems } from "./foodItems";
import { getDatabase, ref, get, set, update, remove } from "firebase/database";

interface AppState {
  allCategories: FoodItems[];
  cartItemCount: number;
  cartItems: FoodItems[];
}

interface AppContext extends AppState {
  addToCart: (item: FoodItems) => void;
  removeItem: (item: FoodItems) => void;
  addProduct: (productType:'allCategories', productData: FoodItems) => void;
  updateProduct: (productType:'allCategories', productData: FoodItems) => void;
  removeProduct: (productType:'allCategories', productId: number) => void;
}

export const DataContext = React.createContext<AppContext>({} as AppContext);

const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    allCategories: [],
    cartItemCount: 0,
    cartItems: [],
  });

  const db = getDatabase();

  useEffect(() => {
    const fetchData = async () => {
      const allCategoriesData: FoodItems[] = [];
      const allCategoriesRef = ref(db, 'allCategories');

      await Promise.all([
        get(allCategoriesRef).then((snapshot) => {
          if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
              allCategoriesData.push(childSnapshot.val());
            });
          }
        }),
      ]);

      setState((prevState) => ({
        ...prevState,
        allCategories: allCategoriesData,
      }));
    };

    fetchData();
  }, [db]);

  const addToCart = (item: FoodItems) => {
    const updatedCartItems = [...state.cartItems];
    const itemIndex = updatedCartItems.findIndex((el) => el.productId === item.productId);
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
    const itemIndex = updatedCartItems.findIndex((el) => el.productId === item.productId);
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

  const addProduct = (productType:'allCategories', productData: FoodItems) => {
    const productRef = ref(db, `${productType}/${productData.productId}`);
    set(productRef, productData)
      .then(() => {
        console.log(`${productData.name} added successfully to ${productType}`);
        setState((prevState) => ({
          ...prevState,
          [productType]: [...prevState[productType], productData],
        }));
      })
      .catch((error) => {
        console.error(`Error adding ${productData.name} to ${productType}:`, error);
      });
  };

  const updateProduct = (productType:'allCategories', productData: FoodItems) => {
    const productRef = ref(db, `${productType}/${productData.productId}`);
    update(productRef, productData)
      .then(() => {
        console.log(`${productData.name} updated successfully in ${productType}`);
        setState((prevState) => ({
          ...prevState,
          [productType]: prevState[productType].map((product) =>
            product.productId === productData.productId ? productData : product
          ),
        }));
      })
      .catch((error) => {
        console.error(`Error updating ${productData.name} in ${productType}:`, error);
      });
  };

  const removeProduct = (productType:'allCategories', productId: number) => {
    const productRef = ref(db, `${productType}/${productId}`);
    remove(productRef)
      .then(() => {
        console.log(`Product with ID ${productId} removed successfully from ${productType}`);
        setState((prevState) => ({
          ...prevState,
          [productType]: prevState[productType].filter((product) => product.productId !== productId),
        }));
      })
      .catch((error) => {
        console.error(`Error removing product with ID ${productId} from ${productType}:`, error);
      });
  };

  return (
    <DataContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        addProduct,
        updateProduct,
        removeProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
