import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";


const CreateAds = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [checkBox1, setCheckBox1] = useState(
    searchParams.get("checkbox1") === "true"
  );
  const [checkBox2, setCheckBox2] = useState(
    searchParams.get("checkbox2") === "true"
  );

  const handleCheckBox1Change = () => {
    setCheckBox1(!checkBox1);
    updateURL("checkbox1", !checkBox1);
  };

  const handleCheckBox2Change = () => {
    setCheckBox2(!checkBox2);
    updateURL("checkbox2", !checkBox2);
  };

  const updateURL = (paramName, paramValue) => {
    const queryParams = new URLSearchParams(location.search);
    if (paramValue) {
      queryParams.set(paramName, "true");
    } else {
      queryParams.delete(paramName);
    }
    const query = queryParams.toString();
    navigate({ search: query ? "?" + query : "" }, { replace: true });
  };

  const handleNextButtonClick = () => {
    if (!checkBox1 && !checkBox2) {
      alert("You must select at least one checkbox");
    } else {
      navigate(`/form1${location.search}`);
    }
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid #dddddd",
          margin: "10px",
        }}
      >
        <p style={{ marginLeft: "10px", fontSize: "20px" }}>Create Ads</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
          className="responsive-column "
        >
          <div
            style={{
              padding: "16px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginLeft: "20px",
              width: "20vh",
              marginBottom: "10px",
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center",
            }}
            onClick={handleCheckBox1Change}
          >
            <input
              style={{ height: "30px", width: "20px" }}
              type="checkbox"
              checked={checkBox1}
              onChange={handleCheckBox1Change}
            />{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <label>
                <img
                  src="https://www.syncfusion.com/products/xamarin/control/images/shimmer/Colors.jpg"
                  alt="Image 1"
                  width="100"
                  height="100"
                />
              </label>
              <p style={{ textAlign: "center" }}>Create</p>
              <h2>Text Add</h2>
            </div>
          </div>
          <div
            style={{
              padding: "16px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginLeft: "20px",
              marginBottom: "10px",
              width: "20vh",
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center",
            }}
            onClick={handleCheckBox2Change}
          >
            <input
              style={{ height: "30px", width: "20px" }}
              type="checkbox"
              checked={checkBox2}
              onChange={handleCheckBox2Change}
            />{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <label>
                <img
                  src="https://www.syncfusion.com/products/xamarin/control/images/shimmer/Colors.jpg"
                  alt="Image 1"
                  width="100"
                  height="100"
                />
              </label>
              <p style={{ textAlign: "center" }}>Create</p>
              <h2>Media Add</h2>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "16px",
          }}
        >
          <Button
            variant="contained"
            style={{ width: "15vh", marginBottom: "20px", marginRight: "20px" }}
            onClick={handleNextButtonClick}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAds;
