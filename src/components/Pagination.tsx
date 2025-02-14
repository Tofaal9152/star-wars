import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as UIPagination,
} from "@/components/ui/pagination";

const Pagination = ({
  totalPages,
  setPage,
  page,
}: {
  totalPages: any;
  setPage: (page: number) => void;
  page: number;
}) => {

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return; // Prevent invalid pages
    setPage(newPage);
    console.log(page);
  };

  const renderPaginationItems = () => {
    const items = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              className={`cursor-pointer px-3 py-1 rounded ${
                page === i ? "bg-teal-800 text-white" : ""
              }`}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            className={`cursor-pointer px-3 py-1 rounded ${
              page === 1 ? "bg-teal-800 text-white" : ""
            }`}
            onClick={() => handlePageChange(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (page > 2) {
        items.push(
          <PaginationItem key="start-ellipsis">
            <span className="px-2">...</span>
          </PaginationItem>
        );
      }

      if (page > 1 && page < totalPages) {
        items.push(
          <PaginationItem key={page}>
            <PaginationLink
              className="cursor-pointer px-3 py-1 rounded bg-teal-800 text-white"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (page < totalPages - 1) {
        items.push(
          <PaginationItem key="end-ellipsis">
            <span className="px-2">...</span>
          </PaginationItem>
        );
      }

      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            className={`cursor-pointer px-3 py-1 rounded ${
              page === totalPages ? "bg-teal-800 text-white" : ""
            }`}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <UIPagination className="p-1 mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`cursor-pointer ${
              page === 1 ? "opacity-50 pointer-events-none" : ""
            }`}
            onClick={() => handlePageChange(page - 1)}
          />
        </PaginationItem>

        {renderPaginationItems()}

        <PaginationItem>
          <PaginationNext
            className={`cursor-pointer ${
              page === totalPages ? "opacity-50 pointer-events-none" : ""
            }`}
            onClick={() => handlePageChange(page + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  );
};

export default Pagination;
