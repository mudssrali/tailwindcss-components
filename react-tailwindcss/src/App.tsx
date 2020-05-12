import React from 'react'

function App() {
	return (<>
		<div className="container mx-auto bg-white rounded-lg p-2 mt-4 md:flex">
			<h1 className="h1">Pakistan</h1>
		</div>
		<div className="container mx-auto bg-white rounded-lg p-4 mt-4">
			<span className="block rounded-lg text-gray-700 text-center bg-gray-400 px-4 py-2">1</span>
			<span className="block rounded-lg text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">2</span>
			<span className="block rounded-lg text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">3</span>
		</div>
		<div className="container mx-auto bg-white rounded-lg p-4 mt-4">
			<div className="flow-root bg-gray-400">
				<div className="my-4 block text-gray-700 text-center bg-gray-500 px-4 py-2">1</div>
			</div>
			<div className="flow-root bg-gray-200">
				<div className="my-4 block text-gray-700 text-center bg-gray-400 px-4 py-2">2</div>
			</div>
		</div>
	</>)
}

export default App
