import React from 'react'

const Partners = () => {
	return (
		<section className='flex flex-col items-center bg-primary_box py-10 space-y-5'>
			<p className='text-xl text-secondary'>our trusted partners</p>
			<img className='hidden lg:flex' src="Logos.png" alt="" />
			<img className='flex lg:hidden' src="Logosmall.png" alt="" />
		</section>
	)
}

export default Partners