import styles from "../../../styles/portfolio.module.scss"
import { IDescriptionItem } from "../types"
import ItemContentItem from "./ItemContentItem"


// export interface IDescriptionItem {
// 	title: string
// 	points: string[]
// }

// interface IPortfolioTabItem {
// 	title: string
// 	imgSrc: string
// 	link: string
// 	lang?: string
// 	description?: IDescriptionItem[]
// }



const ItemContent = ({title, lang, description} : {title:string,lang?:string, description?: IDescriptionItem[]}) => {

	return <div className={styles.portfolio__content_wrapper}>
	 <h3 className={styles.portfolio__list__item__title}>{title}</h3>
	 {lang && <h4 className={styles.portfolio__list__item__lang}>{lang}</h4>}
	 <div className={styles.portfolio__content}>
	 {description 
	 && description.length 
	 ? description.map(i => <ItemContentItem key={i.title} {...i} />)
	: <></>}
	 </div>
	 </div>
}


export default ItemContent
