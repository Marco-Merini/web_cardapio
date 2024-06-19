import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { FoodItems } from "./foodItems";
import swal from "sweetalert";
import { DataContext } from "./DataProvider";
import { AuthContext } from "../login/AuthProvider";
import "./Cart.css";

import cart from "../../images/cart.png";

function Cart() {
  const { cartItems, addToCart, removeItem } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
      swal("Aviso", "Você precisa estar logado para continuar as compras", "warning");
    }
  }, [user, navigate]);

  const totalpreco = () => {
    let preco = 0;
    cartItems.forEach((el) => {
      preco += el.quantity! * el.preco;
    });
    return preco;
  };

  if (!user) {
    return null;
  }

  const checkout = () => {
    swal("Boa!", "Seu pedido foi realizado com sucesso!", "success").then(() => {
      window.location.href = "/home";
    });
  };

  return (
    <div className="d-flex cart-outer-div">
      <Header />
      <div className="cart-body">
        {totalpreco() ? (
          <CartWithItems
            cartItems={cartItems}
            addToCart={addToCart}
            removeItem={removeItem}
            totalpreco={totalpreco()}
          />
        ) : (
          <div className="container my-5" style={{ textAlign: "center" }}>
            <img src={cart} width="100px" alt="icon" />
            <div className="mt-4">
              <h4 className="orange-red fw-600">Seu carrinho está vazio</h4>
              <h5 className="darkblue fw-600">
                Você pode ir até a página inicial para visualizar mais itens.
              </h5>
            </div>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-end" style={{ width: "80%", marginTop: "2%" }}>
        <button onClick={checkout} className="btn btn-primary" type="button">
          Finalizar compra!
        </button>
      </div>
    </div>
  );
}

const CartWithItems = ({
  cartItems,
  addToCart,
  removeItem,
  totalpreco,
}: {
  cartItems: FoodItems[];
  addToCart: (item: FoodItems) => void;
  removeItem: (item: FoodItems) => void;
  totalpreco: number;
}) => {
  return (
    <div className="container mb-5">
      <h4 className="my-4 my-cart">Meu carrinho</h4>
      <div className="d-flex my-3" style={{ justifyContent: "space-between" }}></div>
      <div className="d-flex">
        <div className="row" style={{ width: "50%" }}>
          <div className="col-md-4">
            <h6>Total: R$ {totalpreco},00</h6>
            <h6>Cupom/Desconto:</h6>
            <div className="my-3 line w-120"></div>
            <h6>Subtotal: R$ {totalpreco},00</h6>
          </div>
          <div className="col-md-4">
            <h6>Frete: Ebaaa, você ganhou frete grátis!</h6>
            <div className="my-3 line w-60"></div>
          </div>
        </div>
        <div className="row" style={{ width: "50%" }}>
          <div style={{ maxWidth: "70%" }} className="col-md-12">
            <ul style={{ padding: 0 }}>
              {cartItems?.map((item: FoodItems, idx: number) => (
                <li key={idx} style={{ listStyle: "none" }}>
                  <div className="cart-items">
                    <img
                      src={item.url}
                      width="50px"
                      height="50px"
                      style={{ borderRadius: "50%" }}
                      alt="icon"
                    />
                    <h6 className="mt-15">{item.name}</h6>
                    <div className="d-flex mt-10">
                      <button
                        className="remove"
                        type="button"
                        onClick={() => removeItem(item)}
                      >
                        -
                      </button>
                      <span className="cart-quantity">{item.quantity}</span>
                      <button
                        className="add"
                        type="button"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                    <h6 className="mt-15">{item.quantity! * item.preco},00</h6>
                  </div>
                  <div className="line"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
