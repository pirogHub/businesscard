import {motion} from "framer-motion"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import PortfolioSliderItem from "./PortfolioSliderItem"
import {useMediaQuery} from "../../hooks/index"
import PortfolioTabItem from "./PortfolioTabItem"
import { IDescriptionItem } from "./types"

interface IPortfolioSlider {
	tabItems: {
		id: number
		img: string
		link: string
		title: string
		lang?: string
	description?: IDescriptionItem[]
	}[]
}

const PortfolioSlider = ({tabItems}: IPortfolioSlider) => {
	const isMobile800 = useMediaQuery(800)
	const isMobile485 = useMediaQuery(485)

	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
		>
			<Carousel
				showArrows={true}
				showIndicators={true}
				showThumbs={true}
				showStatus={true}
				centerMode={true}
				centerSlidePercentage={
					isMobile485 ? 75.4 : isMobile800 ? 49.4 : 45
				}
	
			>
				{tabItems.map((item) => (
					<PortfolioSliderItem
						key={item.id}
						title={item.title}
							imgSrc={item.img}
							link={item.link}
							description={item?.description}
							lang={item?.lang}
					/>
				))}
			</Carousel>
		</motion.div>
	)
}

export default PortfolioSlider
