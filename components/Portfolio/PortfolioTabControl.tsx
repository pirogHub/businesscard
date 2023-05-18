import styles from "../../styles/portfolio.module.scss"

interface IPortfolioTabControl {
	title: string
	isActive: boolean
	handleClick: () => void
}

const PortfolioTabControl = ({
	title,
	isActive,
	handleClick,
}: IPortfolioTabControl) => {
	return (
		<li className={styles.portfolio__tabs__item}>
			<button
				onClick={handleClick}
				className={styles.portfolio__tabs__item__btn}
				style={{color: isActive ? "#f2f2f2" : "#b7bfd1"}}
			>
				<span className={styles.portfolio__tabs__item__btn__text}>
					{title}
				</span>
				{isActive && (
					<span
						className={styles.portfolio__tabs__item__btn__arrow_svg}
					></span>
				)}
				<span className={styles.portfolio__tabs__item__btn__border} />
			</button>
		</li>
	)
}

export default PortfolioTabControl
