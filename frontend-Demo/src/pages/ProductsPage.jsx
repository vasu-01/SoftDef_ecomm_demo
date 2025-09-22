import { useEffect, useMemo, useState } from "react";
import FilterPanel from "../components/Filter/FilterPanel.jsx";
import { products } from "../DemoData/data.js";
import { IoClose } from "react-icons/io5";

const ProductsPage = ({
  isMobile = false,
  isOpen = false,
  onClose = () => {},
  onProductsFiltered = () => {},
}) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeBrand, setActiveBrand] = useState(null);
  const [showHotDeals, setShowHotDeals] = useState(false);

  // filter products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const categoryMatch = activeCategory
        ? p.category === activeCategory
        : true;
      const brandMatch = activeBrand ? p.brand === activeBrand : true;
      const hotMatch = showHotDeals ? !!p.isHot : true;
      return categoryMatch && brandMatch && hotMatch;
    });
  }, [activeCategory, activeBrand, showHotDeals]);
  // console.log("CategoryMatch: ", filteredProducts);

  useEffect(() => {
    console.log(
      "ProductPage: calling onProductsfiltered with ",
      filteredProducts,
      "items"
    );

    onProductsFiltered(filteredProducts);
  }, [filteredProducts]);

  // Mobile view
  if (isMobile) {
    return (
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          isOpen ? "" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black transition-opacity ${
            isOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={onClose}
        />

        <aside
          className={`absolute left-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-4 overflow-auto h-full">
            <div className="flex justify-end">
              <button onClick={onClose} className="p-2 cursor-pointer">
                <IoClose />
              </button>
            </div>

            <FilterPanel
              isMobile
              onClose={onClose}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeBrand={activeBrand}
              setActiveBrand={setActiveBrand}
              showHotDeals={showHotDeals}
              setShowHotDeals={setShowHotDeals}
            />
          </div>
        </aside>
      </div>
    );
  }

  // Desktop view
  return (
    <div className="mt-5 md:mt-5">
      <div className="ml-5">
        <FilterPanel
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeBrand={activeBrand}
          setActiveBrand={setActiveBrand}
          showHotDeals={showHotDeals}
          setShowHotDeals={setShowHotDeals}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
