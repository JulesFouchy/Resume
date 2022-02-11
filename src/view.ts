import {h, text} from 'hyperapp'

import Header from './components/Header'
import LanguageSelector from './components/LanguageSelector'
import LineJump from './components/LineJump'
import {GithubLink, WebsiteLink} from './components/Link'
import Section from './components/Section'
import Skill from './components/Skill'
import WhitePage from './components/WhitePage'
import {State} from './state'

export default (state: State) => {
  const l = state.language
  return h(
    'div', {},
[
    // LanguageSelector(state),
    WhitePage([
        Header([
            h('h2', {id: 'myName'}, text('Jules Fouchy')),
            h('h2', {id: 'myTitle'}, 
            [
                h('span', {}, text({
                    EN: 'Software Engineer',
                    FR: 'Ingénieur Informatique',
                }[l])),
            ]
            ),
            h('div', 
            { 
                id: 'contact-infos'
            },
            [
                h('p', {}, h('i', {}, text('jules.fouchy@ntymail.com'))),
                h('p', {}, h('i', {}, text({
                    EN: '+337 83 94 51 77',
                    FR: '07 83 94 51 77',
                }[l]))),
            ]
            )
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
                [
                    text({
                        EN: 'I am in love with programming; I enjoy all the creative freedom it offers us. I am particularly interested in 2D and 3D image generation, fulfilling my artistic interests.',
                        FR: 'Passionné de programmation, j\'adore les possibilités de création infinies que cela nous offre. Je m\'intéresse particulièrement à la génération d\'images en 2D et 3D, conciliant ainsi mon côté artistique.',
                    }[l]),
                    h('br', {}),
                    text({
                        EN: 'I also appreciate web technologies for their versatility and the possibility to share content with the world.',
                        FR: 'J\'apprécie également les technologies web pour leur versatilité et les possibilités de partage de contenu qu\'elles nous offrent.',
                    }[l]),
                ]
                ),
                Section({
                    EN: 'Skills',
                    FR: 'Compétences',
                }[l],
                    h('span', {id: 'skills'}, [
                        Skill('C++', 4),
                        Skill('Maths', 4),
                        Skill({
                            EN: 'Software Architecture',
                            FR: 'Architecture Logicielle',
                        }[l], 4),
                        Skill('Processing / p5.js', 5),
                        Skill('OpenGL', 4),
                        Skill('Unity', 3),
                        Skill('Vulkan', 3),
                        Skill('Typescript / Javascript', 4),
                        Skill('Shaders (glsl)', 4),
                        Skill('React', 3),
                        Skill('Python', 2),
                        Skill({
                            EN: 'Static Site Generators',
                            FR: 'Générateurs de sites statiques',
                        }[l], 4),
                        Skill('Machine Learning', 2),
                        Skill('C#', 3),
                    ])
                ),
                Section({
                    EN: 'Education',
                    FR: 'Études',
                }[l],
                [
                    h('b', {}, text({
                        EN: 'Master\'s degree: Science of Images',
                        FR: 'Master 2 : Science de l\'Image',
                    }[l])),
                    h('span', {}, text({
                        EN: 'Institut Gaspard Monge - Université Gustave Eiffel',
                        FR: 'Institut Gaspard Monge - Université Gustave Eiffel',
                    }[l])),
                    h('i', {}, text({
                        EN: 'September 2020 - June 2021',
                        FR: 'Septembre 2020 - Juin 2021',
                    }[l])),
                    LineJump(),
                    h('b', {}, text({
                        EN: 'IMAC Creative Engineer',
                        FR: 'Ingénieur Créatif IMAC',
                    }[l])),
                    h('span', {}, text({
                        EN: 'Université Gustave Eiffel',
                        FR: 'Université Gustave Eiffel',
                    }[l])),
                    h('i', {}, text({
                        EN: 'September 2018 - June 2021',
                        FR: 'Septembre 2018 - Juin 2021',
                    }[l])),
                    LineJump(),
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
                        EN: 'Internship at Ubisoft, as an Engine Programmer Assistant',
                        FR: 'Stage à Ubisoft, en tant que Programmeur Moteur Assistant',
                    }[l])),
                    h('i', {}, text({
                        EN: 'April 2021 - September 2021',
                        FR: 'Avril 2021 - Septembre 2021',
                    }[l])),
                    LineJump(),
                    h('b', {}, text({
                        EN: 'Teaching generative art at IMAC',
                        FR: 'Cours d\'art génératif à l\'IMAC',
                    }[l])),
                    h('i', {}, text({
                        EN: 'September 2020 - today',
                        FR: 'Septembre 2020 - aujourd\'hui',
                    }[l])),
                    LineJump(),
                    h('b', {}, text({
                        EN: 'Teaching mathematics at IMAC',
                        FR: 'Cours de mathématiques à l\'IMAC',
                    }[l])),
                    h('i', {}, text({
                        EN: 'September 2019 - June 2021',
                        FR: 'Septembre 2019 - Juin 2021',
                    }[l])),
                    LineJump(),
                    h('b', {}, text({
                        EN: 'Internship at Virtual Arts (Cambridge, UK) to work on their game engine',
                        FR: 'Stage à Virtual Arts (Cambridge, Royaume-Uni) pour développer leur moteur de jeux',
                    }[l])),
                    h('i', {}, text({
                        EN: 'June 2020 - September 2020',
                        FR: 'Juin 2020 - Septembre 2020',
                    }[l])),
                    LineJump(),
                    h('b', {}, text({
                        EN: 'Teaching programming for teenagers at Centre Paris Anim\' Victor Gelez',
                        FR: 'Initiation à la programmation pour les 10-12 ans au Centre Paris Anim\' Victor Gelez',
                    }[l])),
                    h('i', {}, text({
                        EN: 'September 2019 - June 2020',
                        FR: 'Septembre 2019 - Juin 2020',
                    }[l])),
                    LineJump(),
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
                    h('span', {}, [
                        h('b', {}, text('p6')),
                        WebsiteLink('https://julesfouchy.github.io/p6-docs/'),
                        GithubLink('https://github.com/JulesFouchy/p6'),
                    ]),
                    h('span', {}, text({
                        EN: 'A simple C++ library for 2D drawing.',
                        FR: 'Une librairie simple d\'utilisation pour faire du dessin 2D en C++.',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text('Cool')),
                        GithubLink('https://github.com/CoolLibs'),
                    ]),
                    h('span', {}, text({
                        EN: 'A C++ framework designed for computer graphics software.',
                        FR: 'Un framework C++ pour les logiciels d\'infographie.',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text('CoolLab')),
                        GithubLink('https://github.com/CoolLibs/Lab'),
                    ]),
                    h('span', {}, text({
                        EN: 'A patchwork of tools for generative artists, based on Cool. It features a node-based editor for distance-field modeling.',
                        FR: 'Un patchwork d\'outils d\'art génératif, basé sur Cool. On y trouve notamment un éditeur nodal pour de la géométrie en champs de distance.',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text('Django')),
                        GithubLink('https://github.com/JulesFouchy/Django'),
                    ]),
                    h('span', {}, text({
                        EN: 'A VJing software based on a particle system, powered by compute shaders.',
                        FR: 'Un logiciel de VJing basé sur un système de particules, propulsé par des compute shaders.',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text('Imacubes')),
                        GithubLink('https://github.com/JulesFouchy/IMACUBES'),
                        h('i', {}, text({
                            EN: 'School project',
                            FR: 'Projet scolaire',
                        }[l])),
                    ]),
                    h('span', {}, text({
                        EN: 'A voxel editor offering a few tools and procedural terrain generation, supporting user-written shaders, shadows and ambient occlusion.',
                        FR: 'Un éditeur de voxels offrant quelques outils et de la génération procédurale de terrain, avec des shaders customisables, ombres et occlusion ambiante.',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text('Mirror, Lasers & Robots')),
                        GithubLink('https://github.com/guillaume-haerinck/imac-tower-defense'),
                        h('i', {}, text({
                            EN: 'School project',
                            FR: 'Projet scolaire',
                        }[l])),
                    ]),
                    h('span', {}, text({
                        EN: 'A tower defense game based on redirecting lasers through mirrors, built with an ECS architecture.',
                        FR: 'Un jeu de tower defense basé sur la redirection de lasers avec des miroirs, construit avec une architecture ECS.',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text('Tangram')),
                        GithubLink('https://github.com/JulesFouchy/Tangram2'),
                    ]),
                    h('span', {}, text({
                        EN: 'A 2D drawing software mainly focused on the possibility to write your own fragment shaders (in a Shadertoy-like fashion).',
                        FR: 'Un logiciel de dessin 2D, essentiellement basé sur la possibilité d\'écrire ses propres fragment shaders (à la Shadertoy).',
                    }[l])),
                ]
                ),
                Section({
                    EN: 'Classes I teach',
                    FR: 'Cours que j\'enseigne',
                }[l],
                [
                    h('span', {}, [
                        h('b', {}, text('Clean Code with C++')),
                        WebsiteLink('https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/'),
                    ]),
                    h('span', {}, text({
                        EN: 'Focused on software architecture and good coding practices.',
                        FR: 'Sur l\'architecture logicielle et les bonnes pratiques de développement.',
                    }[l])),
                ]
                ),
                Section({
                    EN: 'Web Projects',
                    FR: 'Projets Web',
                }[l],
                [
                    h('span', {}, [
                        h('b', {}, text('DixImac')),
                        GithubLink('https://github.com/JulesFouchy/DixImac'),
                        WebsiteLink('http://diximac.herokuapp.com/'),
                    ]),
                    h('span', {}, text({
                        EN: 'An online version of the Dixit board game.',
                        FR: 'Une version en ligne du jeu de société Dixit.',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text('DixImac Gallery')),
                        GithubLink('https://github.com/JulesFouchy/DixImacGallery'),
                        WebsiteLink('https://julesfouchy.github.io/DixImacGallery/'),
                    ]),
                    h('span', {}, text({
                        EN: 'A website to showcase the custom cards made for the DixImac game.',
                        FR: 'Un site web pour exposer les cartes créées spécialement pour le jeu DixImac.',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text('Arcade Terminal of Photography')),
                        GithubLink('https://github.com/JulesFouchy/ArcadeTerminalOfPhotography'),
                        WebsiteLink('https://julesfouchy.github.io/ArcadeTerminalOfPhotography/'),
                    ]),
                    h('span', {}, text({
                        EN: 'A simple picture editor, meant to explain the basics of images and their digital representation as pixels.',
                        FR: 'Une petite application de retouche photo, destinée à expliquer quelques concepts de base sur les images et leur représentation en pixels.',
                    }[l])),
                ]
                ),
            ]),
        ])
    ])
])
}