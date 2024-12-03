import { Button } from '@nextui-org/react'
import React from 'react'

const LastSection = () => {
	return (
		<section className=' flex justify-center items-center p-20'>
			<div className='flex flex-col justify-center items-center gap-5'>
				<p className='text-lg text-secondary'>GET STARTED</p>
				<p className='text-4xl text-white w-[400px] md:w-[650px] text-center font-semibold'>Embrace the new era of outbound.</p>
				<p className='text-text w-[400px] md:w-[650px] text-center'>Wizia lets you train, activate, and optimize aiDRs. 
				Take your outbound to new levels of performance and efficiency.</p>
				<Button radius='full' color="secondary" className='text-black font-semibold p-6'>
					Sign Up for the Beta<i class="fa-solid fa-arrow-up-right-from-square"></i>
				</Button>
			</div>
		</section>
	)
}

export default LastSection