import mapModules from '@config/modules.json'

export default class ModulesLoader {
  constructor(router, store) {
    window.appModules = []
    this.store = store
    this.router = router
  }

  async load() {
    const promises = mapModules.map((i) => this._loadExternalModule(i.url))

    await Promise.all(promises)

    window.appModules.forEach((module) => {
      this._registerRoutes(module)
      this._registerStoreModules(module)
    })
  }

  _registerRoutes(module) {
    if (module.route) {
      this.router.addRoutes([module.route])
    }
  }

  _registerStoreModules(module) {
    if (module.store && module.store.modules) {
      module.store.modules.forEach((m) => {
        this.store.registerModule(m.name, m.module)
      })
    }
  }

  _loadExternalModule(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.async = true
      script.addEventListener('load', resolve)
      script.addEventListener('error', () => {
        reject(new Error(`Error loading ${url}`))
      })
      script.src = url
      document.head.appendChild(script)
    })
  }
}
