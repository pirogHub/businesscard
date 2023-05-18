import cn from "classnames"

import Logo from "../../Logo/Logo"
import {Link} from "react-scroll"
import {FC, useEffect, useState} from "react"
import {useMediaQuery} from "@/hooks"

import styles from "../../../styles/header.module.scss"
import stylesMobile from "../../../styles/mobileMenu.module.scss"

const linkConfig = {
	spy: true,
	smooth: true,
	offset: 140,
	duration: 500,
}

const ItemWithLink: FC<{
	className: string
	href?: string
	title: string
	to: string
}> = ({className, href = "/", to, title}) => {
	return (
		<li className={className}>
			<Link
				href={href}
				to={to}
				{...linkConfig}
				className={styles.header__nav__list__item__link}
			>
				{title}
			</Link>
		</li>
	)
}

const Header: FC = () => {
	const isMobile = useMediaQuery(640)
	const [menuOpen, setMenuOpen] = useState(false)

	const [currentMenuItemClass, setCurrentMenuItemClass] = useState(
		isMobile ? stylesMobile.menu__item : styles.header__nav__list__item
	)

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
							className={currentMenuItemClass}
							to="about"
							title="Обо мне"
						/>
						<ItemWithLink
							className={currentMenuItemClass}
							to="/skills"
							title="Навыки"
						/>
						<ItemWithLink
							className={currentMenuItemClass}
							to="/portfolio"
							title="Портфолио"
						/>
						<ItemWithLink
							className={currentMenuItemClass}
							to="/contact"
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
