import { useState } from "react";
import { items } from "../components/Data";
import ProductsCard from "../components/ProductsTable";
import OrderSummeryCard from "../components/OrderSummeryCard";
import ConfirmDialog from "../components/ConfirmDialog";
import "../global.css";

function Home() {
  const [menuItem, setMenuItem] = useState(items);
  const [isCheck, setIsCheck] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);

  const handleCheck = () => {
    setIsCheck(!isCheck);
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const index = menuItem.findIndex((item) => item.id === parseInt(id));
    if (index >= 0) {
      setMenuItem((prev) => {
        const menu = [...prev];
        menu[index] = {
          ...menu[index],
          quantity: parseInt(e.target.value),
          total: parseInt(e.target.value) * menu[index].perPrice,
        };
        return menu;
      });
    }
  };

  const filteredMenuOrders = menuItem.filter(({ quantity }) => quantity > 0);

  const subTotal = filteredMenuOrders.reduce(
    (acc, curr) => acc + curr.total,
    0
  );

  const handleConfirm = () => {
    setConfirmOrder(true);
  };

  const handleClose = () => {
    setConfirmOrder(false);
    setMenuItem(items)
    setIsCheck(!isCheck);
  };
  
  return (
    <>
      <div className="container mt-3 mb-3">
        <ProductsCard
          menuItems={menuItem}
          handleCheck={handleCheck}
          handleChange={handleChange}
          isCheck={isCheck}
        />
        <OrderSummeryCard
          orderedItem={filteredMenuOrders}
          handleConfirm={handleConfirm}
          subTotal={subTotal}
          isCheck={isCheck}
        />
      </div>
      <ConfirmDialog
        show={confirmOrder}
        onHide={handleClose}
      />
    </>
  );
}

export default Home;
