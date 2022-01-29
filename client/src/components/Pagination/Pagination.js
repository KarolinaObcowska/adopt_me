const Pagination = ({ pages, page, setPage }) => {
  let middlePagination;

  if (pages <= 4) {
    middlePagination = [...Array(pages)].map((_, idx) => (
      <button
        className="text-xl px-2"
        key={idx + 1}
        onClick={() => setPage(idx + 1)}
        disabled={page === idx + 1}
      >
        {idx + 1}
      </button>
    ));
  } else {
    const startValue = Math.floor((page - 1) / 4) * 4;

    middlePagination = (
      <>
        {[
          ...Array(4).map((_, idx) => (
            <button
              className="text-xl pl-10"
              key={startValue + idx + 1}
              disabled={page === idx + 1}
              onClick={() => setPage(startValue + idx + 1)}
            >
              {startValue + idx + 1}
            </button>
          )),
        ]}
        <button className="text-xl pl-10">...</button>
        <button className="text-xl pl-10" onClick={() => setPage(pages)}>
          {pages}
        </button>
      </>
    );
    if (page > 4) {
      if (pages - page >= 4) {
        middlePagination = (
          <>
            <button className="text-xl pl-10" onClick={() => setPage(1)}>
              1
            </button>
            <button className="text-xl pl-10">...</button>
            <button
              className="text-xl pl-10"
              onClick={() => setPage(startValue)}
            >
              {startValue}
            </button>
            {[...Array(4)].map((_, idx) => (
              <button
                className="text-xl pl-10"
                key={startValue + idx + 1}
                disabled={page === startValue + idx + 1}
                onClick={() => setPage(startValue + idx + 1)}
              >
                {startValue + idx + 1}
              </button>
            ))}

            <button className="text-xl pl-10">...</button>
            <button className="text-xl pl-10" onClick={() => setPage(pages)}>
              {pages}
            </button>
          </>
        );
      } else {
        let amountLeft = pages - page + 4;
        middlePagination = (
          <>
            <button className="text-xl pl-10" onClick={() => setPage(1)}>
              1
            </button>
            <button className="text-xl pl-10">...</button>
            <button className="text-xl pl-10" onClick={() => setPage(startValue)}>{startValue}</button>
            {[...Array(amountLeft)].map((_, idx) => (
              <button
              className="text-xl pl-10"
                key={startValue + idx + 1}
                disabled={page === startValue + idx + 1}
                style={
                  pages < startValue + idx + 1 ? { display: "none" } : null
                }
                onClick={() => setPage(startValue + idx + 1)}
              >
                {startValue + idx + 1}
              </button>
            ))}
          </>
        );
      }
    }
  }
  console.log(page)
  return (
    pages > 1 && (
      <div className="relative mb-10">
        <button
          className={"text-xl pl-10"}
          onClick={() => setPage((page) => page - 1)}
          disabled={page === 1}
        >
          &#171;
        </button>
        {middlePagination}
        <button
          className="text-xl pl-10"
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
