import { useState } from 'react';

const Pagination = ({pages, setPages, pageNumber}) => {
    const [page, setPage] = useState(pageNumber);
    let middlePagination;

    if (pages <= 5) {
        middlePagination = [...Array(pages)].map((_, idx) => (
            <button
                key={idx + 1}
                onClick={() => setPage(idx + 1)}
                disabled={page === idx + 1}
                >{idx + 1}</button>
        ));
    } else {
        const startValue = Math.floor((page - 1) / 5) * 5;

        middlePagination = (
            <>
            {[...Array(5).map((_, idx) => (
                <button
                key={startValue + idx + 1}
                disabled={page === idx + 1}
                onClick={() => setPage(startValue + idx + 1)}
                >
                    {startValue + idx + 1}
                </button>
            ))]}
            <button>...</button>
            <button onClick={() => setPage(pages)}>{pages}</button>
            </>
        );
        if (page > 5) {
            if (pages - page >= 5) {
              middlePagination = (
                <>
                  <button onClick={() => setPage(1)}>1</button>
                  <button>...</button>
                  <button onClick={() => setPage(startValue)}>{startValue}</button>
                  {[...Array(5)].map((_, idx) => (
                    <button
                      key={startValue + idx + 1}
                      disabled={page === startValue + idx + 1}
                      onClick={() => setPage(startValue + idx + 1)}
                    >
                      {startValue + idx + 1}
                    </button>
                  ))}
      
                  <button>...</button>
                  <button onClick={() => setPage(pages)}>{pages}</button>
                </>
              );
            } else {
              let amountLeft = pages - page + 5;
              middlePagination = (
                <>
                  <button onClick={() => setPage(1)}>1</button>
                  <button>...</button>
                  <button onClick={() => setPage(startValue)}>{startValue}</button>
                  {[...Array(amountLeft)].map((_, idx) => (
                    <button
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

  return (
    pages > 1 && (
        <div>
          <button
            onClick={() => setPage((page) => page - 1)}
            disabled={page === 1}
          >
            &#171;
          </button>
          {middlePagination}
          <button
            onClick={() => setPage((page) => page + 1)}
            disabled={page === pages}
          >
            &#187;
          </button>
        </div>
      )
  )
};

export default Pagination;
