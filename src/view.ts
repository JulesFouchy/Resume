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
        h('div',
        {
            id: 'columns-wrapper'
        },
        [
            h('div',
            {
                id: 'column1',
            },
            [
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
                    h('span', {id: 'skills'}, [
                        Skill('C++', 4),
                        Skill('Maths', 4),
                        Skill('OpenGL', 4),
                        Skill('Processing / p5.js', 5),
                        Skill('glsl', 4),
                        Skill('Unity', 3),
                        Skill('Typescript', 4),
                        Skill('Hyperapp (JS framework)', 4),
                    ])
                ),
            ]),
            h('div',
            {
                id: 'column2',
            },
            [
                text('col2')
            ]),
        ])
    ])
])
}