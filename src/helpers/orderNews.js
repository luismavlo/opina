export const orderNews = (news) => {

  const filterByTrueFeatured = news.filter(
    (singleNews) => singleNews.featured === true
  );

  const orderNews = filterByTrueFeatured.sort((a, b) => {
    return b.id - a.id;
  });


  return orderNews.slice(0, 3);

}