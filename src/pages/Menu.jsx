import { Helmet } from "react-helmet-async";
import Cover from "./Shared/Cover";
import menuImg from "../assets/menu/banner3.jpg";
import useMenu from "../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import SectionTitle from "../components/SectionTitle";
import desertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg"
import saladImg from "../assets/menu/salad-bg.jpg"
import soupImg from "../assets/menu/soup-bg.jpg"

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main Cover */}
      <Cover img={menuImg} title={"Our Menu"} />
      <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"} />
      <MenuCategory items={offered} />
      {/* Dessert menu items */}
      <MenuCategory items={desserts} title={"dessert"} coverImg={desertImg} />
      {/* Pizza */}
      <MenuCategory items={pizzas} title={"pizza"} coverImg={pizzaImg} />
      {/* Soup */}
      <MenuCategory items={soups} title={"soup"} coverImg={soupImg} />
      {/* Salads */}
      <MenuCategory items={salads} title={"salad"} coverImg={saladImg} />

    </div>
  );
};

export default Menu;
