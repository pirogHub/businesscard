import Link from "next/link"
import Logo from "../../Logo/Logo"
import SocialList from "./SocialList"
import {useMediaQuery} from "../../../hooks"
import styles from "../../../styles/footer.module.scss"
import FooterLinks from "./FooterLinks"

const Footer = () => {
	const isMobile725 = useMediaQuery(725)

	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.footer__container}`}>
				<span className={styles.footer__border} />
				<div className={styles.footer__inner}>
					<div className={styles.footer__left}>
						{/* {isMobile725 && <SocialList marginBottom={25} />} */}
						<Logo />
						<p className={styles.footer__copyright}>
							© 2023 <br />
							Егор
						</p>
					</div>
					<div className={styles.footer__right}>
						{/* <div className={styles.footer__right__top}>
							<p className={styles.footer__right__top__text}>
								Поделитесь сайтом с друзьями:
							</p>
							{!isMobile725 && <SocialList />}
						</div> */}
						<div className={styles.footer__right__bottom}>
							<FooterLinks />
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
