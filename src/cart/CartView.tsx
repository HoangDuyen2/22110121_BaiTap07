import React, { useState } from "react";
import { useCart, CartItem } from "./CartContext";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Card from "../components/Card";

const NewItemForm: React.FC<{ onAdd: (item: CartItem) => void }> = ({
  onAdd,
}) => {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(1);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!name) return;
    onAdd({ id: `${Date.now()}`, name, qty, price: 0 });
    setName("");
    setQty(1);
  };

  return (
    <form
      onSubmit={submit}
      style={{ display: "flex", gap: 8, alignItems: "flex-end" }}
    >
      <label style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 13 }}>Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 8, borderRadius: 6 }}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 13 }}>Qty</span>
        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          style={{ padding: 8, borderRadius: 6, width: 80 }}
        />
      </label>
      <Button type="submit">Add</Button>
    </form>
  );
};

const CartView: React.FC = () => {
  const { items, addItem, updateItem, removeItem, clear } = useCart();
  const [editing, setEditing] = useState<CartItem | null>(null);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <Card>
        <h3 style={{ marginTop: 0 }}>Add Item</h3>
        <NewItemForm onAdd={(item) => addItem(item)} />
      </Card>

      <Card>
        <h3 style={{ marginTop: 0 }}>Cart ({items.length})</h3>
        {items.length === 0 && (
          <div style={{ color: "#6b7280" }}>Cart is empty</div>
        )}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gap: 8,
          }}
        >
          {items.map((it) => (
            <li
              key={it.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{it.name}</div>
                <div style={{ color: "#6b7280", fontSize: 13 }}>
                  Qty: {it.qty}
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <Button onClick={() => setEditing(it)} variant="secondary">
                  Edit
                </Button>
                <Button onClick={() => removeItem(it.id)}>Remove</Button>
              </div>
            </li>
          ))}
        </ul>
        {items.length > 0 && (
          <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
            <Button onClick={() => clear()} variant="secondary">
              Clear
            </Button>
          </div>
        )}
      </Card>

      <Modal
        open={!!editing}
        onClose={() => setEditing(null)}
        title="Edit Item"
      >
        {editing && (
          <EditForm
            item={editing}
            onCancel={() => setEditing(null)}
            onSave={(id, partial) => {
              updateItem(id, partial);
              setEditing(null);
            }}
          />
        )}
      </Modal>
    </div>
  );
};

const EditForm: React.FC<{
  item: CartItem;
  onSave: (id: string, item: Partial<CartItem>) => void;
  onCancel: () => void;
}> = ({ item, onSave, onCancel }) => {
  const [name, setName] = useState(item.name);
  const [qty, setQty] = useState(item.qty);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(item.id, { name, qty });
      }}
      style={{ display: "grid", gap: 8 }}
    >
      <label style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 13 }}>Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 8, borderRadius: 6 }}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 13 }}>Qty</span>
        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          style={{ padding: 8, borderRadius: 6 }}
        />
      </label>
      <div style={{ display: "flex", gap: 8 }}>
        <Button type="submit">Save</Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default CartView;
