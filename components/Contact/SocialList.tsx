import {TypeMaterialIconName} from "@/types/icon.types"
import styles from "../../styles/socialListContact.module.scss"
import MaterialIcon from "../ui/MaterialIcon"

import cn from "classnames"

const Item = ({
	title,
	iconName,
	hoverColorClass,
}: {
	title: string
	iconName: TypeMaterialIconName
	hoverColorClass: string
}) => {
	return (
		<li className={styles.social__list__item}>
			<a href="tel:+79217641998" className={styles.social__list__item__link}>
				<span className={styles.social__list__item__link__text}>
					{title}
				</span>
				<span
					// className={`${styles.social__list__item__link__icon} syka"`}
					className={cn(
						styles.social__list__item__link__icon,
						"syka",
						styles[
							`social__list__item__link__icon_${hoverColorClass}`
						]

						// hoverColorClass ? styles.hoverColorClass : ""
					)}
				>
					{/* <div
					// className={styles.social__list__item__link__img}
					// src={imgPath}
					> */}
					<MaterialIcon name={iconName} />
					{/* </div> */}
				</span>
			</a>
		</li>
	)
}

const SocialList = () => {
	return (
		<ul className={styles.social__list}>
			{/* <li className={styles.social__list__item}>
				<a href="#" className={styles.social__list__item__link}>
					<span className={styles.social__list__item__link__text}>
						telegram
					</span>
					<span className={styles.social__list__item__link__icon}>
						<img
							className={styles.social__list__item__link__img}
							src="/img/telegram.png"
						/>
					</span>
				</a>
			</li> */}
			<Item
				title="telegram"
				iconName="RiTelegramLine"
				hoverColorClass="hover_blue"
			/>
			<Item
				title="whatsApp"
				iconName="RiWhatsappLine"
				hoverColorClass="hover_green"
			/>
		</ul>
	)
}

export default SocialList
