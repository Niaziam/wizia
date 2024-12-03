import React from 'react';
import { Button } from '@nextui-org/react';

const FirstSection = () => {
	return (
		<section className="bg-[url('/ImgV.png')] lg:bg-[url('/Img.png')] bg-cover bg-center bg-no-repeat lg:grid lg:grid-cols-3 px-10 pt-10 pb-36 lg:p-32">
			<div className='lg:col-span-1 space-y-4 text-center flex flex-col lg:text-start lg:block'>
				<p className='text-secondary text-2xl'>AI SDRs (aiDRs)</p>

				<h1 className='text-white text-6xl'><span className='font-bold'>More</span> <i>leads</i>,</h1>

				<h1 className='text-white text-6xl'><span className='font-bold'>less</span> <i>people</i>.</h1>

				<p className='text-text text-xl lg:text-[1.1rem]'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>

				<Button radius='full' color="secondary" className='text-black font-semibold p-6'>
					Sign Up for the Beta<i class="fa-solid fa-arrow-up-right-from-square"></i>
				</Button>
			</div>
		</section>
	);
};

export default FirstSection;
