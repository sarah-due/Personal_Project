
module.exports = {
  testFunc,
  showCategories
}

function testFunc() {
  return('I am a working function!')
}

function showCategories(connection) {
  return connection('categories').select()
}
