import { h, text } from 'hyperapp'
import githubIcon from '../img/github.png'

const GithubLink = (link: string) => h('a', { href: link, className: "iconLink" }, h('img', { src: githubIcon }))
const WebsiteLink = (link: string) => h('a', { href: link, className: "iconLink" }, text('🌐'))

export { GithubLink, WebsiteLink }