import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../component/Layout/Layout";

const EmployeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/createEmployee/employees"
      );
      setEmployees(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch employees. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mt-5">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>

                <th>Name</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Designation</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Create Date</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    {employee.image && (
                      <img
                        src={`data:${employee.image.contentType};base64,${employee.image.data}`}
                        alt="Employee"
                        style={{ width: "60px", height: "60px" }}
                      />
                    )}
                  </td>
                  <td>{employee.fullName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.mobileNo}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.courses}</td>
                  <td>{employee.createdAt}</td>
                  <td>{employee._id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
};

export default EmployeList;
