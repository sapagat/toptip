import TipsCollection from '@/services/Tips/Collection'

describe ('Tips Collection', () => {
  let collection

  beforeEach(() => {
    collection = new TipsCollection()
  })

  afterEach(() => {
    window.localStorage.clear()
  })

  it ('finds stored tips', () => {
    collection.store({id: 1, name: 'A bar'})

    let stored = collection.find(1)

    expect(stored.id).to.eq(1)
    expect(stored.name).to.eq('A bar')
  })

  it('can store multiple tips', () => {
    collection.store({id: 1, name: 'A bar'})
    collection.store({id: 2, name: 'Another bar'})

    expect(collection.find(1).id).to.equal(1)
    expect(collection.find(2).id).to.equal(2)
  })

  it('can provide all tips at once', () => {
    collection.store({id: 1, name: 'A bar'})
    collection.store({id: 2, name: 'Another bar'})

    let stored = collection.all()

    expect(stored.length).to.equal(2)
  })

  it('only stores once tips with the same id', () => {
    collection.store({id: 1, name: 'A bar'})

    collection.store({id: 1, name: 'Another name'})

    expect(collection.all().length).to.equal(1)
  })

  it('updates the tip when it is already stored', () => {
    collection.store({id: 1, name: 'A bar'})

    collection.store({id: 1, name: 'Another name'})

    expect(collection.find(1).name).to.equal('Another name')
  })

  it('can remove a tip', () => {
    collection.store({id: 1, name: 'A bar'})

    collection.delete(1)

    try {
      collection.find(1)
    }catch (e) {
      expect(e.message).to.equal('Tip not found')
    }
  })
})
