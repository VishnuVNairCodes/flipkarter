import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const {
    coverImg,
    brand,
    longDescription,
    discountedPrice,
    originalPrice,
    discountPercent,
    sizes,
  } = product;
  return (
    <article className="product-card-container">
      <div className="product-card-img-container">
        <img className="product-card-img" src={coverImg} alt="product card" />
      </div>
      <div className="product-card-info-container">
        <div className="product-card-info-header">
          <h1 className="product-card-info-brand">{brand}</h1>
          <div className="product-card-info-desc-container">
            <p className="product-card-info-desc">{longDescription}</p>
            <img
              className="product-card-info-flipkart-assured"
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              alt="product card"
            />
          </div>
        </div>
        <div className="product-card-info-price-container">
          <p className="discounted-price">₹{discountedPrice}</p>
          <p className="original-price">
            <del>₹{originalPrice}</del>
          </p>
          <p className="discount-percent">{discountPercent}% off</p>
        </div>
        <div className="product-card-sizes-container">
          <p className="product-card-sizes-heading">Size</p>
          {sizes.map((size) => (
            <p key={size} className="product-card-sizes">
              {size}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export { ProductCard };
