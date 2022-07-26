import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	Flex,
	Icon,
	IconButton,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { SideBarState } from './store'
import { AppState } from '../../store/index'
import { ChevronLeftIcon } from '@chakra-ui/icons'

interface ComponentProps {
	selectedRoute: number
	onSelectedRoute: (value: number) => void
	onToggle: () => void
}

export type SideBarProps = ComponentProps

export const SideBar: React.FC<SideBarProps> = ({
	selectedRoute,
	onToggle,
	onSelectedRoute,
}) => {
	const { isFullWidth, fullWidth, minWidth }: SideBarState = useSelector(
		(state: AppState) => state.sideBar
	)

	const onRoutePress = (index: number) => {
		onSelectedRoute(index)
	}

	const onToggleSideBarPress = () => {
		onToggle()
	}

	const onRenderLinks = () => {
		return routes.map((route, index) => {
			if (route.name) {
				return (
					<Link
						to={route.path || '/'}
						style={{ textDecoration: 'none' }}
						onClick={() => onRoutePress(index)}
					>
						<Flex
							align="center"
							p="3"
							mb={2}
							borderRadius="lg"
							role="group"
							bg={selectedRoute === index ? 'cyan.800' : 'white'}
							color={selectedRoute === index ? 'white' : 'black'}
							cursor="pointer"
							_hover={{
								bg: 'cyan.700',
								color: 'white',
							}}
						>
							{route.icon && (
								<Icon
									mr="4"
									fontSize="16"
									_groupHover={{
										color: 'white',
									}}
									as={route.icon}
								/>
							)}
							{route.name}
						</Flex>
					</Link>
				)
			} else {
				return <div />
			}
		})
	}

	return (
		<>
			<Drawer
				isOpen={isFullWidth}
				placement="left"
				onClose={() => {}}
				size="xs"
				// finalFocusRef={btnRef}
			>
				<DrawerContent>
					<DrawerHeader>Menu</DrawerHeader>

					<DrawerBody>{onRenderLinks()}</DrawerBody>

					<DrawerFooter borderTopWidth="1px">
						<IconButton
							aria-label="Hide-Menu"
							variant="outline"
							mr={3}
							icon={
								<ChevronLeftIcon
									w={8}
									h={8}
								/>
							}
							onClick={onToggleSideBarPress}
						></IconButton>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}
