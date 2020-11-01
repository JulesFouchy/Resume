import { h, text } from 'hyperapp'
import { State } from './state'
import WhitePage from './components/WhitePage'
import Header from './components/Header'
import LanguageSelector from './components/LanguageSelector'

export default (state: State) =>
h('div', {}, [
    LanguageSelector(state),
    WhitePage([
        Header([
            h('p', {}, text('Jules Fouchy')),
            h('p', {}, text({
                EN: 'Software Engineering student',
                FR: 'Ingénieur Logiciel étudiant',
            }[state.language])),
        ])
    ])
])