import React from 'react'

const ProfilePage: React.FC = () => {
	return (
		<div className='max-w-4xl lg:ml-[300px] lg:py-[20px] py-[100px] text-white mx-auto '>
			<div className='flex items-center space-x-6'>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUAoh1xM6GvmUsSr7HCy_6ITCRBnprtp_jw&s'
					alt='Avatar'
					className='lg:w-32 w-[100px] h-[100px] lg:h-32 rounded-full border-2 border-gray-600'
				/>
				<div>
					<div className='flex items-center space-x-4'>
						<h2 className='text-2xl font-semibold lg:block hidden text-white'>
							daster_011_
						</h2>
						<button className='bg-gray-700 lg:block hidden text-white px-4 py-1 rounded'>
							Редактировать профиль
						</button>
						<button className='bg-gray-700 lg:block hidden text-white px-4 py-1 rounded'>
							Посмотреть архив
						</button>
					</div>
					<div className='flex text-white space-x-4 mt-2'>
						<span>
							<strong>12</strong> публикаций
						</span>
						<span>
							<strong>33</strong> подписчиков
						</span>
            <span className='lg:hidden block'>
							<strong>358</strong> под
						</span>
						<span className='lg:block hidden'>
							<strong>358</strong> подписок
						</span>
					</div>
					<div className='mt-2'>
						<p className='font-semibold'>daster</p>
						<p>My YouTube channel</p>
						<a
							href='https://www.youtube.com/@daster_011'
							className='text-blue-400'
						>
							www.youtube.com/@daster_011
						</a>
					</div>
				</div>
			</div>
			<div className='flex gap-[20px] lg:hidden py-[10px] items-center'>
				<button className='bg-gray-700 text-white px-2 py-1 rounded'>
					Редактировать про...
				</button>
				<button className='bg-gray-700 text-white px-4 py-1 rounded'>
					Посмотреть профиль
				</button>
			</div>
			<div className='mt-6 border-t border-gray-700 pt-4 flex justify-around'>
				<button className='text-white'>ПУБЛИКАЦИИ</button>
				<button className='text-gray-400'>REELS</button>
				<button className='text-gray-400'>СОХРАНЕННОЕ</button>
				<button className='text-gray-400'>ОТМЕТКИ</button>
			</div>
			<div className='grid grid-cols-3 gap-2 mt-4'>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIv18sTjGS7rthypLjdmHvOT6EcJEsL2VuEA&s'
					className='w-full h-[300px] object-cover'
					alt='Post 1'
				/>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitgJ8fcY0NRI58fjT5T_tvXpJoe2jdc0bfg&s'
					className='w-full h-[300px] object-cover'
					alt='Post 2'
				/>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzUmcCoBmXv8FouKjolbdnS6j6q01_pibkbA&s'
					className='w-full h-[300px] object-cover'
					alt='Post 3'
				/>
			</div>
		</div>
	)
}

export default ProfilePage
