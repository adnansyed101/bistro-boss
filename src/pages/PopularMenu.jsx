import SectionTitle from "../components/SectionTitle";
import useMenu from "../hooks/useMenu";
import MenuCategory from "./MenuCategory";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
      <MenuCategory items={popular} />
    </section>
  );
};

export default PopularMenu;
