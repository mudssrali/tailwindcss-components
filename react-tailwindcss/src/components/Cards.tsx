import React from 'react'

export const SimpleCard1 = () => (
	<div className="md:flex bg-white rounded-lg p-6 m-4">
		<img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="https://randomuser.me/api/portraits/women/17.jpg" alt="example-icon" />
		<div className="text-center md:text-left">
			<h2 className="text-lg">Erin Lindford</h2>
			<div className="text-purple-500">Customer Support</div>
			<div className="text-gray-600">erinlindford@example.com</div>
			<div className="text-gray-600">(555) 765-4321</div>
		</div>
	</div>
)

export const SimpleCard2 = () => (
	<div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4">
		<div className="sm:flex sm:items-center px-6 py-4">
			<img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full" src="https://randomuser.me/api/portraits/women/17.jpg" alt="Woman's Face" />
			<div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
				<p className="text-xl leading-tight">Erin Lindford</p>
				<p className="text-sm leading-tight text-gray-600">Customer Support Specialist</p>
				<div className="mt-4">
					<button className="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Message</button>
				</div>
			</div>
		</div>
	</div>
)