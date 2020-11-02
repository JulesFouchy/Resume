import { h, text } from 'hyperapp'
import githubIcon from '../img/github.png'

const GithubLink = (link: string) => h('a', { href: link }, h('img', { src: githubIcon }))
const WebsiteLink = (link: string) => h('a', { href: link }, text('🌐'))

export { GithubLink, WebsiteLink }