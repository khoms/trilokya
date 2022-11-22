import React, { useEffect, useState } from "react";

import Ip from "../ip";
import Employee from "./Employee";

const Home = () => {
  const [addData, setAddData] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [designation, setDesignation] = useState("");
  const [created, setCreated] = useState("");
  const [employee, setEmployee] = useState([]);

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setState((prevState) => ({
  //     ...prevState,
  //     [id]: value,
  //   }));
  //   console.log(state);
  // };
  useEffect(() => {
    fetchEmployee();
  }, []);
  const fetchEmployee = async () => {
    fetch(`${Ip.ip}/read.php`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // const fetchedData = await JSON.stringify(data.body);
        // console.log(data);
        setEmployee(data);
        setEmployee(JSON.stringify(data.body));
        // setEmployee(Object.entries(employee));
        // console.log(typeof employee);
      })

      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmitClick = async (e) => {
    e.preventDefault();

    await fetch(`${Ip.ip}/create.php`, {
      withCredentials: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        name,
        email,
        age,
        designation,
      }),
    })
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);

        if (data.success) {
          setCreated("Successfully Created New Employee");
          setName("");
          setEmail("");
          setAge("");
          setDesignation("");
        } else {
          setCreated("Failed to  Create New Employee");
        }
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div
      className="login-div"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/white-background-with-circular-lines-copy-space_23-2148822143.jpg?t=st=1657303301~exp=1657303901~hmac=695fb33862f22607a966c4363551552a18e1f56513dfffaae86cf92129bb46cb&w=1380")`,
        height: "100vh",
      }}
    >
      <section>
        {addData ? (
          <div className="login-box">
            <div className="row justify-content-sm-center h-100">
              <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                <div className="text-center my-5"></div>
                <div className="card shadow-lg">
                  <div className="card-body p-5">
                    <h1 className="fs-4 card-title fw-bold mb-4">
                      Add Employee
                    </h1>
                    {/* <form
                      // method="POST"
                      className="needs-validation"
                      
                    > */}

                    <form onSubmit={handleSubmitClick}>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="mb-2 text-muted"
                        >
                          Employee Name
                        </label>
                        <input
                          id="name"
                          className="form-control"
                          name="name"
                          value={name}
                          // onChange={handleChange}
                          onChange={(e) => setName(e.target.value)}
                          required
                          autoFocus
                        />
                        <div className="invalid-feedback">Add Proper Data</div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="mb-2 text-muted"
                        >
                          Employee Email
                        </label>
                        <input
                          id="email"
                          className="form-control"
                          name="email"
                          value={email}
                          // onChange={handleChange}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          autoFocus
                        />
                        <div className="invalid-feedback">Add Proper Data</div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="mb-2 text-muted"
                        >
                          Employee Age
                        </label>
                        <input
                          id="age"
                          // type="number"
                          className="form-control"
                          name="age"
                          value={age}
                          // onChange={handleChange}
                          onChange={(e) => setAge(e.target.value)}
                          required
                          autoFocus
                        />
                        <div className="invalid-feedback">Add Proper Data</div>
                      </div>

                      <div className="mb-3">
                        <div className="mb-2 w-100">
                          <label className="text-muted">Designation</label>
                        </div>
                        <input
                          id="designation"
                          className="form-control"
                          name="password"
                          value={designation}
                          // onChange={handleChange}
                          onChange={(e) => setDesignation(e.target.value)}
                          required
                        />
                      </div>
                      <div className="login-error-message"></div>

                      <div className="d-flex align-items-center">
                        <input
                          className="btn btn-primary ms-auto"
                          type="submit"
                          // onSubmit={loginScreen}
                          value="Add Employer"
                        />

                        {/* <button
                          className="btn btn-primary ms-auto"
                          onClick={loginScreen}
                        >
                          Login
                        </button> */}
                      </div>
                      <div className="d-flex align-items-center">
                        <h6>{created}</h6>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer py-3 border-0">
                    <div className="text-center">
                      <button
                        className="btn  ms-auto"
                        onClick={() => setAddData(!addData)}
                      >
                        <u>List Employee</u>
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
        ) : (
          <Employee employeeData={employee} />
        )}
      </section>
    </div>
  );
};

export default Home;
