class Navigator {
  static id () {
    return location.hash.split('/')[2]
  }

  static goTo (path) {
    location.hash = path
  }
}

export default Navigator
