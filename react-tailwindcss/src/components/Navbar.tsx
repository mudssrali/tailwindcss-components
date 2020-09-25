import React from 'react'

const Navbar = () => {
	return (
		<nav className="w-full z-30 py-1 bg-white shadow border-b border-red-500">
			<div className="w-full flex items-center justify-between mt-0 px-6 py-2">
				<label className="cursor-pointer md:hidden block">
					<svg className="fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
						<title>menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
					</svg>
				</label>
				<div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1">
					<nav>
						<ul className="md:flex items-center justify-between text-base text-red-500 pt-4 md:pt-0">
							<li><a href="/home" className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">Home</a></li>
							<li><a href="/analytics" className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">About</a></li>
						</ul>
					</nav>
				</div>

				<div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4">
					<div className="flex items-center w-full md:w-full">
						<a href="/login" className="bg-transparent text-red-500 px-4 py-1 rounded border border-red-500 mr-4 hover:bg-red-400 hover:text-white">Sigup</a>
						<a href="/login" className="bg-transparent text-red-500 px-4 py-1 rounded border border-red-500 hover:bg-red-400 hover:text-white">Login</a>
					</div>
				</div>
			</div>
		</nav >
	)
}

export { Navbar }