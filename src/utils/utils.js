// Utility

export function parseDates(content) {
  // Uses regex to parse all dates from content
  const re = /([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{1,4})+/g; // 02/02/2002
  return String(content).match(re) || []; // returns an array of strings that present in specified format
}

export function tmstmpToString(timestamp) {
  // Returns a string representing timestamp in default format
  const date = new Date(timestamp);
  return (
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  );
}

export function getImgName(category) {
  switch (category) {
    case "task":
      return "favorite.svg";
    case "random":
      return "geo.svg";
    case "idea":
      return "sun.svg";
    default:
      return "";
  }
}

export function getCategoryName(category) {
  switch (category) {
    case "task":
      return "Task";
    case "random":
      return "Random Thought";
    case "idea":
      return "Idea";
    default:
      return "";
  }
}

export function formDataToMap(formData) {
  let arr = Array.from(formData);
  return arr.reduce((prev, current) => {
    prev[current[0]] = current[1];
    return prev;
  }, {});
}
