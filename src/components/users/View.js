import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const View = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    mobile_no: "",
    company_name: "",
    company_address: "",
    company_contact: "",
  });

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    handleGetallData();
  }, []);

  const handleGetallData = async () => {
    let datastate;
    let getURL = `http://192.168.29.2:5000/api/allData/${id}`;
    let reqheader = {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    };

    try {
      datastate = await axios.get(getURL, reqheader);
      if (datastate.data.result === true) {
        setUserData(datastate.data.data);
      }
    } catch (e) {
      console.log("Get All Data API Have Issue!!");
    }
  };

  return (
    (
      <div className="container">
        <Link className="btn btn-primary" to="/">
          back to Home
        </Link>
        <h1 className="display-4">View id: {id}</h1>
      </div>
    ),
    (
      <ul>
        <li className="list-group-item">first_name :{View.first_name}</li>
        <li className="list-group-item">last_name :{View.last_name}</li>
        <li className="list-group-item">address :{View.address}</li>
        <li className="list-group-item">mobile_no :{View.mobile_no}</li>
        <li className="list-group-item">company_name :{View.company_name}</li>
        <li className="list-group-item">
          company_address :{View.company_address}
        </li>
        <li className="list-group-item">
          company_contact :{View.company_contact}
        </li>
      </ul>
    )
  );
};

export default View;
