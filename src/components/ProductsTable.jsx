import { Card, Form } from "react-bootstrap"

function ProductsCard({menuItems,handleCheck,handleChange,isCheck}){
    return(
        <Card border="warning">
        <Card.Title className="text-center mt-4 fs-1">
          Craving Pizza? Place Your Order Now!
        </Card.Title>
        <Card.Body>
          {menuItems.map((item) => (
            <div className="row mt-1 mb-1 w-100" key={item.id}>
              <div className="col-md-2 col-sm-4">
                <img
                  src={item.img}
                  alt="chick"
                  className="ingredient_image"
                />
              </div>
              <div className="col-md-4 col-sm-4">
                <h4>{item.name}</h4>
              </div>
              <div className="col-md-2 col-sm-4">
                <b>Rs.{item.perPrice}/-</b>
              </div>
              <div className="col-md-2 text-right ">
                <label>Qty</label>
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  id={item.id}
                  value={item.quantity}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-2 text-right">
                <b>Rs.{isNaN(item.total) ? 0 : item.total}/-</b>
              </div>
            </div>
          ))}
          <div className="row mt-1 mb-1 w-100">
            <div className="col-md-2">
              <img
                src="\Images\one-hourpizzadough.jpg"
                alt="chick"
                className="ingredient_image"
              />
            </div>
            <div className="col-md-4">
              <h4>Crust</h4>
            </div>
            <div className="col-md-2">
              <b> Please select a crust to proceed with your order.</b>
            </div>
            <div className="col-md-2 text-right">
              <Form.Check type="checkbox" onChange={handleCheck} checked={isCheck}/>
            </div>
          </div>
        </Card.Body>
      </Card>

    )
}
export default  ProductsCard