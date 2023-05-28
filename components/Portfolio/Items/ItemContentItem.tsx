import styles from "../../../styles/portfolio.module.scss"
import { IDescriptionItem } from "../types"


// export interface IDescriptionItem {
// 	title: string
// 	points: string[]
// }



const ItemContentItem = ({title, points} :IDescriptionItem) => {
	return <div className={styles.portfolio__content__item_wrapper}>
		<div>
		<span className={styles.portfolio__content__item__title}>{title}</span>
		</div>
		<ul className={styles.portfolio__content__item__list}>
			{!!points && !!points.length && points.map(p => <li
			className={styles.portfolio__content__item__list__item}
			key={p}>
<span className={styles.portfolio__content__item__list__item__content}>{p}</span>
			</li>)}
		</ul>
	</div>
}




export default ItemContentItem
