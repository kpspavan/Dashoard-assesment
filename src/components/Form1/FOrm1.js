import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputComponent from "../Inputcomponent/Input";
import TextareaComponent from "../TextArea/Textarea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CustomDropdown from "../Dropdown/Dropdown";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { AiFillCheckCircle } from "react-icons/ai";
import { Button } from "@mui/material";
import "./Form1.css";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const FOrm1 = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const TextAds = searchParams.get("checkbox1") === "true";
  const mediaads = searchParams.get("checkbox2") === "true";

  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    heading1: "",
    heading2: "",
    description1: "",
    businessName: "",
    websiteURL: "",
    selectedOption: "",
    landscape: "",
    Portraite: "",
    sqaure: "",
    videourl: "",
  });

  // Validation error states
  const [validationErrors, setValidationErrors] = useState({
    heading1: "",
    heading2: "",
    description1: "",
    businessName: "",
    websiteURL: "",
    selectedOption: "",
    landscape: "",
    Portraite: "",
    sqaure: "",
    videourl: "",
  });

  const handleValidation = () => {
    let isValid = true;
    const errors = {};

    if (formData.heading1.trim() === "") {
      errors.heading1 = "* Field is Required";
      isValid = false;
    }

    if (formData.heading2.trim() === "") {
      errors.heading2 = "* Field is Required";
      isValid = false;
    }

    if (formData.description1.trim() === "") {
      errors.description1 = "* Field is Required";
      isValid = false;
    }

    if (mediaads) {
      if (formData.landscape.trim() === "") {
        errors.landscape = "* Field is Required";
        isValid = false;
      }

      if (formData.Portraite.trim() === "") {
        errors.Portraite = "* Field is Required";
        isValid = false;
      }

      if (formData.sqaure.trim() === "") {
        errors.sqaure = "* Field is Required";
        isValid = false;
      }

      if (formData.videourl.trim() === "") {
        errors.videourl = "* Field is Required";
        isValid = false;
      }
    }

    if (formData.businessName.trim() === "") {
      errors.businessName = "* Field is Required";
      isValid = false;
    }

    if (formData.selectedOption.trim() === "") {
      errors.selectedOption = "* Field is Required";
      isValid = false;
    }

    if (formData.websiteURL.trim() === "") {
      errors.websiteURL = "* Field is Required";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleSubmit = () => {
    const isValid = handleValidation();
    if (isValid) {
      // Log the form data
      console.log("Form Data:", formData);

      // Open the modal
      setModalOpen(true);

      // Redirect to 'create-ads' after a delay (e.g., 1000 milliseconds)
      setTimeout(() => {
        navigate("/create-ads");
      }, 1000);
    }
  };

  const clearError = (fieldName) => {
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "",
    }));
  };

  const errorStyle = {
    border: "1px solid red",
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ backgroundColor: "red" }} id="pavan">
      <Card className="custom-card">
        <CardContent>
          {TextAds || mediaads ? (
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                height: TextAds ? "100vh" : "",
              }}
            >
              <div style={{ display: "flex" }} className="responsive-column">
                <div style={{ flex: 1 }}>
                  <InputComponent
                    label="Heading1"
                    fullWidth
                    id="fullWidth"
                    type="text"
                    placeholder="Add a heading that would make users interested"
                    value={formData.heading1}
                    onChange={(e) =>
                      setFormData({ ...formData, heading1: e.target.value })
                    }
                    onBlur={() => {
                      clearError("heading1");
                      if (formData.heading1.trim() === "") {
                        setValidationErrors((prevErrors) => ({
                          ...prevErrors,
                          heading1: "* Field is Required",
                        }));
                      }
                    }}
                    errormessage={validationErrors.heading1}
                    style={{
                      border: validationErrors.heading1 ? "red" : "initial",
                    }}
                  />
                  <InputComponent
                    label="Heading2"
                    fullWidth
                    id="fullWidth"
                    type="text"
                    placeholder="Add a heading that would make users interested"
                    value={formData.heading2}
                    onChange={(e) =>
                      setFormData({ ...formData, heading2: e.target.value })
                    }
                    onBlur={() => clearError("heading2")} // Clear the error when the input field is blurred
                    errormessage={validationErrors.heading2}
                    style={{
                      border: validationErrors.heading2 ? "red" : "initial",
                    }}
                  />
                </div>
                <div
                  style={{ flex: 1, marginLeft: "10px", marginRight: "12px" }}
                  className="responsive-column"
                >
                  <TextareaComponent
                    fullWidth
                    label="Description1"
                    id="my-textarea"
                    placeholder="Add a primary text to help users understand more about your product, service, or offers"
                    rows={6}
                    value={formData.description1}
                    onChange={(e) =>
                      setFormData({ ...formData, description1: e.target.value })
                    }
                    onBlur={() => clearError("description1")} // Clear the error when the input field is blurred
                    errormessage={validationErrors.description1}
                    style={{
                      borderColor: validationErrors.description1
                        ? "red"
                        : "initial",
                    }}
                  />
                </div>
              </div>
              {mediaads && (
                <>
                  <div
                    style={{ display: "flex" }}
                    className="responsive-column"
                  >
                    <div
                      style={{
                        flex: 1,
                        marginLeft: "10px",
                        marginRight: "12px",
                      }}
                    >
                      <InputComponent
                        label="Landscape Marketing Image(1:9:1)"
                        fullWidth
                        id="fullWidth"
                        type="text"
                        placeholder="Add the URL of the image you want to use for the ad"
                        value={formData.landscape}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            landscape: e.target.value,
                          })
                        }
                        onBlur={() => clearError("landscape")} // Clear the error when the input field is blurred
                        errormessage={validationErrors.landscape}
                        style={{
                          borderColor: validationErrors.landscape
                            ? "red"
                            : "initial",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        flex: 1,
                        marginLeft: "10px",
                        marginRight: "12px",
                      }}
                      className="responsive-column"
                    >
                      <InputComponent
                        label="Portraite Marketing Image(4:5)"
                        fullWidth
                        id="fullWidth"
                        type="text"
                        placeholder="Add the URL of the image you want to use for the ad"
                        value={formData.Portraite}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            Portraite: e.target.value,
                          })
                        }
                        onBlur={() => clearError("Portraite")} // Clear the error when the input field is blurred
                        errormessage={validationErrors.Portraite}
                        style={{
                          borderColor: validationErrors.Portraite
                            ? "red"
                            : "initial",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        flex: 1,
                        marginLeft: "10px",
                        marginRight: "12px",
                      }}
                      className="responsive-column"
                    >
                      <InputComponent
                        label="Square Marketing Image(1:1)"
                        fullWidth
                        id="fullWidth"
                        type="text"
                        placeholder="Add the URL of the image you want to use for the ad"
                        value={formData.sqaure}
                        onChange={(e) =>
                          setFormData({ ...formData, sqaure: e.target.value })
                        }
                        onBlur={() => clearError("sqaure")} // Clear the error when the input field is blurred
                        errormessage={validationErrors.sqaure}
                        style={{
                          borderColor: validationErrors.sqaure
                            ? "red"
                            : "initial",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <InputComponent
                      fullWidth
                      label="Video URL"
                      id="fullWidth"
                      type="text"
                      placeholder="Add the URL of the video you want to use for the ad."
                      value={formData.videourl}
                      onChange={(e) =>
                        setFormData({ ...formData, videourl: e.target.value })
                      }
                      onBlur={() => clearError("videourl")} // Clear the error when the input field is blurred
                      errormessage={validationErrors.videourl}
                      style={{
                        borderColor: validationErrors.videourl
                          ? "red"
                          : "initial",
                      }}
                    />
                  </div>
                </>
              )}
              <div style={{ display: "flex" }} className="responsive-column">
                <div
                  style={{ flex: 1, marginLeft: "10px", marginRight: "12px" }}
                >
                  <InputComponent
                    label="Business Name"
                    fullWidth
                    id="fullWidth"
                    type="text"
                    placeholder="Add your business name"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    onBlur={() => clearError("businessName")} // Clear the error when the input field is blurred
                    errormessage={validationErrors.businessName}
                    style={{
                      borderColor: validationErrors.businessName
                        ? "red"
                        : "initial",
                    }}
                  />
                </div>
                <div style={{ flex: 1, marginTop: "4px" }}>
                  <CustomDropdown
                    label="Button label"
                    placeholder="Select a label that best suits your ad"
                    fullWidth
                    options={options}
                    value={formData.selectedOption}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        selectedOption: e.target.value,
                      })
                    }
                    onBlur={() => clearError("selectedOption")} // Clear the error when the input field is blurred
                    errormessage={validationErrors.selectedOption}
                    style={{
                      borderColor: validationErrors.selectedOption
                        ? "red"
                        : "initial",
                    }}
                  />
                </div>
              </div>
              <div>
                <InputComponent
                  fullWidth
                  label="Website URL"
                  id="fullWidth"
                  type="text"
                  placeholder="Add the URL of the landing page you want to redirect to"
                  value={formData.websiteURL}
                  onChange={(e) =>
                    setFormData({ ...formData, websiteURL: e.target.value })
                  }
                  onBlur={() => clearError("websiteURL")} // Clear the error when the input field is blurred
                  errormessage={validationErrors.websiteURL}
                  style={{
                    borderColor: validationErrors.websiteURL
                      ? "red"
                      : "initial",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginTop: "10px",
                }}
              >
                <div style={{ marginRight: "10px" }}>
                  <Button
                    onClick={handleBack}
                    style={{ width: "15vh" }}
                    variant="contained"
                  >
                    Back
                  </Button>
                </div>
                <div>
                  <Button
                    style={{ width: "15vh" }}
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </CardContent>
      </Card>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogContent
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "20vh",
          }}
        >
          <p>
            <AiFillCheckCircle style={{ fontSize: "2em", color: "blue" }} />
          </p>
          <p>Submitted</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FOrm1;
