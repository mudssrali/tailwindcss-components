import React from 'react'
import { SimpleCard1, SimpleCard2 } from './components/Cards'
import { SimpleNotification1 } from './components/Notifications'
import { SimpleMarketingPage } from './components/MarketingPage'
import { GroupHover1 } from './components/Hovers'

function App() {
	return (<>
		<SimpleCard1 />
		<SimpleCard2 />
		<SimpleNotification1 />
		<SimpleMarketingPage />
		<GroupHover1 />
	</>)
}

export default App
