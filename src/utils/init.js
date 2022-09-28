String.prototype.toSearch = function () {
  let searchData = {}
  if (this.toString() != '') {
    const search = new URLSearchParams(this.toString())
    search.forEach((value, key) => {
      searchData[key] = value
    })
  }
  return searchData
}