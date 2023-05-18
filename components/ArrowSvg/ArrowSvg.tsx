import {useMediaQuery} from "@/hooks"

const ArrowSvg = () => {
	const isMobile1080 = useMediaQuery(1080)
	const currentWidth = isMobile1080 ? 54 : 80
	const currentHeight = isMobile1080 ? 60 : 40

	return <></>
}

export default ArrowSvg
