import { ITest } from '@/interfaces/ITest';


export interface IGrammarContentItem {
    text: string | null,
    format: string | null,
}

export interface IGrammarContent {
    title: IGrammarContentItem,
    about: IGrammarContentItem,
    message: IGrammarContentItem,
    practice: ITest[],
}

export interface IGrammar {
    title: IGrammarContentItem,
    about: IGrammarContentItem,
    message: IGrammarContentItem,
    content: IGrammarContent[],
    practice: ITest[],
}
