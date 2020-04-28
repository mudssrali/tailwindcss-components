import React from 'react'

export const SimpleMarketingPage = () => (
	<div className="md:flex bg-white rounded-lg p-6 m-4">
		<div className="md:flex-shrink-0">
			<img className="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt="woman-as-customer" />
		</div>
		<div className="mt-4 md:mt-0 md:ml-6">
			<div className="uppercase tracking-wide text-base text-indigo-600 font-bold">Marketing</div>
			<a href="!#" className="block mt-1 text-lg lea	ding-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
			<p className="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
		</div>
	</div>
)