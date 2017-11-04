const localStorage = window.localStorage
const KEY = 'tips'

class Collection {
  constructor () {
    this.prepare()
  }

  store (tip) {
    if (this.exists(tip.id)) {
      this.update(tip)
    } else {
      this.create(tip)
    }
  }

  exists (id) {
    let collection = this.read()
    let stored = collection.find((tip) => {
      return tip.id === id
    })
    return stored !== undefined
  }

  find (id) {
    if (!this.exists(id)) throw new Error('Tip not found')

    let collection = this.read()
    let tip = collection.find((tip) => {
      return tip.id === id
    })
    return tip
  }

  all () {
    return this.read()
  }

  create (tip) {
    let collection = this.read()
    collection.push(tip)
    this.write(collection)
  }

  update (updatedTip) {
    let collection = this.read()
    collection.forEach((storedTip) => {
      if (storedTip.id !== updatedTip.id) return

      Object.assign(storedTip, updatedTip)
    })
    this.write(collection)
  }

  delete (id) {
    let collection = this.read()
    collection.forEach((storedTip, position) => {
      if (storedTip.id !== id) return

      collection.splice(position, 1)
    })
    this.write(collection)
  }

  prepare () {
    if (this.read() !== null) return

    this.write([])
  }

  read () {
    return JSON.parse(localStorage.getItem(KEY))
  }

  write (collection) {
    localStorage.setItem(KEY, JSON.stringify(collection))
  }
}

export default Collection
