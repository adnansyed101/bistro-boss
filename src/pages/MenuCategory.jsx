import PropTypes from "prop-types";
import MenuItem from "./Shared/MenuItem";
import Cover from "./Shared/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link
        to={`/order/${title}`}
        className="btn btn-outline border-0 border-b-4 mt-4"
      >
        Order Now
      </Link>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  coverImg: PropTypes.string,
};

export default MenuCategory;
