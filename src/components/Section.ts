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
    class: 'section'
},
    Array.isArray(children) ? [sectionTitle(title), ...children] : [sectionTitle(title), children]
)