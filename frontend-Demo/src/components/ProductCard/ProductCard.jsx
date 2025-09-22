import Rating from "../Rating/Rating";

const ProductCard = ({ products = [] }) => {
  // console.log("ProductCard rendering with: ", products.length, "item");

  if (products.length === 0) {
    return <p className="text-center text-gray-500">No Product Found!</p>;
  }
  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid:cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center cursor-pointer">
        {products.map((product) => (
          <div
            key={product.id}
            className="border   rounded-lg relative h-65 w-65 md:h-72 md:w-64 lg:h-85 lg:w-60 flex-flex-col "
          >
            {/* HOT badge */}
            {product.isHot && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                HOT
              </span>
            )}

            {/* Image */}
            <div className=" flex justify-center items-center ">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-41 lg:h-48 w-full "
              />
            </div>

            <div className="flex flex-col items-center  gap-y-2 md:gap-y-3 lg:mt-5">
              {/* Title */}
              <h3 className="mt-2 font-bold text-sm md:text-lg">
                {product.name}
              </h3>

              <div>
                <Rating value={product.ratingValue} />
              </div>

              {/* Prices */}
              <div className="flex items-center gap-2 text-sm mt-1  flex-wrap">
                <span className="text-blue-600 md:text-base font-bold ">
                  ${product.discountPrice}
                </span>
                {/* Rating */}
                <span className="line-through  text-gray-400">
                  ${product.price}
                </span>
                <span className="text-red-500 ">
                  {product.discountPercent}% Off
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

ProductCard.jsx;

// const ProductCard = () => {
//   return (
//     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {products.map((p) => (
//         <div
//           key={p.id}
//           className="border rounded-lg p-4 relative flex flex-col"
//         >
//           {p.isHot && (
//             <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//               HOT
//             </span>
//           )}

//           <div className="aspect-[4/3] flex items-center justify-center">
//             <img
//               src={p.imageUrl}
//               alt={p.name}
//               className="max-h-full object-contain"
//             />
//           </div>

//           <h3 className="mt-3 text-sm font-medium truncate">{p.name}</h3>

//           <div className="mt-2 flex items-center gap-2 text-sm">
//             <span className="text-blue-600 font-semibold">
//               ${p.discountPrice}
//             </span>
//             <span className="line-through text-gray-400">${p.price}</span>
//             <span className="text-red-500">{p.discountPercent}%</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

export default ProductCard;
