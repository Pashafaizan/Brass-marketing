import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Container from "@material-ui/core/Container";
import UploadButton from "../UploadButton";
import { fetchData } from "../../middleWare/requestHandler";
import SnackBarComponent from "../../CommonComponnents/SnackBarComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Form() {
  const [fileName, setfileName] = useState("No file");
  const [filePath, setFilePath] = useState();
  const [item_name, setName] = useState();
  const [item_price, setPrice] = useState();
  const [item_description, setDescription] = useState();
  const [placeOFOrigin, setPlaceOfOrigin] = useState();
  const [material, setItemMaterial] = useState();
  const [itemColor, setItemColor] = useState();
  const [itemType, setItemType] = useState();
  const [mirrorColor, setMirrorColor] = useState();
  const [productName, setProductName] = useState();
  const [itemWeight, setItemWeight] = useState();
  const [itemShape, setItemShape] = useState();
  const [itemBrandName, setItemBrandName] = useState();
  const [Application, setApplication] = useState();
  const [usage, setItemUsage] = useState();
  const [style, setItemStyle] = useState();

  const [finalPrice, setFinalPrice] = useState();
  const [originalPath, setOrignalPath] = useState();
  const [message, setMessage] = useState();
  const [severity, setSeverity] = useState();
  const [open, setOpen] = useState();
  const classes = useStyles();
  let payload = {
    fileName,
    filePath,
    item_price,
    item_name,
    item_description,
    finalPrice,
    originalPath,
    placeOFOrigin,
    material,
    itemColor,
    itemType,
    mirrorColor,
    productName,
    itemWeight,
    itemShape,
    itemBrandName,
    Application,
  };
  const validateData = (payload) => {
    let result = {
      message: "",
      status: true,
    };
    if (payload.name === "") {
      result.message = "Please enter name";
      result.status = false;
    }
    if (payload.price === "") {
      result.message = "Please enter price";
      result.status = false;
    }
    if (payload.description === "") {
      result.message = "Please enter description";
      result.status = false;
    }

    return result;
  };

  const handleInputSelect = (event) => {
    console.log("handle Input select ");
    let name = event.target.files[0].name;
    setFilePath(event.target.files[0]);
    if (name.length >= 15) {
      name =
        name.slice(0, 13) + "..." + name.slice(name.length - 5, name.length);
    }
    setfileName(name);
  };

  const sendData = async () => {
    console.log(fileName);
    console.log(filePath);

    var formData = new FormData();
    formData.append("file", filePath);

    let requestOptions = {
      method: "POST",
      body: formData,
    };

    fetchData("/upload", requestOptions).then((data) => {
      if (data == null) {
        setSeverity("error");
        setMessage("Unable to submit the form. Please login again.");
        setOpen(true);
        // setTimeout(() => {
        //   return history.push("/");
        // }, 2000);
      }
      payload = {
        ...payload,
        fileName: data.name,
        filePath: data.path,
      };
      fetchData("/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then((data) => {
        setMessage(data.message);
        setSeverity("success");
        setOpen(true);
        // clearForm();
      });
    });
  };

  //   const data ={
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json" },

  //     body: JSON.stringify(paylaod)
  //   }
  //   const requestOptions = {
  //     method: 'POST',
  //     body:formData

  // };
  // fetch('http://localhost:8080/api/v1/upload', requestOptions)
  //     .then(response =>{
  //       setOrignalPath(response.path);
  //       console.log(response.path);
  //       payload = {
  //               ...payload,
  //               fileName: data.filename,
  //             };

  //       fetch('http://localhost:8080/api/v1/form',data).then(res=>{
  //       console.log("sucessfull");
  //     });
  //     })

  // }

  return (
    <>
      <div className>
        <Container maxWidth="lg">
          <h1>Fill Form Details</h1>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            action="http://localhost:8080/api/v1/upload"
            method="post"
            encType="multipart/form-data"
          >
            <TextField
              id="outlined-secondary"
              label="Name of Items"
              variant="outlined"
              color="primary"
              style={{ width: "60%" }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Price of Items"
              variant="outlined"
              color="primary"
              style={{ width: "60%" }}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Description of Model"
              variant="outlined"
              color="primary"
              style={{ width: "60%" }}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Final Price"
              variant="outlined"
              color="primary"
              style={{ width: "90%" }}
              onChange={(e) => {
                setFinalPrice(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Place Of origin"
              variant="outlined"
              color="primary"
              style={{ width: "90%" }}
              onChange={(e) => {
                setPlaceOfOrigin(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Material"
              variant="outlined"
              color="primary"
              style={{ width: "90%" }}
              onChange={(e) => {
                setItemMaterial(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Item Color"
              variant="outlined"
              color="primary"
              style={{ width: "90%" }}
              onChange={(e) => {
                setItemColor(e.target.value);
              }}
            />
          
            <TextField
              id="outlined-secondary"
              label="Item Type"
              variant="outlined"
              color="primary"
              style={{ width: "90%" }}
              onChange={(e) => {
                setItemType(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Mirror Color"
              variant="outlined"
              color="primary"
              style={{ width: "90%" }}
              onChange={(e) => {
                setMirrorColor(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Product Name"
              variant="outlined"
              color="primary"
              style={{ width: "90%" }}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Brand Name"
              variant="outlined"
              color="primary"
              style={{ width: "90%" }}
              onChange={(e) => {
                setItemBrandName(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Mirror Color"
              variant="outlined"
              color="primary"
              style={{ width: "90%" }}
              onChange={(e) => {
                setMirrorColor(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Weight"
              variant="outlined"
              color="primary"
              style={{ width: "90%" }}
              onChange={(e) => {
                setItemWeight(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Item Shape"
              variant="outlined"
              color="primary"
              style={{ width: "90%" }}
              onChange={(e) => {
                setItemShape(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Usage"
              variant="outlined"
              color="primary"
              style={{ width: "90%" }}
              onChange={(e) => {
                setItemUsage(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Applcation"
              variant="outlined"
              color="primary"
              style={{ width: "90%" }}
              onChange={(e) => {
                setApplication(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Item Style"
              variant="outlined"
              color="primary"
              style={{ width: "90%" }}
              onChange={(e) => {
                setItemStyle(e.target.value);
              }}
            />
            <div>
              <input
                type="file"
                id="fileUploaded"
                name="fileUploaded"
                // hidden="hidden"
                onChange={(event) => handleInputSelect(event)}
              />
              {/* <UploadButton onChange={(event) => handleInputSelect(event)}/> */}
              <Button
                variant="contained"
                color="primary"
                onClick={sendData}
                value="submit"
              >
                Primary
              </Button>
            </div>
          </form>
        </Container>
      </div>

      {open && (
        <SnackBarComponent
          setOpen={(e) => {
            setOpen(false);
          }}
          message={message}
          severity={severity}
        />
      )}
    </>
  );
}

export default Form;
