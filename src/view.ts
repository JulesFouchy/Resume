import { h, text } from 'hyperapp'
import { State } from './state'
import WhitePage from './components/WhitePage'
import Header from './components/Header'
import LanguageSelector from './components/LanguageSelector'
import Section from './components/Section'
import Skill from './components/Skill'

export default (state: State) => {
const l = state.language
return h(
    'div', {},
[
    LanguageSelector(state),
    WhitePage([
        Header([
            h('p', {}, text('Jules Fouchy')),
            h('p', {}, text({
                EN: 'Software Engineering student',
                FR: 'Ingénieur Logiciel étudiant',
            }[l])),
        ]),
        Section({
            EN: 'Overview',
            FR: 'En bref',
        }[l],
            text({
                EN: 'Software Engineering student',
                FR: 'Ingénieur Logiciel étudiant',
            }[l])
        ),
        Section({
            EN: 'Skills',
            FR: 'Compétences',
        }[l],
            Skill('C++', 4)
        ),
    ])
])
}