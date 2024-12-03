import React from 'react'

const Features = () => {

	const cardItems = [
		{
			img: 'Vector1.png',
			heading: 'You are in Control',
			about: 'aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.',
		},
		{
			img: 'Vector2.png',
			heading: 'Infinitely Scalable',
			about: 'Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.',
		},
		{
			img: 'Vector3.png',
			heading: 'Incredibly Flexible',
			about: 'Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.',
		},
	]

  return (
	<section className='p-28'>
		<div className='grid grid-cols-3 gap-32'>
			{
				cardItems.map(item => (
					<div key={item} className='col-span-1 space-y-5'>
						<img src={item.img} alt="" />
						<h5 className='text-white font-semibold text-xl'>{item.heading}</h5>
						<p className='text-text text-base'>{item.about}</p>
					</div>
				))
			}
		</div>
	</section>
  )
}

export default Features