import { Box, IconButton, Slide, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store'
import { Content } from './Content'
import { Header } from './Header'
import { SideBar } from './SideBar'
import { SideBarSlice, SideBarState } from './store'
import { HiMenu } from 'react-icons/hi'

export const Layout: React.FC = () => {
	const dispatch = useDispatch()
	const { isFullWidth, fullWidth, minWidth }: SideBarState = useSelector(
		(state: AppState) => state.sideBar
	)

	const [selectedRoute, setSelectedRoute] = useState<number>(1)

	const onSelectedRoute = (index: number) => {
		setSelectedRoute(index)
	}

	const onToggle = () => {
		dispatch(SideBarSlice.actions.CHANGE_SIDE_BAR_STATE())
	}

	const onRenderOpenMenuButton = () => {
		return (
			<IconButton
				zIndex={10}
				rounded="full"
				size={'lg'}
				position={'absolute'}
				variant="solid"
				aria-label="show-menu"
				backgroundColor={'white'}
				shadow="md"
				_hover={{
					bg: 'white',
				}}
				icon={<HiMenu color="black" />}
				bottom={6}
				left={6}
				onClick={onToggle}
			></IconButton>
		)
	}

	return (
		<Box
			minH="100vh"
			bg={useColorModeValue('gray.200', 'gray.900')}
		>
			<Slide
				direction="left"
				in={isFullWidth}
			>
				<SideBar
					selectedRoute={selectedRoute}
					onSelectedRoute={onSelectedRoute}
					onToggle={onToggle}
				/>
			</Slide>

			<Box marginLeft={isFullWidth ? fullWidth + 1 : minWidth + 1}>
				<Header />

				<Box>
					<Content />
				</Box>
			</Box>
			{onRenderOpenMenuButton()}
		</Box>
	)
}
