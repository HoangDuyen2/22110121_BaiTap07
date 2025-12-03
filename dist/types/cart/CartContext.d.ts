import React from "react";
export type CartItem = {
    id: string;
    name: string;
    qty: number;
    price?: number;
};
type CartContextType = {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    updateItem: (id: string, item: Partial<CartItem>) => void;
    removeItem: (id: string) => void;
    clear: () => void;
};
export declare const CartProvider: React.FC<{
    children?: React.ReactNode;
}>;
export declare const useCart: () => CartContextType;
export {};
