const fusion = {
  created () {
    this.core.subscribe()
  },

  data () {
    return this.core.data()
  },

  mounted () {
    this.core.start()

    Object.entries(this.events).forEach(([event, handler]) => {
      this.onlySon().$on(event, this.core[handler])
    })
  },

  methods: {
    onlySon () {
      return this.$children[0]
    }
  }
}

export default fusion
