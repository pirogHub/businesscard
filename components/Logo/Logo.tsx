import Link from "next/link"

import styles from "../../styles/logo.module.scss"

const Logo = () => (
	<Link href="/">
		<img src="img/logo.svg" width="50px" alt="logo" className={styles.logo} />
	</Link>
)

export default Logo
