import React from "react";
import Layout from "../component/Layout/Layout";
import "../Style/Pages.css";
import ImagePicker from './../component/imagePicker';
const CreateEmploye = () => {
  return (
    <Layout>
        <h1 className="text-center mb-7">Create Employee</h1>
      <div className="container-main">
        <div className="Form-container">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Enter Full Name
              </label>
              <input
                type="Name"
                className="form-control"
                id="exampleInputName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputNumber" className="form-label">
                Mobile No.
              </label>
              <input
                type="Number"
                className="form-control"
                id="exampleInputNumber"
              />
            </div>
            <div className="mb-3 drop-container1">
              <div>
              <label htmlFor="exampleInputNumber" className="form-label">
              Designation
              </label>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Designation
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        HR
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Manager
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sales
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <label htmlFor="exampleInputNumber" className="form-label">
                  Gender :
                </label>
                <div className="radio">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3 Ipicker">
              <div>
                <label htmlFor="exampleInputNumber" className="form-label">
                  Course
                </label>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    defaultValue="Bike"
                  />
                  <label htmlFor="vehicle1">MCA</label>
                  <br />
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    defaultValue="Car"
                  />
                  <label htmlFor="vehicle2">BCA</label>
                  <br />
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    defaultValue="Boat"
                  />
                  <label htmlFor="vehicle3">BSC</label>
                  <br />
                  <br />
                </div>
              </div>
              <div>


                 <ImagePicker/>
              </div>
            </div>
            <div className="mb-3"></div>

            <div className="mb-3"></div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateEmploye;
