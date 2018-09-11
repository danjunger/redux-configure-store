import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

export function configureStore(middlewares, rootReducer, enableDevTools = true) {
  const composer = enableDevTools ? composeWithDevTools : compose
  const history = createBrowserHistory()
  const store = createStore(
    connectRouter(history)(rootReducer),
    composer(
      applyMiddleware(
        routerMiddleware(history),
        ...middlewares
      ),
    )
  )

  return { store, history }
}
