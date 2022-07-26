import React from 'react'

interface ComponentProps {
	any?: any
}

export type PancakeProps = ComponentProps

export const Pancake: React.FC<PancakeProps> = () => {
	return <div>Pancake</div>
}
