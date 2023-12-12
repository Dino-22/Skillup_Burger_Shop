// Write all the code here
import React from "react";

function OrderDetails() {
    return (
        <section className="orderDetails">
            <main>
                <h1>Order Details</h1>
                <div>
                    <h1>Shipping</h1>
                    <p>Address: 123 Any Street, London, W1</p>
                    <h1>Contact</h1>
                    <p>Name: Nonya</p>
                    <p>Phone: 01234556678</p>
                    <h1>Status</h1>
                    <p>Order Status: Processing</p>
                    <p>Order Placed: 11/12/2023</p>
                    <p>Order Delivered: 11/12/2023</p>
                    <h1>Payment</h1>
                    <p>Payment Method: COD</p>
                    <p>Payment Reference: #001234</p>
                    <p>Paid: 11/12/2023</p>
                    <h1>Amount</h1>
                    <p>Sub-Total: £12.00</p>
                    <p>Delivery Charge: £2.00</p>
                    <p>Tax: £2.16</p>
                    <p>Total: £16.16</p>
                </div>
                <article>
                    <h1>Ordered Items</h1>
                    <div>
                        <h4>Cheese Burger</h4>
                        <b>2 x £1.00</b>
                    </div>
                    <div>
                        <h4>Mega Burger</h4>
                        <b>1 x £2.00</b>
                    </div>
                    <div>
                        <h4>Double Cheese Burger with Fries</h4>
                        <b>3 x £3.00</b>
                    </div>
                    <div>
                        <h4>Sub-Total</h4>
                        <h4>£12.00</h4>
                    </div>
                </article>
            </main>
        </section>
    );
}

export default OrderDetails;