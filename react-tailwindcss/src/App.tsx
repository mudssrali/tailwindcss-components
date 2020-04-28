import React from 'react'
import { SimpleCard1, SimpleCard2 } from './components/Cards'
import { SimpleNotification1 } from './components/Notifications'
import { SimpleMarketingPage } from './pages/MarketingPage'

function App() {
	return (<>
		<SimpleCard1 />
		<SimpleCard2 />
		<SimpleNotification1 />
		<SimpleMarketingPage />
	</>)
}

export default App
