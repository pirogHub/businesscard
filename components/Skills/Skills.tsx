import styles from "../../styles/skills.module.scss"
import MainTitle from "../MainTitle/MainTitle"
import MaterialIcon from "../ui/MaterialIcon"
import SkillItem from "./SkillItem"

const Skills = () => {
	return (
		<section className={styles.skills} id="skills">
			<div className="container">
				<MainTitle title="Навыки" />

				<div className="sub-container">
					<ul className={styles.skills__list}>
						<SkillItem
							title="Разработка Frontend"
							iconClass={styles.skills__icon_front}
							IconComponent={
								<MaterialIcon name="MdImportantDevices" />
							}
						>
							Typescript, NextJs, JavaScript, React <br />
							 Redux,  
							RTK Query, Effector
							<br /> Intersection Observer, lodash
							<br />
							Bootstrap
							<br />
							React Optimization
						</SkillItem>
						<SkillItem
							title="Разработка Backend"
							iconClass={styles.skills__icon_back}
							IconComponent={<MaterialIcon name="MdBackup" />}
						>
							REST Api, Cors, MongoDb, MySql, NestJs, NodeJs, Express
						</SkillItem>

						<SkillItem
							title="До этого"
							iconClass={styles.skills__icon_history}
							IconComponent={
								<MaterialIcon name="MdManageHistory" />
							}
						>
							2 года программировал на {"<assembler>"} и {"<c>"}{" "}
							микроконтроллеры stm. <br />
							На {"<c++>"} и qtCreator разрабатывал графические
							интерфейсы для взаимодействия с stm.
						</SkillItem>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Skills
