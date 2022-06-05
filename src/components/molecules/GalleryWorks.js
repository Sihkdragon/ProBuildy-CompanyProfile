import React from "react";

const GalleryWorks = () => {
  const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {counts.map((count) => {
        return (
          <div className="overflow-hidden">
            <img
              src={require(`../../assets/img/works/works${count}.jpg`)}
              alt="worksPhoto"
              srcset=""
              className="w-80 h-80 object-cover hover:scale-125  duration-500"
            />
          </div>
        );
      })}
    </div>
  );
};

export default GalleryWorks;
