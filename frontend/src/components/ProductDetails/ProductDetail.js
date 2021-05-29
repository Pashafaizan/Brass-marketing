import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../middleWare/requestHandler";
import Header from "../Header/Header";
import "./productDetail.css";
import ProductDescription from "../ProductDescription/ProductDescription";
function ProductDetail() {
  const [product, setProduct] = useState(0);
  const { productId } = useParams();

  useEffect(() => {
    fetchData(`/product?id=${productId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((data) => {
      setProduct(data);
    });
  }, []);

  console.log(product);
  return (
    <div>
      <Header />

      <div className="product-container">
        <div className="productDetails">
          <div className="product-left-container">
            <img
              className="product_img"
              src={`http://localhost:7860/images/${product.fileName}`}
            />
          </div>
          <div className="product-right-container">
            <div className="product_name">
              Light Breathable Color Blocl Patchwork shirts
            </div>
            <div className="product-price">
              <strong>Rupees</strong> <span>699</span>
            </div>
            <div>Availability</div>
          </div>
        </div>

        <div className="product-description">
          <h4>Product Description</h4>
          <ProductDescription product={product} />
        </div>
        <h4>Review</h4>

        <div className="product-reviews"></div>
      </div>
    </div>
  );
}

export default ProductDetail;
