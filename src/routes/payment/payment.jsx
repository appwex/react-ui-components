import './payment.css';

const Payment = () => {
  return (
    <section className="payment">
      <h2 className="paymentHeader">Payment Review</h2>
      <div className="paymentTable">
        <div className="paymentTabbleItem">
          <p className="paymentTitle">Service</p>
          <span className="paymentPrice">$25</span>
        </div>
        <div className="paymentTabbleItem">
          <p className="paymentTitle">Tax</p>
          <span className="paymentPrice">$1.1</span>
        </div>
        <div className="paymentTabbleItem">
          <p className="paymentTotal">Total</p>
          <span className="paymentTotalPrice">$26.1</span>
        </div>
      </div>
      <button className="paymentBtn">Pay Now</button>
    </section>
  );
};

export default Payment;
