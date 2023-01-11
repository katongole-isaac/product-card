import React from "react";
import "./app.css";
import DesktopVersionImage from "./instructions/images/image-product-desktop.jpg";
import mobileVersionImage from "./instructions/images/image-product-mobile.jpg";

import cartIcon from "./instructions/images/icon-cart.svg";

export default function () {
  return (
    <>
      <div className="container">
        <div className="card-container">
          <div className="card-image">
            <picture>
              <source media="(max-width: 375px)" srcSet={mobileVersionImage} />

              <source media="(max-width: 560px)" srcSet={mobileVersionImage} />
              <img srcSet={DesktopVersionImage} />
            </picture>
          </div>

          <div className="card-content">
            <div className="card-small-header">
              <p>Perfume</p>
            </div>

            <div className="card-heading">
              <h2>Gabrielle Essence Eau De Parfum</h2>
            </div>

            <div className="card-description-text">
              <p>
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
            </div>
            <div className="card-price-section">
              <span className="new-price"> $149.99</span>
              <span className="old-price">
                <small>
                  <s> $169.99</s>
                </small>
              </span>
            </div>
            <button className="btn">
              <img src={cartIcon} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
