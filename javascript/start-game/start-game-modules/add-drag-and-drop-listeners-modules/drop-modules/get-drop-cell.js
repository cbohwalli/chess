export default function getDropCell(target) {

  if(target.id.substring(0,4) === "cell") {
    return target;
  }

  return target.parentNode;
}