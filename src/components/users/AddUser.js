import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    mobile_no: "",
    company_name: "",
    company_address: "",
    company_contact: "",
  });

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    let datastate;
    let url = "http://192.168.29.2:5000/api/addEdit";

    let header = {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    };

    try {
      datastate = await axios.post(url, userData, header);
      // console.log(datastate.result);
      // console.log(datastate.status);
      // console.log(datastate.message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container p-4">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add New User</h2>
        <form name="add_user">
          <div className="row ">
            <div className="col-lg-6 form-group pb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your first_name"
                name="first_name"
                value={userData.first_name}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-lg-6 form-group pb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your last_name"
                name="last_name"
                value={userData.last_name}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 form-group pb-3">
              <textarea
                className="form-control form-control-lg"
                placeholder="Enter Your Address"
                name="address"
                value={userData.address}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-lg-6 form-group pb-3">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Your mobile_no"
                name="mobile_no"
                value={userData.mobile_no}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 form-group pb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your company_name"
                name="company_name"
                value={userData.company_name}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-lg-6 form-group pb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your company_address"
                name="company_address"
                value={userData.company_address}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 form-group pb-3">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Your company_contact"
                name="company_contact"
                value={userData.company_contact}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-5">
            <button
              type="button"
              onClick={handleOnSubmit}
              className="btn btn-primary btn-block"
            >
              + Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
