import React, { useState } from 'react'

const Testimonial = () => {
	const [index, setIndex] = useState(0)

	const items = [
		{
			Name: 'John Doe',
			intro: 'Chief Strategy Officer @ Company',
			comment:
				'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
		},
		{
			Name: 'Jane Smith',
			intro: 'Marketing Manager @ Agency',

			comment:
				'Proin non nisi nec nisi vulputate viverra. Phasellus in bibendum felis. Suspendisse vel tempus ligula.',
		},
		{
			Name: 'Michael Brown',
			intro: 'Product Designer @ TechCorp',
			comment:
				'Duis ultricies elit ut libero pellentesque, a bibendum nulla viverra. Nam facilisis tortor vel turpis dictum.',

		},
		{
			Name: 'Emily Davis',
			intro: 'Software Engineer @ DevStudio',

			comment:
				'Donec vitae ante nec nisi feugiat rhoncus. Curabitur at ligula congue, iaculis velit id, pellentesque lorem.',
		},
		{
			Name: 'Chris Johnson',
			intro: 'CEO @ StartupX',

			comment:
				'Aenean dictum metus eu massa hendrerit, non aliquam eros interdum. Morbi eleifend orci non arcu consequat.',
		},
	]

	const handlePrev = () => {
		setIndex((prevIndex) =>
			prevIndex === 0 ? items.length - 1 : prevIndex - 1
		)
	}

	const handleNext = () => {
		setIndex((prevIndex) =>
			prevIndex === items.length - 1 ? 0 : prevIndex + 1
		)
	}



	return (
		<section className="p-20 m-auto">
			<div className="text-white flex justify-between items-center">
				<div
					className="flex justify-center items-center cursor-pointer"
					onClick={handlePrev}
				>
					<i className="fa-solid fa-arrow-left px-[11px] py-[10px] rounded-lg border-[1px] border-dashed border-[aqua] text-secondary bg-[#00ffff0f]"></i>
				</div>
				<div className="flex justify-center items-center flex-col space-y-5 w-[700px]">
					<div className="flex justify-center items-center h-14 w-14 rounded-full bg-primary_box">
						<img src="clone.png" alt="" />
					</div>
					<p className="text-xl text-center">{items[index].comment}</p>
					<p className="text-secondary">{items[index].Name}</p>
					<p className="text-text text-sm">{items[index].intro}</p>
				</div>
				<div
					className="flex justify-center items-center cursor-pointer"
					onClick={handleNext}
				>
					<i className="fa-solid fa-arrow-right px-[11px] py-[10px] rounded-lg border-[1px] border-dashed border-[aqua] text-secondary bg-[#00ffff0f]"></i>
				</div>
			</div>
		</section>
	)
}

export default Testimonial
