import { h, text } from 'hyperapp'
import WhitePage from './components/WhitePage'
import Header from './components/Header'
import { State } from './state'

export default (state: State) =>
WhitePage([
    Header([
        h('p', {}, text('Jules Fouchy')),
        h('p', {}, text({
            EN: 'Software Engineering student',
            FR: 'Ingénieur Logiciel étudiant',
        }[state.language])),
    ])
])