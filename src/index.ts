import { state, State } from './state'
import view from './view'
import { app } from 'hyperapp'

const tryFind = (identifier: string) => {
    const search = window.location.search
    const opt = identifier+'='
    let begin = search.indexOf(opt)
    if (begin !== -1) begin += opt.length
    const end = search.indexOf('&')
    return begin === - 1 ? ''
                    : end === - 1 ? search.substring(begin)
                      : search.substring(begin, end)
}

const getState = (): State => {
    const language = (tryFind('lang') || tryFind('language')).toUpperCase()
    return (language === 'FR' || language === 'EN') ? {...state, language} : state
}

app({ 
    init: getState(),
    view: view,
    node: document.body,
})