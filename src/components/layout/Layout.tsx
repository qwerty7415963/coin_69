import { Box, IconButton, Slide, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiMenu } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { AppState } from '../../store'
import { Content } from './Content'
import { Header } from './Header'
import { SideBar } from './SideBar'
import { SideBarSlice, SideBarState } from './store'
import { SessionState } from '../../store/reducer/session'
import { routePath } from '../../routes/routes'

export const Layout: React.FC = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { isFullWidth, fullWidth, minWidth }: SideBarState = useSelector(
		(state: AppState) => state.sideBar
	)
	const { loggedIn }: SessionState = useSelector((state: AppState) => state.session)

	const [selectedRoute, setSelectedRoute] = useState<number>(1)

	const onSelectedRoute = (index: number) => {
		setSelectedRoute(index)
	}

	const onToggle = () => {
		dispatch(SideBarSlice.actions.CHANGE_SIDE_BAR_STATE())
	}

	const onDefaultNavigateToLogin = () => {
		if (!loggedIn) {
			navigate(routePath.login)
		}
	}

	const onRenderOpenMenuButton = () => {
		return (
			<IconButton
				zIndex={10}
				rounded={'full'}
				size={'lg'}
				position={'absolute'}
				variant={'solid'}
				aria-label={'show-menu'}
				backgroundColor={'white'}
				shadow={'md'}
				_hover={{
					bg: 'white',
				}}
				icon={<HiMenu color={'black'} />}
				bottom={6}
				left={6}
				onClick={onToggle}
			/>
		)
	}

	useEffect(() => {
		onDefaultNavigateToLogin()
	}, [])

	return (
		<Box
			minH={'100vh'}
			bg={useColorModeValue('gray.200', 'gray.900')}
		>
			<Slide
				direction={'left'}
				in={isFullWidth}
			>
				<SideBar
					selectedRoute={selectedRoute}
					onSelectedRoute={onSelectedRoute}
					onToggle={onToggle}
				/>
			</Slide>

			<Box marginLeft={isFullWidth ? fullWidth + 1 : minWidth}>
				<Header />

				<Box>
					<Content />
				</Box>
			</Box>
			{onRenderOpenMenuButton()}
		</Box>
	)
}
