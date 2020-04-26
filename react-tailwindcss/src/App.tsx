import React from 'react'

function App() {
	return (<div className="md:flex bg-white rounded-lg p-6">
		<img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="favicon.ico" alt="example-icon" />
		<div className="text-center md:text-left">
			<h2 className="text-lg">Erin Lindford</h2>
			<div className="text-purple-500">Customer Support</div>
			<div className="text-gray-600">erinlindford@example.com</div>
			<div className="text-gray-600">(555) 765-4321</div>
		</div>
	</div>
	)
}

export default App
