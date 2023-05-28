import cn from "classnames"

import Logo from "../../Logo/Logo"
import {Link as LinkScroll} from "react-scroll"
import {FC, useEffect, useState} from "react"
import {useMediaQuery} from "@/hooks"

import styles from "../../../styles/header.module.scss"
import stylesMobile from "../../../styles/mobileMenu.module.scss"
import { useRouter } from "next/router"
import Link from "next/link"

const linkConfig = {
	spy: true,
	smooth: true,
	offset: 35,
	duration: 500,
}

const ItemWithLink: FC<{
	className: string
	href?: string
	title: string
	to: string
	isAtHome: boolean
}> = ({className, href = "/", to, title, isAtHome}) => {
	
	if (isAtHome) {

		return (
			<li className={className}>
			<LinkScroll
				href={href}
				to={to}
				{...linkConfig}
				className={styles.header__nav__list__item__link}
				>
				{title}
			</LinkScroll>
			
		</li>
	)
} else {
	return (
		<li className={className}>
		<Link
			href={href + `#${to}`}
			
			{...linkConfig}
			className={styles.header__nav__list__item__link}
			>
			{title}
		</Link>
		
	</li>
)
}
}

const Header: FC = () => {
	const router = useRouter()
	console.log("router",router);
	const isMobile = useMediaQuery(640)
	const [menuOpen, setMenuOpen] = useState(false)
	const [isAtHome, setIsAtHome] = useState(true)
	const [currentMenuItemClass, setCurrentMenuItemClass] = useState(
		isMobile ? stylesMobile.menu__item : styles.header__nav__list__item
	)

	useEffect(()=>{
		if(router.route !== "/") {
			setIsAtHome(false)
		}
	},[])
	useEffect(() => {
		const tmp = isMobile
		console.log("isMobile", isMobile)

		setCurrentMenuItemClass(
			isMobile ? stylesMobile.menu__item : styles.header__nav__list__item
		)
	}, [isMobile])

	const handleToggleMenu = () => {
		;(document.querySelector("body") as HTMLBodyElement).classList.toggle(
			"overflow-hidden"
		)
		setMenuOpen(!menuOpen)
	}

	const closeMenu = () => {
		;(document.querySelector("body") as HTMLBodyElement).classList.remove(
			"overflow-hidden"
		)
		setMenuOpen(false)
	}
	return (
		<header className={styles.header}>
			<div className={cn("container", styles.header__container)}>
				{isMobile && (
					<button
						onClick={handleToggleMenu}
						className={
							styles.burger_menu +
							(menuOpen ? ` ${styles.open}` : "")
						}
						// className={cx({
						// 	burger_menu: true,
						// 	open: menuOpen,
						// })}
					>
						<span />
						<span />
						<span />
					</button>
				)}
				<nav
					className={
						(isMobile ? stylesMobile.menu : styles.header__nav) +
						(menuOpen ? ` ${stylesMobile.open}` : "")
					}
				>
					<ul
						className={
							isMobile
								? styles.list_reset
								: styles.header__nav__list
						}
					>
						<ItemWithLink
						isAtHome={isAtHome}
							className={currentMenuItemClass}
							to="about"
							title="Обо мне"
						/>
						<ItemWithLink
						isAtHome={isAtHome}
							className={currentMenuItemClass}
							to="skills"
							title="Навыки"
						/>
						<ItemWithLink
						isAtHome={isAtHome}
							className={currentMenuItemClass}
							to="portfolio"
							title="Портфолио"
						/>
						<ItemWithLink
						isAtHome={isAtHome}
							className={currentMenuItemClass}
							to="contact"
							title="Обратная связь"
						/>
					</ul>
				</nav>
				<Logo />
			</div>
		</header>
	)
}

export default Header
