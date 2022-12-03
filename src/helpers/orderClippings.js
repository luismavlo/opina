export const orderClippings = (clippings) => {

  const orderClippings = clippings.sort((a, b) => {
    return b.id - a.id;
  });


  return orderClippings.slice(0, 3);

}