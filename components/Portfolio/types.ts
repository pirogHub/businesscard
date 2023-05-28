
export interface IDescriptionItem {
    title: string
    points: string[]
}

export interface IPortfolioTabItem {
    title: string
    imgSrc: string
    link: string
    lang?: string
    description?: IDescriptionItem[]
}

export interface IPortfolioTabContent {
    id: number
    img: string
    link: string
    title: string
    lang?: string
    description?: IDescriptionItem[]
}