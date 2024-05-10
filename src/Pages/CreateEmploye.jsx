import React, { useState } from "react";
import Layout from "../component/Layout/Layout";
import axios from "axios";

const CreateEmployee = ({ onImageSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedDesignation, setSelectedDesignation] = useState("");
  const [gender, setGender] = useState("female");
  const [courses, setCourses] = useState([]);

  const handleDesignationSelect = (designation) => {
    setSelectedDesignation(designation);
  };

  const fileChangedHandler = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const courseChangedHandler = (event) => {
    const courseValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCourses([...courses, courseValue]);
    } else {
      setCourses(courses.filter((course) => course !== courseValue));
    }
  };

  const uploadHandler = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await axios.post("http://localhost:8080/api/v1/uploadImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("Image uploaded successfully");
        console.log("Image uploaded successfully");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      // Here you can send employee data to your backend
      const response = await axios.post("http://localhost:8080/api/v1/createEmployee/employees", {
        fullName,
        email,
        mobileNumber,
        designation: selectedDesignation,
        gender,
        courses,
        // image: selectedFile, // Don't send the image here, upload it separately
      });

      if (response.status === 201) {
        alert("Employee created successfully");
        console.log("Employee created successfully");
        // Resetting the form after successful submission
        setFullName("");
        setEmail("");
        setMobileNumber("");
        setSelectedDesignation("");
        setGender("female");
        setCourses([]);
        setSelectedFile(null);
        setPreviewUrl("");
      }
    } catch (error) {
      console.error("Error creating employee:", error);
      // Handle error here, such as showing an error message to the user
    }
  };

  return (
    <Layout>
      <h1 className="text-center mb-7">Create Employee</h1>
      <div className="container-main">
        <div className="Form-container">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Enter Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputNumber" className="form-label">
                Mobile No.
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputNumber"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
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
                    {selectedDesignation ? selectedDesignation : 'Designation'}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleDesignationSelect('HR')}
                      >
                        HR
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleDesignationSelect('Manager')}
                      >
                        Manager
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleDesignationSelect('Sales')}
                      >
                        Sales
                      </button>
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
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
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
                      value="female"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
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
                    value="MCA"
                    onChange={courseChangedHandler}
                  />
                  <label htmlFor="vehicle1">MCA</label>
                  <br />
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="BCA"
                    onChange={courseChangedHandler}
                  />
                  <label htmlFor="vehicle2">BCA</label>
                  <br />
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="BSC"
                    onChange={courseChangedHandler}
                  />
                  <label htmlFor="vehicle3">BSC</label>
                  <br />
                  <br />
                </div>
              </div>
              <div className="img-picker">
                <input
                  type="file"
                  onChange={fileChangedHandler}
                  accept="image/*"
                />
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                )}
                {selectedFile && (
                  <button type="button" onClick={uploadHandler}>
                    Upload
                  </button>
                )}
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateEmployee;
