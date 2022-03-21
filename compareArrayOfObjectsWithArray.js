//profile ki fields upr neechy arhi theen uske liye order kiya hai taake map lga kr table populate krdun

const mapOrder = (array, order, key) => array.sort((a, b) => order.indexOf(a[key]) > order.indexOf(b[key]) ? 1 : -1)

const ordered_array = mapOrder(content.peopleFields, Object.keys(formProfile), 'fieldName');
