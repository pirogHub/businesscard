import styles from "../../styles/portfolio.module.scss"
import ItemContent from "./Items/ItemContent"
import { IDescriptionItem } from "./types"

interface IPortfolioSliderItem {
	title: string
	imgSrc: string
	link: string
	lang?: string
	description?: IDescriptionItem[]
}

const PortfolioSliderItem = ({title, imgSrc, lang, description, link}: IPortfolioSliderItem) => (
	<div className={styles.portfolio__slide}>
		<a className={styles.portfolio__slide__link} href={link}>
			<span className={styles.portfolio__slide__inner}>
				<span className={styles.portfolio__slide__text}>{title}</span>
			</span>
			<img
				className={styles.portfolio__slide__img}
				src={imgSrc}
				alt={title}
			/>
				<ItemContent title={title} lang={lang} description={description} />
		</a>
	</div>
)

export default PortfolioSliderItem
