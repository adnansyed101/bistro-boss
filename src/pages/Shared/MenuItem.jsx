import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="flex gap-2">
      <img
        src={image}
        alt={name}
        className="w-[120px]"
        style={{ borderRadius: "0 200px 200px 200px" }}
      />
      <div>
        <h3 className="uppercase">{name} ----------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">$ {price}</p>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
};

export default MenuItem;
