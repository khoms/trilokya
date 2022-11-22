import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Ip from "../ip";

const Employee = (props) => {
  const [employee, setEmployee] = useState(props.employeeData);

  const [error, setError] = useState("");

  console.log(employee);

  const ListingTable = () => {
    return (
      <div className="appointment-table">
        <table>
          <thead className="item-center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age Date</th>
              <th>Designation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sandeep Kshetri</td>
              <td>sundp.kshetri@gmail,com</td>
              <td>40</td>
              <td>General Surgeon</td>

              <td>
                <button type="button" className="acceptBtn">
                  Update
                </button>
                <button
                  type="button"
                  className="removeBtn"
                  //   onClick={(event) => handleEditClick(event, contact)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>

          {employee ? (
            employee.map((item, i) => (
              <tbody className="item-center pending-list" key={i}>
                <tr>
                  <td>{item.name}ok</td>
                  <td>{item?.email}</td>
                  <td>{item?.age}</td>
                  <td>{item?.designation}</td>
                  <td>
                    <button type="button" className="acceptBtn">
                      Update
                    </button>
                    <button
                      type="button"
                      className="removeBtn"
                      //   onClick={(event) => handleEditClick(event, contact)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <h2>No Data found</h2>
            </tbody>
          )}
        </table>
      </div>
    );
  };

  return (
    <div
      className="login-div"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/white-background-with-circular-lines-copy-space_23-2148822143.jpg?t=st=1657303301~exp=1657303901~hmac=695fb33862f22607a966c4363551552a18e1f56513dfffaae86cf92129bb46cb&w=1380")`,
        // height: "100vh",
      }}
    >
      <section>
        <div className="login-box">
          <div className="row justify-content-sm-center h-1000">
            <div className="col-xl-10 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="text-center my-5"></div>
              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4">Add Employee</h1>

                  <ListingTable />
                </div>
                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                    {/* {employee} */}
                    <button
                      className="btn  ms-auto"
                      //   onClick={() => setAddData(!addData)}
                    >
                      <u>
                        Add New Employee
                        {/* <Link
                          exact
                          to="/"
                          // onClick={() => {
                          //   setExpand((e) => !e);
                          // }}
                          className={`menu-item`}
                        ></Link> */}
                      </u>
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5 text-muted">
                Copyright &copy; 2022 &mdash; Trilokya-Task
              </div>
            </div>
          </div>
        </div>
        )
      </section>
    </div>
  );
};

export default Employee;
