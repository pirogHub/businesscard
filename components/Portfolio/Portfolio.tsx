import {useState} from "react"
import {AnimatePresence} from "framer-motion"
import MainTitle from "../MainTitle/MainTitle"
import PortfolioTabControl from "./PortfolioTabControl"
import PortfolioTabContent from "./PortfolioTabContent"
import {useMediaQuery} from "../../hooks/index"

import styles from "../../styles/portfolio.module.scss"

import PortfolioSlider from "./PortfolioSlider"
import { portfolioItems1 } from "./PortfolioContent"

const Portfolio = () => {
	const isMobile = useMediaQuery(1080)
	const [portfolioTab, setPortfolioTab] = useState(true)
	const [hiddenPortfolioItems, setHiddenPortfolioItems] = useState(false)

	const toggleHiddenPortfolioItems = () =>
		setHiddenPortfolioItems(!hiddenPortfolioItems)

	const handleShowPortfolioItems1 = () => {
		setPortfolioTab(true)
	
	}

	
	const portfolioTabControls = [
		{
			id: 1,
			title: "FullStack",
			isActive: portfolioTab,
			handler: handleShowPortfolioItems1,
		},
	]

	return (
		<section className={styles.portfolio} id="portfolio">
			<div className="container">
				<MainTitle title="портфолио" />
			</div>
			<div className="sub-container">
				<div className={styles.portfolio__inner}>
					<ul className={styles.portfolio__tabs}>
						{portfolioTabControls.map((item) => (
							<PortfolioTabControl
								key={item.id}
								title={item.title}
								isActive={item.isActive}
								handleClick={item.handler}
							/>
						))}
					</ul>
				</div>
				<h3 className={styles.portfolio__warning_hosting}>Тариф хостинга на render.com бесплатный. Поэтому сайты могут грузиться не быстро :(</h3>
				{!isMobile && (
					<ul className={styles.portfolio__list}>
						{portfolioTab && (
							<PortfolioTabContent tabItems={portfolioItems1} />
						)}
						{/* {portfolioTab2 && (
							<PortfolioTabContent tabItems={portfolioItems2} />
						)}
						{portfolioTab3 && (
							<PortfolioTabContent tabItems={portfolioItems3} />
						)}
						{portfolioTab4 && (
							<PortfolioTabContent tabItems={portfolioItems4} />
						)} */}
						{/* <AnimatePresence>
							{hiddenPortfolioItems && (
								<PortfolioTabContent
									tabItems={hiddenPortfolioItemsArray}
								/>
							)}
						</AnimatePresence> */}
					</ul>
				)}
				{/* {!isMobile && (
					<div className={styles.portfolio__wrapper}>
						<button
							className={styles.portfolio__more}
							onClick={toggleHiddenPortfolioItems}
						>
							<span className={styles.portfolio__more__text}>
								{hiddenPortfolioItems
									? "Свернуть"
									: "Показать еще проекты"}
							</span>
							<span className={styles.portfolio__more__border} />
						</button>
					</div>
				)} */}
			</div>
			{isMobile && (
				<div className={styles.portfolio__list__mobile}>
					<div className={styles.portfolio__list__mobile__container}>
						{portfolioTab && (
							<PortfolioSlider tabItems={portfolioItems1} />
						)}
						{/* {portfolioTab2 && (
							<PortfolioSlider tabItems={portfolioItems2} />
						)}
						{portfolioTab3 && (
							<PortfolioSlider tabItems={portfolioItems3} />
						)}
						{portfolioTab4 && (
							<PortfolioSlider tabItems={portfolioItems4} />
						)} */}
					</div>
				</div>
			)}
		</section>
	)
}

export default Portfolio
