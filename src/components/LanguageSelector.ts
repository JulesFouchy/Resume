import { h, text } from 'hyperapp'
import { State } from '../state'
import LanguageButton from './LanguageButton'

export default (state: State) => h(
    'div',
{
    class: 'language-selector'
},
[
    LanguageButton(state, 'EN'),
    text('|'),
    LanguageButton(state, 'FR'),
]
)