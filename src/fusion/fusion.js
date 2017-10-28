const fusion = {
  created () {
    this.nucleus.subscribe()
  },

  data () {
    return this.nucleus.data()
  },

  mounted () {
    this.nucleus.start()

    Object.entries(this.events).forEach(([event, handler]) => {
      this.onlySon().$on(event, this.nucleus[handler].bind(this.nucleus))
    })
  },

  methods: {
    onlySon () {
      return this.$children[0]
    }
  }
}

export default fusion
