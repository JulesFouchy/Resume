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
                        Skill({
                            EN: 'Hyperapp (JS framework)',
                            FR: 'Hyperapp (framework JS)',
                        }[l], 4),
                    ])
                ),
                Section({
                    EN: 'Education',
                    FR: 'Études',
                }[l],
                [
                    h('b', {}, text({
                        EN: 'IMAC Creative Engineer',
                        FR: 'Ingénieur Créatif IMAC',
                    }[l])),
                    h('span', {}, text({
                        EN: 'Université Gustave Eiffel',
                        FR: 'Université Gustave Eiffel',
                    }[l])),
                    h('i', {}, text({
                        EN: 'September 2018 - today',
                        FR: 'Septembre 2018 - aujourd\'hui',
                    }[l])),
                    h('br', {}),
                    h('b', {}, text({
                        EN: 'Preparatory class in mathematics and physics',
                        FR: 'Classe préparatoire en mathématiques et physique (MPSI-MP)',
                    }[l])),
                    h('span', {}, text({
                        EN: 'Lycée Saint-Louis, Paris',
                        FR: 'Lycée Saint-Louis, Paris',
                    }[l])),
                    h('i', {}, text({
                        EN: 'September 2015 - June 2018',
                        FR: 'Septembre 2015 - Juin 2018',
                    }[l])),
                ]),
                Section({
                    EN: 'Languages',
                    FR: 'Langues',
                }[l],
                [
                    h('span', {}, [
                        h('b', {}, text({
                            EN: 'French',
                            FR: 'Français',
                        }[l])),
                        h('span', {}, text({
                            EN: ' (Native)',
                            FR: ' (Natif)',
                        }[l]))
                    ]),
                    h('span', {}, [
                        h('b', {}, text({
                            EN: 'English',
                            FR: 'Anglais',
                        }[l])),
                        h('span', {}, text({
                            EN: ' (Fluent)',
                            FR: ' (Courant)',
                        }[l]))
                    ]),
                    h('span', {}, [
                        h('b', {}, text({
                            EN: 'German',
                            FR: 'Allemand',
                        }[l])),
                        h('span', {}, text({
                            EN: ' (Intermediate)',
                            FR: ' (Intermédiaire)',
                        }[l]))
                    ]),
                ]
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