import Navigator from '../infrastructure/Navigator'
import Service from './Service'

class Router extends Service {
  subscribe () {
    this.subscribeTo('router', 'go.registry', () => {
      Navigator.goTo('/registry')
    })

    this.subscribeTo('router', 'go.review', (data) => {
      Navigator.goTo(`/review/${data.id}`)
    })

    this.subscribeTo('router', 'go.main', () => {
      Navigator.goTo('/')
    })

    this.subscribeTo('router', 'provide.details', () => {
      let id = Navigator.id()
      this.publish('router', 'details.ready', { id })
    })
  }
}

export default Router
