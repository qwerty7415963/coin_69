import { Box, IconButton } from '@chakra-ui/react'
import { FiBell } from 'react-icons/fi'

interface ComponentProps {
	any?: any
}

export type HeaderProps = ComponentProps

export const Header: React.FC<HeaderProps> = () => {
	return (
		<Box
			backgroundColor={'white'}
			height={90}
		>
			<IconButton
				size={'lg'}
				aria-label={'notification'}
				variant="ghost"
				icon={<FiBell />}
			></IconButton>
		</Box>
	)
}
