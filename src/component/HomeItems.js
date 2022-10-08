import { Link } from "react-router-dom";
const HomeItems = ({ data }) => {
  if (data) {
    return (
      <div className="homeItems">
        {data.map((item) => {
          return (
            <Link to={`/product/${item._id}`}>
              <div className="homeItem" key={item._id}>
                <img
                  src={require(`../images/${item.image}`)}
                  alt={item.name}
                  className="itemPic"
                />
                <div className="itemDesc">
                  <p>{item.name}</p>
                  <h1>Rp {item.price.toLocaleString()}</h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
};

export default HomeItems;
