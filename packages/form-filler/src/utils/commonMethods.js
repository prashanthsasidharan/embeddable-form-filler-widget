function deepClone(obj) {
  return JSON.parse(convertToString(obj));
}

function convertToString(obj){
  return JSON.stringify(obj);
}

function areObjectsEqual(obj1, obj2) {
  return convertToString(obj1) === convertToString(obj2);
}

function deleteObjProp(obj, key) {
  const { [key]: removedValue, ...rest } = obj;
  return rest;
}

export { deepClone, areObjectsEqual, deleteObjProp };