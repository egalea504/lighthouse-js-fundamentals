const calculateRectangleArea = function (length, width) {
  if (length && width > 0)
  return length *= width;
  else console.log(undefined);
}
const calculateTriangleArea = function (base, height) {
  if (base && height > 0)
  return (base *= height) / 2;
  else console.log(undefined);

}
const calculateCircleArea = function (radius) {
  if (radius > 0)
  return Math.PI *= radius * radius;
  else console.log(undefined);
}