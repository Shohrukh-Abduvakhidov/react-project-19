import React from 'react'
import reelImage from "$/reel-image.jpg"
import { Heart, MessageCircle } from 'lucide-react'
const ReelPage: React.FC = () => {
	return (
		<div className='bg-black  fixed z-[-1] bottom-0 top-0 py-[0px] mb-[50px] my-[50px] lg:left-[30%] right-0 flex justify-center items-center p-4'>
			<div className='relative bg-black h-[99vh] rounded-lg overflow-hidden max-w-sm w-full'>
				
				<img
					src={reelImage}
					alt='Reel'
					className='w-full h-full'
				/>

				
				<div className='absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold'>
					Trallalero Trallala
				</div>

				
				<div className='absolute bottom-4 left-4 text-white'>
					
					<div className='flex items-center gap-2'>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBWB76EZKUgHdARYa-XNyIzoiJiUiyKiFrg&s'
							alt='User'
							className='w-10 h-10 rounded-full'
						/>
						<div>
							<p className='font-semibold text-sm'>@lennard_aso_jo</p>
							<p className='text-xs text-gray-300'>Подписаться</p>
						</div>
					</div>

					
					<p className='text-sm mt-2'>
						Einzige Reihenfolge ... <span className='text-gray-400'>ещё</span>
					</p>

					
					<p className='text-xs mt-1 text-gray-400'>
						🎵 аудио lennard_aso_jo - Ориг
					</p>
				</div>

				
				<div className='absolute bottom-4 right-4 flex flex-col gap-4 text-white'>
					<div className='text-center'>
						<Heart className='text-center ml-[10px]'/> <p className='text-xs'>178 тыс.</p>
					</div>
					<div className='text-center'>
						<MessageCircle className='ml-[10px]'/> <p className='text-xs'>2 344</p>
					</div>
					<div className='text-center'>⋮</div>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBWB76EZKUgHdARYa-XNyIzoiJiUiyKiFrg&s'
						alt='Profile'
						className='w-10 h-10 rounded-full'
					/>
				</div>
			</div>
		</div>
	)
}

export default ReelPage
