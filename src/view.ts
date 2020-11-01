import { h, text } from 'hyperapp'
import { State } from './state'
import Link from './components/Link'
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
                ])
            ]),
            h('div',
            {
                id: 'column2',
            },
            [
                Section({
                    EN: 'Work Experience',
                    FR: 'Expériences professionnelles',
                }[l],
                [
                    h('b', {}, text({
                        EN: 'Maths courses at IMAC',
                        FR: 'Cours de maths à l\'IMAC',
                    }[l])),
                    h('i', {}, text({
                        EN: 'September 2019 - today',
                        FR: 'Septembre 2019 - aujourd\'hui',
                    }[l])),
                    h('br', {}),
                    h('b', {}, text({
                        EN: 'Initiation to programming for teenagers at Centre Paris Anim\' Victor Gelez',
                        FR: 'Initiation à la programmation pour les 10-12 ans au Centre Paris Anim\' Victor Gelez',
                    }[l])),
                    h('i', {}, text({
                        EN: 'September 2019 - June 2020',
                        FR: 'Septembre 2019 - Juin 2020',
                    }[l])),
                    h('br', {}),
                    h('b', {}, text({
                        EN: 'Maths private courses',
                        FR: 'Cours particuliers de mathématiques',
                    }[l])),
                    h('i', {}, text({
                        EN: 'September 2017 - today',
                        FR: 'Septembre 2017 - aujourd\'hui',
                    }[l])),
                ]
                ),
                Section({
                    EN: 'Software Projects',
                    FR: 'Projets Logiciel',
                }[l],
                [
                    h('b', {}, text('Django')),
                    Link('https://github.com/JulesFouchy/Django'),
                    h('span', {}, text({
                        EN: 'A VJing software based on a particle system, powered by compute shaders.',
                        FR: 'Un logiciel de VJing basé sur un système de particules, propulsé par des compute shaders.',
                    }[l])),
                    h('br', {}),
                    h('b', {}, text('Imacubes')),
                    Link('https://github.com/JulesFouchy/IMACUBES'),
                    h('span', {}, text({
                        EN: 'A voxel editor offering a few tools and procedural terrain generation, supporting user-written shaders, shadows and ambient occlusion.',
                        FR: 'Un éditeur de voxels offrant quelques outils et de la génération procédurale de terrain, avec des shaders customisables, ombres et occlusion ambiante.',
                    }[l])),
                    h('br', {}),
                    h('b', {}, text('Mirror, Lasers & Robots')),
                    Link('https://github.com/guillaume-haerinck/imac-tower-defense'),
                    h('span', {}, text({
                        EN: 'A tower defense game based on redirecting lasers through mirrors.',
                        FR: 'Un jeu de tower defense basé sur la redirection de lasers avec des miroirs.',
                    }[l])),
                    h('br', {}),
                    h('b', {}, text('Tangram')),
                    Link('https://github.com/JulesFouchy/Tangram2'),
                    h('span', {}, text({
                        EN: 'A 2D image software mainly focused on the possibility to write your own fragment shaders (in a Shadertoy-like fashion).',
                        FR: 'Un logiciel de dessin 2D, essentiellement basé sur la possibilité d\'écrire ses propres fragment shaders.',
                    }[l])),
                ]
                ),
                Section({
                    EN: 'Web Projects',
                    FR: 'Projets Web',
                }[l],
                [
                    h('b', {}, text('DixImac')),
                    Link('http://diximac.herokuapp.com/'),
                    Link('https://github.com/JulesFouchy/DixImac'),
                    h('span', {}, text({
                        EN: 'An online version of the Dixit board game.',
                        FR: 'Une version en ligne du jeu de société Dixit.',
                    }[l])),
                    h('br', {}),
                    h('b', {}, text('DixImac Gallery')),
                    Link('https://julesfouchy.github.io/DixImacGallery/'),
                    Link('https://github.com/JulesFouchy/DixImacGallery'),
                    h('span', {}, text({
                        EN: 'A website to showcase the custom cards made for the DixImac game.',
                        FR: 'Un site web pour exposer les cartes créées spécialement pour le jeu DixImac.',
                    }[l])),
                    h('br', {}),
                    h('b', {}, text('Arcade Terminal of Photography')),
                    Link('https://julesfouchy.github.io/ArcadeTerminalOfPhotography/'),
                    Link('https://github.com/JulesFouchy/ArcadeTerminalOfPhotography'),
                    h('span', {}, text({
                        EN: 'A simple photo editor, meant to explain the basics of images and their digital representation as pixels.',
                        FR: 'Une petite application de retouche photo, destinée à expliquer quelques concepts de base sur les images et leur représentation en pixels.',
                    }[l])),
                ]
                ),
            ]),
        ])
    ])
])
}