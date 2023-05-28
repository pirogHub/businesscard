import styles from "../../styles/portfolio.module.scss"
import ItemContent from "./Items/ItemContent"
import { IPortfolioTabItem } from "./types"



// interface IPortfolioTabItem {
// 	title: string
// 	imgSrc: string
// 	link: string
// 	lang?: string
// 	description?: IDescriptionItem[]
// }

// const ItemContentItem = ({title, points} :IDescriptionItem) => {
// 	return <div className={styles.portfolio__content__item_wrapper}>
// 		<div>
// 		<span className={styles.portfolio__content__item__title}>{title}</span>
// 		</div>
// 		<ul className={styles.portfolio__content__item__list}>
// 			{!!points && !!points.length && points.map(p => <li
// 			className={styles.portfolio__content__item__list__item}
// 			key={p}>
// <span className={styles.portfolio__content__item__list__item__content}>{p}</span>
// 			</li>)}
// 		</ul>
// 	</div>
// }

// const ItemContent = ({title, lang, description} : {title:string,lang?:string, description?: IDescriptionItem[]}) => {

// 	return <div className={styles.portfolio__content_wrapper}>
// 	 <h3 className={styles.portfolio__list__item__title}>{title}</h3>
// 	 {lang && <h4 className={styles.portfolio__list__item__lang}>{lang}</h4>}
// 	 <div className={styles.portfolio__content}>
// 	 {description 
// 	 && description.length 
// 	 ? description.map(i => <ItemContentItem {...i} />)
// 	: <></>}
// 	 </div>
// 	 </div>
// }

const PortfolioTabItem = ({title, imgSrc,lang, link, description}: IPortfolioTabItem) => (
	<div className={styles.portfolio__list__inner}>
		<a className={styles.portfolio__list__item__link} href={link} target="_blank">
			<img
				className={styles.portfolio__list__item__img}
				src={imgSrc}
				alt={title}
			/>
			<ItemContent title={title} lang={lang} description={description} />
			
		</a>
	</div>
)

export default PortfolioTabItem
