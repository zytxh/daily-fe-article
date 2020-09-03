let primitiveData = 1;
let refData = {
  val: 1,
};
function handlePrimitiveData() {
  primitiveData++;
}
function handleRefData() { 
  refData.val++;
}
module.exports = {
  primitiveData,
  refData,
  handlePrimitiveData,
  handleRefData,
};
