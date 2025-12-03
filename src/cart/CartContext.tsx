import React, { createContext, useContext, useReducer } from "react";

export type CartItem = {
  id: string;
  name: string;
  qty: number;
  price?: number;
};

type State = {
  items: CartItem[];
};

type Action =
  | { type: "ADD"; item: CartItem }
  | { type: "UPDATE"; id: string; item: Partial<CartItem> }
  | { type: "REMOVE"; id: string }
  | { type: "CLEAR" };

const initialState: State = { items: [] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD": {
      // if exists, increase qty
      const exists = state.items.find((i) => i.id === action.item.id);
      if (exists) {
        return {
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, qty: i.qty + action.item.qty } : i
          ),
        };
      }
      return { items: [...state.items, action.item] };
    }
    case "UPDATE":
      return {
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, ...action.item } : i
        ),
      };
    case "REMOVE":
      return { items: state.items.filter((i) => i.id !== action.id) };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateItem: (id: string, item: Partial<CartItem>) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (item: CartItem) => dispatch({ type: "ADD", item });
  const updateItem = (id: string, item: Partial<CartItem>) =>
    dispatch({ type: "UPDATE", id, item });
  const removeItem = (id: string) => dispatch({ type: "REMOVE", id });
  const clear = () => dispatch({ type: "CLEAR" });

  return (
    <CartContext.Provider
      value={{ items: state.items, addItem, updateItem, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
