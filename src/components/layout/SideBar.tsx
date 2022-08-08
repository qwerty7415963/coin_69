import { Box, Flex, Icon, IconButton, Spacer, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'
import { routes } from '../../routes/routes'
import { SideBarState } from './store'
import { AppState } from '../../store/index'

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
	const navigation = useNavigate()
	const { isFullWidth, fullWidth, minWidth }: SideBarState = useSelector(
		(state: AppState) => state.sideBar
	)

	const onRoutePress = (index: number, route?: string) => {
		onSelectedRoute(index)
		if (route) navigation(route)
	}

	const onToggleSideBarPress = () => {
		onToggle()
	}

	const onRenderLinks = () => {
		return routes.map((route, index) => {
			if (route.name) {
				return (
					<Flex
						key={index + 1}
						align={'center'}
						p={'3'}
						mb={2}
						borderRadius={'lg'}
						role={'group'}
						bg={selectedRoute === index ? 'cyan.800' : 'white'}
						color={selectedRoute === index ? 'white' : 'black'}
						cursor={'pointer'}
						_hover={{
							bg: 'cyan.700',
							color: 'white',
						}}
						onClick={() => onRoutePress(index, route.path)}
					>
						{route.icon && (
							<Icon
								mr={'4'}
								fontSize={'16'}
								_groupHover={{
									color: 'white',
								}}
								as={route.icon}
							/>
						)}
						{route.name}
					</Flex>
				)
			}
			return <div />
		})
	}

	return (
		<Box
			width={isFullWidth ? fullWidth : minWidth}
			height={'100vh'}
			backgroundColor={'white'}
			// finalFocusRef={btnRef}
		>
			<Flex
				direction={'column'}
				p={4}
				height={'100%'}
				justifyContent={'space-between'}
			>
				<Box>
					<Text fontSize={'3xl'}>{'Menu'}</Text>

					<Box>{onRenderLinks()}</Box>
				</Box>

				<Box borderTopWidth={'1px'}>
					<IconButton
						aria-label={'Hide-Menu'}
						variant={'outline'}
						mr={3}
						icon={
							<ChevronLeftIcon
								w={8}
								h={8}
							/>
						}
						onClick={onToggleSideBarPress}
					/>
				</Box>
			</Flex>
		</Box>
	)
}
