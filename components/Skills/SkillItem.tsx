import cn from "classnames"

import styles from "../../styles/skills.module.scss"
import {FC, PropsWithChildren} from "react"

interface ISkillItem {
	text?: string
	title: string
	iconClass: string
	IconComponent?: React.ReactNode
}

const SkillItem: FC<PropsWithChildren<ISkillItem>> = ({
	text,
	title,
	iconClass,
	children,
	IconComponent,
}) => {
	return (
		<li className={styles.skills__item}>
			<h3 className={cn(styles.skills__title, iconClass)}>
				<span className={styles.skills__title__icon}>
					{IconComponent}
				</span>
				<span className={styles.skills__title__text}>{title}</span>
				<span className={styles.skills__title__border} />
			</h3>
			<p className={styles.skills__text}>{text ? text : children}</p>
		</li>
	)
}

export default SkillItem
