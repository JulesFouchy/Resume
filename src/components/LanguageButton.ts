import { h, text } from 'hyperapp'
import { State } from '../state'

export default (state: State, language: string) => h(
    'span',
{
    class: 'language-button' + (state.language === language ? ' selected' : '' ),
    onclick: (state: State): State => ({...state, language}) 
},
    text(language)
)