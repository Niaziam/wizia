import React from 'react'

const FeatureHighlight = () => {
	return (
		<section className='px-10'>
			<div className="bg-[url('/ImgV.png')] md:bg-[url('/ImgMirror.png')] bg-no-repeat bg-cover rounded-2xl lg:pl-[500px] p-5 md:p-20 ">
				<h1 className='text-white font-semibold text-4xl mt-5'>Train your aiDR on your...</h1>
				<p className='text-secondary font-semibold text-4xl mt-5'><i>prefered email st|</i></p>
				<p className='text-text text-xl mt-5'>You are in control. Train your aiDR on <br className='hidden lg:flex' /> elements of your Marketing strategy.</p>
				<div className=' md:columns-2 mt-10 text-start w-[600px] space-y-5'>
					<p className='text-secondary flex gap-2 items-center'><i class="fa-regular fa-circle-check"></i>Quick to ramp</p>
					<p className='text-secondary flex gap-2 items-center'><i class="fa-regular fa-circle-check"></i>Quick to scale up</p>
					<p className='text-secondary flex gap-2 items-center'><i class="fa-regular fa-circle-check"></i>Easy to optimize</p>
					<p className='text-secondary flex gap-2 items-center'><i class="fa-regular fa-circle-check"></i>Works with all your existing tools</p>
				</div>
			</div>
		</section>
	)
}

export default FeatureHighlight