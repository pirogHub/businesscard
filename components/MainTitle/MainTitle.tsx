import styles from "../../styles/mainTitle.module.scss"

const MainTitle = ({title}: {title: string}) => {
	return (
		<h2 className={styles.title}>
			{title.toUpperCase()}
			<span className={styles.title__border}></span>
		</h2>
	)
}

export default MainTitle
