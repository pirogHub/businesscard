import {Link} from "react-scroll"
import styles from "../../styles/hero.module.scss"
import {useMediaQuery} from "@/hooks"
import {MutableRefObject, useEffect, useRef} from "react"
import {gsap} from "gsap"

const Hero = () => {
	const isMobile = useMediaQuery(800)

	const heroTitle = useRef() as MutableRefObject<HTMLHeadingElement>

	useEffect(() => {
		const colors = gsap.to(heroTitle.current, {
			paused: true,
			duration: 20,
			repeat: -1,
			"--hue": 360,
			opacity: 1,
		})

		const doRandom = () => {
			gsap.timeline()
				.to(heroTitle.current, {
					duration: 3,
					opacity: function () {
						return gsap.utils.random(0.7, 0.75)
					},
					delay: function () {
						return gsap.utils.random(0.05, 0.3)
					},
				})
				.to(heroTitle.current, {
					duration: 0.5,
					opacity: 0.7,
					onComplete: function () {
						doRandom()
					},
				})
		}
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

		if (!mediaQuery || !mediaQuery.matches) {
			colors.play()
			doRandom()
		}
	}, [])

	return (
		<section
			className={styles.hero}
			// style={{backgroundImage: 'url("/img/hero_bg.jpg")'}}
		>
			<div className="sub-container">
				<div className={styles.hero__inner}>
					<h1 className={styles.hero__title} ref={heroTitle}>
						Web development
					</h1>
					<div className={styles.hero__description}>
						<p>Вы работаете над чем-то великим?</p>
						<p>
							Я с удовольствием помогу вам в этом! <br />
							<br />
							Свяжитесь со мной как вам удобно (телеграм/ письмо
							на почту) или оставьте свои контакты и мы начнем
							проект прямо сейчас!
						</p>
					</div>
					<Link
						to="contact"
						spy
						smooth
						offset={30}
						duration={500}
						className={styles.hero__btn}
					>
						Связаться с разработчиком
					</Link>
					{!isMobile && (
						<Link
							to="about"
							spy
							smooth
							offset={30}
							duration={500}
							className={styles.hero__arrow}
						/>
					)}
				</div>
			</div>
		</section>
	)
}

export default Hero
