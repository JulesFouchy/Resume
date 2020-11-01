import { state } from './state'
import view from './view'
import { app } from 'hyperapp'

app({ 
    init: state,
    view: view,
    node: document.body,
})