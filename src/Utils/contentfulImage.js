export const optimizeContentfulImage = (url, width, height) =>
  `https:${url}?fm=jpg&fl=progressive&w=${width}&h=${height}`;
