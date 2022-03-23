export const usePagination = () => {
  const paginationHandler = (list, limit) => {
    let pages_lists = {};
    let page = 1;
    while (list.length) {
      const pageList = list.splice(0, limit);
      pages_lists[page] = pageList;
      page++;
    }
    return pages_lists;
  };
  return { paginationHandler };
};
