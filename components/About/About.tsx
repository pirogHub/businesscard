import cn from "classnames"
import styles from "../../styles/about.module.scss"
import MainTitle from "../MainTitle/MainTitle"
import ArrowSvg from "../ArrowSvg/ArrowSvg"
import SocialList from "./SocialList"
import {useMediaQuery} from "@/hooks"

const About = () => {
	const isMobile1080 = useMediaQuery(1080)
	return (
		<section className={styles.about} id="about">
			<div className="container">
				<MainTitle title="Обо мне" />
			</div>
			<div className={cn("sub-container", styles.about__sub_container)}>
				<img
					className={styles.about__img}
					alt="avatar"
					src="img/photo-good.png"
				/> 
				<div className={styles.about__inner}>
					<h3 className={styles.about__title}>
						Егор Иванов
						<span className={styles.about__title__border}>
							<span
								className={styles.about__title__border__arrow}
							>
								<ArrowSvg />
							</span>

							<span
								className={styles.about__title__border__line}
							/>
						</span>
					</h3>

					<p className={styles.about__text}>
						Люблю программировать больше чем есть.<br/>
						Образование: законченное высшее. Факультет радиотехнологий связи.<br/> 
						СПб ГУТ им. проф. М.А. Бонч-Бруевича<br/>
						<br/>
						25 лет. Готов работать для вас.<br/>
						Готов к командировкам/переездам.<br/>
						Готов к нестандартным проектам.
					</p>
					{!isMobile1080 && <SocialList />}
				</div>
			</div>
			<div className="sub-container">
				{isMobile1080 && <SocialList />}
			</div>
		</section>
	)
}

export default About
