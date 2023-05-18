import {useRenderClient} from "@/hooks/useRenderClient"
import {TypeMaterialIconName} from "@/types/icon.types"
import {FC} from "react"
import * as MaterialIcons from "react-icons/md"
import * as RiIcons from "react-icons/ri"
const AllIcons = {...MaterialIcons, ...RiIcons}
const MaterialIcon: FC<{name: TypeMaterialIconName}> = ({name}) => {
	const {isRenderClient} = useRenderClient()

	const IconComponent = AllIcons[name]

	if (isRenderClient) {
		if (!IconComponent) {
			return <MaterialIcons.MdDragIndicator />
		}
	} else {
		return null
	}

	return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}

export default MaterialIcon
