import { h, text } from 'hyperapp'

export default (link: string) => h('a', { href: link }, text(link))