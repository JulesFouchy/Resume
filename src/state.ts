enum Language {
    EN,
    FR,
}

interface State {
    language: Language,
}

const state: State = {
    language: Language.EN,
}

export default state