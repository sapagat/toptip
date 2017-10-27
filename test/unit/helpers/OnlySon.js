export function onlySonOf(aWrapper) {
  let son = aWrapper.vm.$children[0]
  return {
    property (propertyName) {
      return son[propertyName]
    },

    fire (event, data) {
      son.$emit(event, data)
    }
  }
}