import "bootstrap/dist/css/bootstrap.min.css";
import "./login-user.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function LoginUser() {
  const [products, setProducts] = useState([]);
  const [listUsers, setListUsers] = useState([]);
  const [dataForm, setDataForm] = useState({});
  const navigate = useNavigate();

  // ("use strict");
  // const forms = document.querySelectorAll(".requires-validation");
  // Array.from(forms).forEach(function (form) {
  //   form.addEventListener(
  //     "submit",
  //     function (event) {
  //       if (!form.checkValidity()) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //       }

  //       form.classList.add("was-validated");
  //     },
  //     false
  //   );
  // });

  const findUser = () => {
    const userValid = listUsers.find((user) => {
      if (user.mail == dataForm.mail && user.password == dataForm.password) return user;
    });
    return userValid;
  };

  const goToRegister = () => {
    navigate("/Register");
  };

  const onLogin = () => {
    const userValid = findUser();
    if (userValid) {
      localStorage.setItem("userLogin", JSON.stringify(userValid));
      if (products.length) {
        navigate("/buy");
      } else {
        navigate("/");
      }
    } else {
      alert("Usuario invalido");
    }
  };
  const onChangeInput = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("productsBuy"));
    const users = JSON.parse(localStorage.getItem("listUsers"));
    if (products?.length) {
      setProducts(products);
    }
    if (users?.length) {
      setListUsers(users);
    }
  }, []);

  useEffect(() => {
    console.log("dataForm", dataForm);
  }, [dataForm]);

  return (
    <>
      <div className="container user-form">
        <div className="form-body">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="form-holder">
                <div className="form-content">
                  <div className="form-items">
                    <h1 className="text-capitalize">Iniciar Sesión</h1>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        onChange={onChangeInput}
                        required
                      />
                      <div className="valid-feedback">
                        ¡Campo de correo electrónico válido!
                      </div>
                      <div className="invalid-feedback">
                        ¡El campo de correo electrónico no puede estar vacío!
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={onChangeInput}
                        required
                      />
                      <div className="valid-feedback">
                        ¡Campo de contraseña válido!
                      </div>
                      <div className="invalid-feedback">
                        ¡El campo de contraseña no puede estar vacío!
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="btn-group" role="group">
                        <button className="btn btn-primary " onClick={onLogin}>
                          Iniciar seccion
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary text-capitalize"
                          onClick={goToRegister}
                        >
                          Registrarse
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginUser;
