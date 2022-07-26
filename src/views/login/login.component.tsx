import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
} from '@chakra-ui/react'
import React from 'react'

interface ComponentProps {
	onLogin: () => void
}

export type LoginProps = ComponentProps

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
	const loginBtnPress = () => {
		onLogin()
	}

	return (
		<Flex
			height={'100vh'}
			alignItems={'center'}
			justifyContent={'center'}
			background={'gray.100'}
		>
			<Flex
				direction={'column'}
				background={'white'}
				p={10}
				rounded={6}
				alignItems={'center'}
			>
				<Heading mb={6}>Log in</Heading>
				<FormControl>
					<FormLabel>User name</FormLabel>
					<Input
						placeholder="qwerty"
						size={'md'}
						mb={3}
						type={'text'}
						borderColor="gray.300"
					/>

					<FormLabel>Password</FormLabel>
					<Input
						placeholder="...."
						size={'md'}
						mb={3}
						type={'password'}
						borderColor="gray.300"
					/>
				</FormControl>

				<Button
					mt={3}
					colorScheme={'teal'}
					width={'100%'}
					onClick={loginBtnPress}
				>
					Log in
				</Button>
			</Flex>
		</Flex>
	)
}
