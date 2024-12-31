import PropTypes from "prop-types";
import FoodCard from "./Shared/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

OrderTab.propTypes = {
  items: PropTypes.array,
};

export default OrderTab;
