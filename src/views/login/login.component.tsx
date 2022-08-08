import { Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { LogInVM } from '../../core/view-models/auth-model/sign-in.model'

interface ComponentProps {
	onLogin: (data: LogInVM) => void
}
type LoginProps = ComponentProps

export const Login: React.FC<LoginProps> = (props) => {
	const [loginReq, setLoginReq] = useState<LogInVM>(new LogInVM())

	const loginBtnPress = () => {
		props.onLogin(loginReq)
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
				<Heading mb={6}>{'Log in'}</Heading>
				<FormControl>
					<FormLabel>{'User name'}</FormLabel>
					<Input
						placeholder={'qwerty'}
						size={'md'}
						mb={3}
						type={'text'}
						borderColor={'gray.300'}
					/>

					<FormLabel>{'Password'}</FormLabel>
					<Input
						placeholder={'....'}
						size={'md'}
						mb={3}
						type={'password'}
						borderColor={'gray.300'}
					/>
				</FormControl>

				<Button
					mt={3}
					colorScheme={'teal'}
					width={'100%'}
					onClick={loginBtnPress}
				>
					{'Log in\r'}
				</Button>
			</Flex>
		</Flex>
	)
}
