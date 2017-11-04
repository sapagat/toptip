class Navigator {
  static id () {
    return parseInt(location.hash.split('/')[2])
  }

  static goTo (path) {
    location.hash = path
  }
}

export default Navigator
