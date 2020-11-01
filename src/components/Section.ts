import { h, text } from 'hyperapp'

const sectionTitle = (title: string) => h(
    'h2',
{
    class: 'section-title',
},
    text(title)
)

export default (title: string, children) => h(
    'div',
{

},
[
    sectionTitle(title),
    children
]
)