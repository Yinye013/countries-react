/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
  darkMode,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center gap-3 lg:text-[1.8rem] lg:gap-12 mb-8">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={page === currentPage ? "active" : "activated"}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
