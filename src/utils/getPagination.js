export const getPagination = (page, size) => {
  //page-> page number     size-> how many in one page
  const limit = size ? +size : 5;
  //page 0 ->offset 0 page 1->offset size
  // if 0 base indexing
  const offset = page * size ? page * size : 0;
  return { limit, offset };
};
