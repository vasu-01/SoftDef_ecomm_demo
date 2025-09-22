import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Banner from "../components/UI/Banner.jsx";
import FilterBar from "../components/Filter/FilterBar.jsx";
import ProductCard from "../components/ProductCard/ProductCard.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import { IoIosArrowForward } from "react-icons/io";
import { products } from "../DemoData/data.js";

const Home = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // all products by default
  const [filteredProducts, setFilteredProducts] = useState(products);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 6;

  const handleProductsFiltered = useCallback((filtered) => {
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, []);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    document.body.style.overflow = mobileSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileSidebarOpen]);

  return (
    <>
      <Navbar />

      <div className="flex flex-row mt-5 ">
        {/* Desktop/Tablet sidebar */}
        <div className="hidden md:block w-[45%] md:w-[30%] lg:w-[25%]">
          <Sidebar onProductsFiltered={handleProductsFiltered} />
        </div>

        {/* Main area */}
        <div className="flex-1 px-4 md:px-0 relative">
          {/* Mobile opener button */}
          <button
            className="md:hidden cursor-pointer top-20 left-4 z-50 p-2 bg-gray-100 rounded-full shadow"
            onClick={() => setMobileSidebarOpen(true)}
            aria-label="Open filters"
          >
            <IoIosArrowForward size={20} className="text-[#40bfff]" />
          </button>

          <div className=" md:pr-5">
            <Banner />
            <FilterBar onProductsFiltered={handleProductsFiltered} />
            {/* Products come from state */}
            <ProductCard products={currentProducts} />
            <Pagination
              className="fixed bottom-0 z-10 "
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      {/* Mobile overlay sidebar */}
      <Sidebar
        isMobile
        isOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
        onProductsFiltered={handleProductsFiltered}
      />

      <Footer />
    </>
  );
};

export default Home;
