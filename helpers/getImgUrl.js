export const getImgUrl = (image, size, defaultURL) => {
  if (image?.data?.attributes?.formats?.[size]) {
    return image.data.attributes.formats[size].url;

  } else if (image?.data?.attributes?.formats?.medium) {
    return image.data.attributes.formats.medium.url;

  } else if (image?.data?.attributes?.formats?.small) {
    return image.data.attributes.formats.small.url;

  } else {
    return defaultURL;
  }
};
