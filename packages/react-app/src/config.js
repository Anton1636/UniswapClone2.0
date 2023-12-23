import { Goerli } from '@usedapp/core'

export const ROUTER_ADDRESS = '0xb91eAEC53164099e4Da7B7B74CD1b8df0B264d2E'

export const DAPP_CONFIG = {
	readOnlyChainId: Goerli.chainId,
	readOnlyUrls: {
		[Goerli.chainId]:
			'https://goerli.infura.io/v3/931573663f704c4ab5cde1cf36cb18fc',
	},
}
