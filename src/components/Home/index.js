import "./index.css";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <h1 className="home-title">Welcome to SaasAro !!</h1>
        <p className="home-des">
          Welcome to SaasAro Hotel, your go-to destination for booking hotel
          rooms online. Our platform makes it easy to find and reserve the
          perfect accommodations for your next trip. With a wide range of hotels
          to choose from, you're sure to find something that meets your needs
          and budget. Our user-friendly interface allows you to search for
          hotels by location, amenities, price, and more. You can even read
          reviews from other travelers to help you make informed decisions.
          Plus, our booking process is secure and hassle-free, so you can book
          your stay with confidence. At SaasAro Hotel, we're committed to
          providing you with the best possible experience. Whether you're
          traveling for business or pleasure, we're here to help you find the
          perfect hotel room for your needs. So why wait? Start browsing our
          selection of hotels today and book your next stay with SaasAro Hotel!
        </p>
      </div>

      <img
        className="home-image"
        src="https://res.cloudinary.com/dxnwg4dyz/image/upload/v1679397517/marten-bjork-n_IKQDCyrG0-unsplash_rylcrt.jpg"
        alt="Home Banner"
      />
    </div>
  );
};

export default Home;
