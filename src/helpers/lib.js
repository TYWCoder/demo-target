/**
* Checks if an object has a nested property with a given path.
* @param {Object} obj - The object to check.
* @param {String} propertyPath - The dot-separated path of the property.
* @returns {Boolean} True if the object has the property, false otherwise.
*/

export const hasOwnNestedProperty = (obj, propertyPath) => {
  if (obj === null || typeof obj !== 'object' || !propertyPath)
    return false;

  const properties = propertyPath.split('.');
  let object = obj;

  for (var i = 0; i < properties.length; i++) {
    var prop = properties[i];

    if (!object || !object.hasOwnProperty(prop)) {
      return false;
    } else {
      object = object[prop];
    }
  }

  return true;
};
