import React, { useContext } from "react";
import "./Placeholder.css";
import { StoreContext } from "../../Context/StoreContext";
const placeholder = () => {
   
  const {getTotalCartAmount}=useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Street" />
        <input type="text" placeholder="Area" />
        <div className="multi-fields">
          <input type="text" placeholder="Pin-Code" />
          <input type="text" placeholder="City" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Phone" name="" id="" />
        </div>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs{getTotalCartAmount()===0?0:40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs{getTotalCartAmount()===0?0:getTotalCartAmount()+40}</b>
            </div>
          </div>
          <button>PROCEED TO Payment</button>
        </div>
      </div>
    </form>
  );
};

export default placeholder;
