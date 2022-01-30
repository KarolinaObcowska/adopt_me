const Pagination = ({ pages, page, setPage }) => {
  
 
  
  console.log(page);
  return (
    pages > 1 && (
      <div className="relative mb-10">
        <button
          className="text-xl p-2 mr-10 text-green-600"
          onClick={() => setPage((page) => page - 1)}
          disabled={page === 1}
        >
          &#171;
        </button>
        {[...Array(pages)].map((_, idx) => (
          <button
          className={ page === idx + 1 ? `bg-yellow-500 text-xl px-2  rounded-md text-white` : `mx-2 text-xl px-2 text-green-700`}
          key={idx + 1}
          onClick={() => setPage(idx + 1)}
          disabled={page === idx + 1}
          >
        {idx + 1}
        </button>
          ))
        }
        <button
          className="text-xl p-2 ml-10 text-green-600"
          onClick={() => setPage((page) => page + 1)}
          disabled={page === pages}
        >
          &#187;
        </button>
      </div>
    )
  );
};

export default Pagination;
