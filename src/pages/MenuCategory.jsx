import PropTypes from "prop-types";
import MenuItem from "./Shared/MenuItem";
import Cover from "./Shared/Cover";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  coverImg: PropTypes.string,
};

export default MenuCategory;
