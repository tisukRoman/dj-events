export const getImgUrl = (image, size, defaultURL) => {
  if (image?.data?.attributes?.formats?.[size]) {
    return image.data.attributes.formats[size].url;
  }
  return defaultURL;
};
