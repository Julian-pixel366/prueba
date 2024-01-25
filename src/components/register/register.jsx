import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";

function RegisterUser() {
  const navigate = useNavigate();
  const formsRef = useRef(null);
  const [validated, setValidated] = useState(false);
  const [dataForm, setDataForm] = useState({});

  const onChangeInput = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  const onRegister = () => {
    const validData = Object.keys(dataForm);
    if (validData.length < 3) {
      alert("No se han llenado todos los datos");
    } else {
      const listUser = JSON.parse(localStorage.getItem("listUsers")) || [];
      localStorage.setItem(
        "listUsers",
        JSON.stringify([...listUser, dataForm])
      );
      alert("Usuario registrado");
    }
  };

  // useEffect(() => {
  // const forms = formsRef.current;

  //   const handleFormSubmit = (event) => {
  //     const form = event.currentTarget;

  //     if (!form.checkValidity()) {
  //       event.preventDefault();
  //       event.stopPropagation();
  //     }

  //     setValidated(true);
  //   };

  //   if (forms) {
  //     Array.from(forms).forEach((form) => {
  //       form.addEventListener('submit', handleFormSubmit, true);
  //     });
  //   }

  //   return () => {
  //     if (forms) {
  //       Array.from(forms).forEach((form) => {
  //         form.removeEventListener('submit', handleFormSubmit, false);
  //       });
  //     }
  //   };
  // }, []);

  const goToLogin = () => {
    navigate("/Login");
  };

  return (
    <>
      <div className="container">
        <div className="form-body">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div
                className={`form-holder ${validated ? "was-validated" : " "}`}
              >
                <div className="form-content">
                  <div className="form-items">
                    <h1>Registro</h1>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={onChangeInput}
                        required
                      />
                      <div className="valid-feedback">
                        Username field is valid!
                      </div>
                      <div className="invalid-feedback">
                        Username field cannot be blank!
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={onChangeInput}
                        placeholder="E-mail Address"
                        required
                      />
                      <div className="valid-feedback">
                        Email field is valid!
                      </div>
                      <div className="invalid-feedback">
                        Email field cannot be blank!
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        onChange={onChangeInput}
                        placeholder="Password"
                        required
                      />
                      <div className="valid-feedback">
                        Password field is valid!
                      </div>
                      <div className="invalid-feedback">
                        Password field cannot be blank!
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label className="form-check-label">
                          I confirm that all data are correct
                        </label>
                        <div className="invalid-feedback">
                          Please confirm that the entered data are all correct!
                        </div>
                      </div>
                    </div>

                    <div className="form-button mt-3">
                      <div className="btn-group">
                        <button
                          className="btn btn-primary"
                          onClick={onRegister}
                        >
                          Register
                        </button>

                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={goToLogin}
                        >
                          Inicia Sesión
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
export default RegisterUser;
