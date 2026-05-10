import { Button, Col, Container, Row } from "react-bootstrap";
import "./modal-styles.css";
import "./profile-photo.css";
import { XCircle } from "react-bootstrap-icons";
import { useState } from "react";
import "./close-animation.css";
import { useCart } from "../../contexts/useCart";

export function CartView({ paymentProcess }: { paymentProcess: (moviesId: number[]) => Promise<boolean> }) {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [removingId, setRemovingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");

  const handleRemove = (id: number) => {
    setRemovingId(id);

    setTimeout(() => {
      removeFromCart(id);
      setRemovingId(null);
    }, 300);
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;

    setLoading(true);
    setPaymentMessage("");

    const success = await paymentProcess(cartItems.map(item => item.id));

    setLoading(false);

    if (success) {
      setPaymentMessage("✅ Payment successful!");
      clearCart(); // clear giỏ hàng
    } else {
      setPaymentMessage("❌ Payment failed. Try again.");
    }
  };

  const taxRate = 0.09;
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <Container fluid className="p-0 m-0" style={{ overflow: "hidden" }}>
      <Row>
        <Col md={8}>
          <h2 className="d-flex justify-content-between align-items-center mb-4">
            <span className="fw-semibold">Shopping Cart</span>
            <span className="text-muted">{cartItems.length} items</span>
          </h2>
          <hr className="my-4" />

          <Row className="fw-semibold text-muted pb-2 mb-3">
            <Col className="text-start" md={8}>
              Product Details
            </Col>
            <Col className="text-start" md={2}>
              Price
            </Col>
            <Col md={2}></Col>
          </Row>
          {cartItems.map((item) => (
            <Row
              key={item.id}
              className={`align-items-center py-3 border-bottom cart-item
    ${removingId === item.id ? "removing" : ""}`}
            >
              <Col md={8} className="d-flex align-items-center">
                <img
                  src={item.posterUrl}
                  alt={item.title}
                  className="img-fluid me-3"
                  style={{
                    width: "70px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
                <span className="fw-medium">{item.title}</span>
              </Col>
              <Col md={2} className="text-start fw-medium">
                ${item.price.toFixed(2)}
              </Col>
              <Col md={2} className="text-start fw-medium">
                <Button
                  variant="link"
                  className="text-danger p-0"
                  onClick={() => handleRemove(item.id)}
                >
                  <XCircle size={18} />
                </Button>
              </Col>
            </Row>
          ))}
        </Col>
        <Col md={4} className="bg-light p-4 rounded shadow-sm">
          <h5 className="mb-3 fw-semibold">Order Summary</h5>
          <hr className="my-4" />
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Subtotal</span>
            <span>
              $
              {cartItems
                .reduce((acc, item) => acc + item.price * 1, 0)
                .toFixed(2)}
            </span>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <span className="text-muted">Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between fw-semibold fs-5 mb-3">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Button
            variant="primary"
            size="lg"
            className="w-100 mt-3"
            onClick={handleCheckout}
            disabled={loading || cartItems.length === 0}
          >
            {loading ? "Processing..." : "Proceed to Checkout"}
          </Button>

          {paymentMessage && (
            <div className="mt-3 text-center fw-medium">{paymentMessage}</div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
