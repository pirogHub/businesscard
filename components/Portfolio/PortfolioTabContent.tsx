import {motion} from "framer-motion"

import styles from "../../styles/portfolio.module.scss"
import PortfolioTabItem from "./PortfolioTabItem"
import { IPortfolioTabContent } from "./types"



const PortfolioTabContent = ({
	tabItems,
}: {
	tabItems: IPortfolioTabContent[]
}) => {
	return (
		<>
			{tabItems.map((item) => (
				<li key={item.id} className={styles.portfolio__list__item}>
					<motion.div
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						key={item.id}
					>
						<PortfolioTabItem
							title={item.title}
							imgSrc={item.img}
							link={item.link}
							description={item?.description}
							lang={item?.lang}
						/>
					</motion.div>
				</li>
			))}
		</>
	)
}

export default PortfolioTabContent
