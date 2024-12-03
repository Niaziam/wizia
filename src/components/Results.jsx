import React from 'react'

const Results = () => {

	const result = [
		{
			mark: '32%',
			comment: 'Improvement in Open Rates',
		},
		{
			mark: '75%',
			comment: 'Improvement in Ramp Time',
		},
		{
			mark: '35%',
			comment: 'Improvement in Meetings Booked',
		},

	]

	return (
		<section className='px-10'>
			<div className="bg-[url('./ImgV.png')] md:bg-[url('./BG.png')] bg-no-repeat bg-cover rounded-2xl p-5 md:p-20 space-y-20">
				<div className='space-y-4'>
					<h1 className='text-white font-semibold text-3xl'>Allocate effort where your reps make an inpact.</h1>
					<p className='text-secondary font-semibold text-3xl'><i>Let us handle the rest.</i></p>
					<p className='text-text text-lg'>Keep your reps “in the air” -- out in the field and on the phone <br className='hidden lg:flex' /> where they can build relationships.</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[700px] gap-10'>
					{
						result.map(item => (
							<div key={item} className='w-[150px] col-span-1'>
								<p className='text-secondary font-bold text-3xl mb-3'>{item.mark}</p>
								<p className='text-white'>{item.comment}</p>
							</div>
						))
					}
				</div>
			</div>
		</section>
	)
}

export default Results