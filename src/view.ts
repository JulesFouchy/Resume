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
    LanguageSelector(state),
    WhitePage([
        Header([
            h('h2', {id: 'myName'}, text('Jules Fouchy')),
            h('h2', {id: 'myTitle'}, 
            [
                h('span', {}, text({
                    EN: 'Software Engineer, specialized in Computer Graphics',
                    FR: 'Ingénieur Informatique, spécialisé en Synthèse d\'Image',
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
                        Skill('Python', 4),
                        Skill('Shaders (glsl / hlsl)', 4),
                        Skill('Typescript / Javascript', 4),
                        Skill('Web', 3),
                        Skill('React', 3),
                        Skill('Machine Learning', 2),
                        Skill('C#', 3),
                    ])
                ),
                Section({
                    EN: 'Education',
                    FR: 'Études',
                }[l],
                [
                    h('span', {}, [
                        h('b', {}, text({
                            EN: 'IMAC Creative Engineer',
                            FR: 'Ingénieur Créatif IMAC',
                        }[l])),
                        WebsiteLink('https://www.ingenieur-imac.fr/'),
                    ]),
                    h('span', {}, text({
                        EN: 'Université Gustave Eiffel',
                        FR: 'Université Gustave Eiffel',
                    }[l])),
                    h('i', {}, text({
                        EN: 'September 2018 - June 2021',
                        FR: 'Septembre 2018 - Juin 2021',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text({
                            EN: 'Master\'s degree: Science of Images',
                            FR: 'Master 2 : Science de l\'Image',
                        }[l])),
                        WebsiteLink('https://igm.univ-gustave-eiffel.fr/formations/master-2-sciences-de-limage'),
                    ]),
                    h('span', {}, text({
                        EN: 'Institut Gaspard Monge - Université Gustave Eiffel',
                        FR: 'Institut Gaspard Monge - Université Gustave Eiffel',
                    }[l])),
                    h('i', {}, text({
                        EN: 'September 2020 - June 2021',
                        FR: 'Septembre 2020 - Juin 2021',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text({
                            EN: 'Preparatory class in mathematics and physics (MPSI-MP)',
                            FR: 'Classe préparatoire en mathématiques et physique (MPSI-MP)',
                        }[l])),
                        WebsiteLink('https://fr.wikipedia.org/wiki/Lyc%C3%A9e_Saint-Louis'),
                    ]),
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
                    h('span', {}, [
                        h('b', {}, text({
                            EN: 'Teaching Programming, Math and Computer Graphics at ICAN',
                            FR: 'Cours de Programmation, Mathématiques et Synthèse d\'Image à l\'ICAN',
                        }[l])),
                        WebsiteLink('https://www.ican-design.fr/'),
                    ]),
                    h('i', {}, text({
                        EN: 'March 2024 - Today',
                        FR: 'Mars 2024 - Aujourd\'hui',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text({
                            EN: 'Teaching C++ and Software Architecture at IMAC',
                            FR: 'Cours de C++ et Architecture Logiciel à l\'IMAC',
                        }[l])),
                        WebsiteLink('https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/'),
                        WebsiteLink('https://www.ingenieur-imac.fr/'),
                    ]),
                    h('i', {}, text({
                        EN: 'September 2021 - Today',
                        FR: 'Septembre 2021 - Aujourd\'hui',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text({
                            EN: 'Rendering Engine Programmer at Spiders',
                            FR: 'Programmeur Moteur de Rendu chez Spiders',
                        }[l])),
                        WebsiteLink('https://www.spiders-games.com/'),
                    ]),
                    h('i', {}, text({
                        EN: 'March 2022 - September 2023',
                        FR: 'Mars 2022 - Septembre 2023',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text({
                            EN: 'Teaching Creative Coding at IMAC',
                            FR: 'Cours de Creative Coding à l\'IMAC',
                        }[l])),
                        WebsiteLink('https://julesfouchy.github.io/Learn--Generative-Art/'),
                        WebsiteLink('https://www.ingenieur-imac.fr/'),
                    ]),
                    h('i', {}, text({
                        EN: 'September 2020 - June 2022',
                        FR: 'Septembre 2020 - Juin 2022',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text({
                            EN: 'Teaching Mathematics at IMAC',
                            FR: 'Cours de Mathématiques à l\'IMAC',
                        }[l])),
                        WebsiteLink('https://julesfouchy.github.io/miscellaneous/soutien-maths'),
                        WebsiteLink('https://www.ingenieur-imac.fr/'),
                    ]),
                    h('i', {}, text({
                        EN: 'September 2019 - June 2021',
                        FR: 'Septembre 2019 - Juin 2021',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text({
                            EN: 'Internship at Ubisoft on Unity, as an Engine Programmer Assistant on Just Dance',
                            FR: 'Stage à Ubisoft sur Unity, en tant que Programmeur Moteur Assistant sur Just Dance',
                        }[l])),
                        WebsiteLink('https://www.ubisoft.com/en-us/company/about-us'),
                    ]),
                    h('i', {}, text({
                        EN: 'April 2021 - September 2021',
                        FR: 'Avril 2021 - Septembre 2021',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text({
                            EN: 'Internship at Virtual Arts (Cambridge, UK) to work on their game engine',
                            FR: 'Stage à Virtual Arts (Cambridge, Royaume-Uni) pour développer leur moteur de jeux',
                        }[l])),
                        WebsiteLink('https://www.virtualarts.co.uk/'),
                    ]),
                    h('i', {}, text({
                        EN: 'June 2020 - September 2020',
                        FR: 'Juin 2020 - Septembre 2020',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text({
                            EN: 'Teaching programming for teenagers at Centre Paris Anim\' Victor Gelez',
                            FR: 'Initiation à la programmation pour les 10-12 ans au Centre Paris Anim\' Victor Gelez',
                        }[l])),
                        WebsiteLink('https://cpa-victorgelez.ifac.asso.fr/'),
                    ]),
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
                        EN: 'September 2017 - Today',
                        FR: 'Septembre 2017 - Aujourd\'hui',
                    }[l])),
                ]
                ),
                Section({
                    EN: 'Software Projects',
                    FR: 'Projets Logiciel',
                }[l],
                [
                    h('span', {}, [
                        h('b', {}, text('Coollab')),
                        WebsiteLink('https://coollab-art.com/'),
                        GithubLink('https://github.com/CoolLibs/Lab'),
                    ]),
                    h('span', {}, text({
                        EN: 'A generative-art software with a node-based interface. Featuring 2D and 3D patterns and effects, particles, and more!',
                        FR: 'Un logiciel d\'art génératif avec une interface nodale. Effets et motifs 2D et 3D, particules, et plein d\'autres !',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text('p6')),
                        WebsiteLink('https://julesfouchy.github.io/p6-docs/'),
                        GithubLink('https://github.com/JulesFouchy/p6'),
                    ]),
                    h('span', {}, text({
                        EN: 'A simple C++ library for 2D drawing, inspired by p5.js',
                        FR: 'Une librairie simple d\'utilisation pour faire du dessin 2D en C++, inspirée de p5.js',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text('Cool')),
                        GithubLink('https://github.com/CoolLibs'),
                    ]),
                    h('span', {}, text({
                        EN: 'A C++ framework designed for computer graphics software.',
                        FR: 'Un framework C++ pour les logiciels basés sur de la synthèse d\'image.',
                    }[l])),
                    LineJump(),
                    h('span', {}, [
                        h('b', {}, text('Django')),
                        GithubLink('https://github.com/JulesFouchy/Django'),
                    ]),
                    h('span', {}, text({
                        EN: 'A VJing software based on a particle system, powered by compute shaders.',
                        FR: 'Un logiciel de VJing basé sur un système de particules, utilisant des compute shaders.',
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
                        EN: 'A voxel editor offering a few brushes and procedural terrain generation, supporting user-written shaders, shadows and ambient occlusion.',
                        FR: 'Un éditeur de voxels offrant quelques brushs et de la génération procédurale de terrain, avec des shaders customisables, ombres et occlusion ambiante.',
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
                        EN: 'A tower defense game based on redirecting lasers through mirrors, written with an ECS architecture (Entity-Component-System).',
                        FR: 'Un jeu de tower defense basé sur la redirection de lasers avec des miroirs, codé avec une architecture ECS (Entity-Component-System).',
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
                    EN: 'Web Projects',
                    FR: 'Projets Web',
                }[l],
                [
                    h('span', {}, [
                        h('b', {}, text('DixImac')),
                        GithubLink('https://github.com/JulesFouchy/DixImac'),
                        WebsiteLink('https://diximac.onrender.com'),
                    ]),
                    h('span', {}, text({
                        EN: 'An online version of the Dixit board game.',
                        FR: 'Une version en ligne du jeu de société Dixit.',
                    }[l])),
                    LineJump(),
                    // Disabled because the site is down:
                    // h('span', {}, [
                    //     h('b', {}, text('DixImac Gallery')),
                    //     GithubLink('https://github.com/JulesFouchy/DixImacGallery'),
                    //     WebsiteLink('https://julesfouchy.github.io/DixImacGallery/'),
                    // ]),
                    // h('span', {}, text({
                    //     EN: 'A website to showcase the custom cards made for the DixImac game.',
                    //     FR: 'Un site web pour exposer les cartes créées spécialement pour le jeu DixImac.',
                    // }[l])),
                    // LineJump(),
                    h('span', {}, [
                        h('b', {}, text('Arcade Terminal of Photography')),
                        GithubLink('https://github.com/JulesFouchy/ArcadeTerminalOfPhotography'),
                        WebsiteLink('https://julesfouchy.github.io/ArcadeTerminalOfPhotography/'),
                    ]),
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