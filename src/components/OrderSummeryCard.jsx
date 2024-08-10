import { Card, Table, Button } from "react-bootstrap";

function OrderSummeryCard({ orderedItem, subTotal, isCheck, handleConfirm }) {
  return (
    <Card className="text-center mt-2" border="warning">
      <Card.Header className="fs-5">Order Summery</Card.Header>
      <Card.Body>
        <Table bordered size="sm">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Item Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orderedItem.map((item, ind) => (
              <tr key={item.id}>
                <td>{ind + 1}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.perPrice}/-</td>
                <td>{item.total}/-</td>
              </tr>
            ))}
            <tr>
              <td colSpan={3}></td>
              <td>Sub Total Rs.</td>
              <td>{subTotal}/-</td>
            </tr>
          </tbody>
        </Table>
        <Button
          variant="primary"
          disabled={!isCheck || subTotal <= 0}
          onClick={handleConfirm}
        >
          Order Now
        </Button>
      </Card.Body>
    </Card>
  );
}
export default OrderSummeryCard;
