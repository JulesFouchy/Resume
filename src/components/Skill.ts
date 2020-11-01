import { h, text } from 'hyperapp'

const Hexagon = (classes?: string) => 
    h('div', {class: 'hexagon' + classes}, [
        h('span', {class: 'outerHexagon' + classes}),
        h('span', {class: 'innerHexagon' + classes})
    ])

const Jauge = (level: number) => h(
    'div',
{
    class: 'jauge',
},
    Array.from({length: 5}, (_, i) =>
        Hexagon(i < level ? ' filled' : '')
))

export default (name: string, level: number) => h(
    'div',
{

},
[
    text(name),
    Jauge(level)
]
)