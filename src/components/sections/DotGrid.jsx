

const DottedGrid = () => {
    return (
      <div className="w-[60px] inset-y-7 h-[60px] flex flex-wrap items-center justify-center gap-1">
        {Array.from({ length: 25 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-gray-300"
            style={{ fontSize: "10px" }}
          >
            ✚
          </div>
        ))}
      </div>
    );
  };
  
  export default DottedGrid;
  