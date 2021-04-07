import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();

  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      weight: data.weight,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `http://localhost:5055/addProducts`;
    console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server site responding", res));
  };
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "a2ef7b72158ccce1b07bf3dc534e6da0");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Container>
        <Header></Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue="Product name" ref={register} />
          <br />
          <input name="price" defaultValue="Product price" ref={register} />
          <br />
          <input
            name="exampleRequired"
            type="file"
            onChange={handleImageUpload}
          />
          <br />
          <input type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default AddProducts;
