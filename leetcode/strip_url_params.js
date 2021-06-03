const stripUrlParams = (url, filteredArray) => {
  const originalUrl = url.split("?")[0];
  const queryParam = url.split("?")[1];

  const elements = queryParam && queryParam.split("&");

  let dictionary = {};

  if (elements && Array.isArray(elements)) {
    for (let element of elements) {
      const key = element.split("=")[0];
      const value = element.split("=")[1];

      if (!dictionary[key]) {
        dictionary[key] = value;
      }
    }
  }

  if (filteredArray && Array.isArray(filteredArray)) {
    for (let filteredKey of filteredArray) {
      delete dictionary[filteredKey];
    }
  }

  let newQueryParam = [];

  for (const [key, value] of Object.entries(dictionary)) {
    newQueryParam.push(`${key}=${value}`);
  }

  return !newQueryParam.length
    ? originalUrl
    : `${originalUrl}?${newQueryParam.join("&")}`;
};

console.log(stripUrlParams("https://www.someurl.com?a=1&b=2&a=2")); // 'https://www.someurl.com?a=1&b=2'
console.log(stripUrlParams("https://www.someurl.com?a=1&b=2&a=2", ["b"])); // 'https://www.someurl.com?a=1'
console.log(stripUrlParams("https://www.someurl.com", ["b"])); // 'https://www.someurl.com'

// Time: O(4 * N)
// Space: O(N)
