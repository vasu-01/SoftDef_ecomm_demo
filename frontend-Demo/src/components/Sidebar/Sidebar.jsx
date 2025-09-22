import ProductsPage from "../../pages/ProductsPage.jsx";

const Sidebar = ({
  isMobile = false,
  isOpen = false,
  onClose = () => {},
  onProductsFiltered = () => {},
}) => {
  // Mobile overlay mode
  // if (isMobile) {
  //   return (
  //     <div
  //       className={`fixed inset-0 z-40 md:hidden ${
  //         isOpen ? "" : "pointer-events-none"
  //       }`}
  //     >
  //       <div
  //         className={`absolute inset-0 bg-black transition-opacity ${
  //           isOpen ? "opacity-50" : "opacity-0"
  //         }`}
  //         onClick={onClose}
  //       />

  //       <aside
  //         className={`absolute left-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300
  //           ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
  //       >
  //         <div className="p-4 overflow-auto h-full">
  //           <div className="flex justify-end">
  //             <button onClick={onClose} className="p-2 cursor-pointer">
  //               <IoClose />
  //             </button>
  //           </div>

  //           <FilterPanel isMobile onClose={onClose} />
  //         </div>
  //       </aside>
  //     </div>
  //   );
  // }

  // Desktop/Tablet  mode
  return (
    // <div className="mt-5 md:mt-5">
    //   <div className="ml-5">
    //     <FilterPanel />
    //     {/* <ProductsPage /> */}
    //   </div>
    // </div>
    <div className="">
      <ProductsPage
        isMobile={isMobile}
        isOpen={isOpen}
        onClose={onClose}
        onProductsFiltered={onProductsFiltered}
      />
    </div>
  );
};

export default Sidebar;
