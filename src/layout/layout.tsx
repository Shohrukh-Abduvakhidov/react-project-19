import './layout.css'

import {
	Home,
	Search,
	Compass,
	Clapperboard,
	MessageCircle,
	Heart,
	PlusSquare,
	User,
	MoreHorizontal,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router'
import { motion } from 'framer-motion'
import { NotificationModal } from '../pages/messages/messages'
import images from '$/images.png'
import MoreModal from '../pages/moreModal/moreModal'


const SearchModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
	isOpen,
	onClose,
}) => {
	const [search, setSearch] = useState('')

	if (!isOpen) return null

	return (
		<div className='fixed z-10 inset-0 flex justify-start items-center lg:left-[21%]'>
			<motion.div
				className='bg-black text-white h-[100vh] w-full lg:w-96 rounded-lg shadow-lg p-4'
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.9 }}
			>
				<div className='flex justify-between items-center'>
					<h2 className='text-lg font-semibold'>Поисковый запрос</h2>
					<button
						onClick={onClose}
						className='text-gray-400 hover:text-white text-[40px] cursor-pointer'
					>
						&times;
					</button>
				</div>

				<input
					type='text'
					placeholder='Поиск'
					className='w-full mt-2 p-2 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
			</motion.div>
		</div>
	)
}

const Layout: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [openK, setOpenK] = useState<boolean>(false)
	const [openM, setOpenM] = useState<boolean>(false)
	const location = useLocation()

	useEffect(() => {
		setOpen(false)
		setIsOpen(false)
		setOpenK(false)
		setOpenM(false)
	}, [location])

	return (
		<div className=''>
			<nav className='w-full fixed lg:hidden bg-black py-[0px] flex items-center justify-between px-[20px]'>
				<h1 className='text-[20px] text-[#fff] font-bold'>Instagram</h1>
				<div className='flex gap-[30px] items-center'>
					<div
						className='sidebar-item text-[#fff] my-[20px] cursor-pointer font-bold sidebar-item flex gap-[20px] items-center text-[20px]'
						onClick={() => setIsOpen(!isOpen)}
					>
						<Heart />
					</div>
					<NavLink
						to='direct'
						className={({ isActive }) =>
							`sidebar-item text-[#fff]  my-[20px] font-bold sidebar-item flex gap-[20px] items-center text-[20px] ${
								isActive ? 'text-blue-500' : ''
							}`
						}
					>
						<MessageCircle />
					</NavLink>
				</div>
			</nav>

			<footer className='lg:hidden fixed bottom-0 border-t bg-gray-950 py-[0px] flex px-[40px] gap-[50px] w-full'>
				<NavLink
					to='/layout'
					className={({ isActive }) =>
						`sidebar-item flex gap-[20px] items-center text-[20px] ${
							isActive ? 'text-white-500' : ''
						}`
					}
				>
					<Home className='text-[#fff] text-[20px]' />
				</NavLink>
				<div
					className='my-[20px] text-[#fff] cursor-pointer font-bold sidebar-item sidebar-item flex gap-[20px] items-center text-[20px]'
					onClick={() => setOpen(!open)}
				>
					<Search />
				</div>
				<div
					className='sidebar-item text-[#ffff] my-[20px] cursor-pointer font-bold sidebar-item flex gap-[20px] items-center text-[20px]'
					onClick={() => setOpenK(!openK)}
				>
					<PlusSquare />
				</div>
				<NavLink
					to='reels'
					className={({ isActive }) =>
						`sidebar-item flex gap-[20px] items-center text-[20px] ${
							isActive ? 'text-white-500' : ''
						}`
					}
				>
					<Clapperboard className='text-[#fff] text-[20px]' />
				</NavLink>
				<NavLink
					to='profile'
					className={({ isActive }) =>
						`sidebar-item my-[20px] text-[#fff] font-bold sidebar-item flex gap-[20px] items-center text-[20px] ${
							isActive ? 'text-blue-500' : ''
						}`
					}
				>
					<User />
				</NavLink>
			</footer>

			<aside className='w-64 border fixed lg:flex hidden border-white h-[110vh] border-t-transparent border-l-transparent bg-black text-white p-[10px] flex-col'>
				<h1 className='text-2xl font-bold mb-6'>Instagram</h1>
				<nav className='space-y-4'>
					<div className='my-[20px] text-[30px] font-bold'>
						<NavLink
							to='/layout'
							className={({ isActive }) =>
								`sidebar-item flex gap-[20px] items-center text-[20px] ${
									isActive ? 'text-white-500' : ''
								}`
							}
						>
							<Home /> Home
						</NavLink>
					</div>

					<div
						className='my-[20px] cursor-pointer font-bold sidebar-item sidebar-item flex gap-[20px] items-center text-[20px]'
						onClick={() => {
							setOpen(!open)
						}}
					>
						<Search /> Search
					</div>

					<div>
						<NavLink
							to='explore'
							className={({ isActive }) =>
								`sidebar-item my-[20px] cursor-pointer font-bold sidebar-item flex gap-[20px] items-center text-[20px] ${
									isActive ? 'text-blue-500' : ''
								}`
							}
						>
							<Compass /> Explore
						</NavLink>
					</div>
					<div>
						<NavLink
							to='reels'
							className={({ isActive }) =>
								`sidebar-item my-[20px] font-bold sidebar-item flex gap-[20px] items-center text-[20px] ${
									isActive ? 'text-blue-500' : ''
								}`
							}
						>
							<Clapperboard /> Reels
						</NavLink>
					</div>
					<div>
						<NavLink
							to='direct'
							className={({ isActive }) =>
								`sidebar-item my-[20px] font-bold sidebar-item flex gap-[20px] items-center text-[20px] ${
									isActive ? 'text-blue-500' : ''
								}`
							}
						>
							<MessageCircle /> Messages
						</NavLink>
					</div>

					<div
						className='sidebar-item my-[20px] cursor-pointer font-bold sidebar-item flex gap-[20px] items-center text-[20px]'
						onClick={() => setIsOpen(!isOpen)}
					>
						<Heart /> Notifications
					</div>

					<div
						className='sidebar-item my-[20px] cursor-pointer font-bold sidebar-item flex gap-[20px] items-center text-[20px]'
						onClick={() => setOpenK(!openK)}
					>
						<PlusSquare /> Create
					</div>

					<div>
						<NavLink
							to='profile'
							className={({ isActive }) =>
								`sidebar-item my-[20px] font-bold sidebar-item flex gap-[20px] items-center text-[20px] ${
									isActive ? 'text-blue-500' : ''
								}`
							}
						>
							<User /> Profile
						</NavLink>
					</div>

					<div
						className='sidebar-item sidebar-item flex gap-[20px] items-center my-[20px] cursor-pointer font-bold text-[20px]'
						onClick={() => setOpenM(!openM)}
					>
						<MoreHorizontal /> More
					</div>
				</nav>
			</aside>

			<Outlet />

			{open && <SearchModal isOpen={open} onClose={() => setOpen(false)} />}
			{isOpen && (
				<NotificationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
			)}
			{openM && <MoreModal openM={openM} setOpenM={() => setOpenM(false)} />}
			{openK && (
				<div className='flex fixed justify-center z-[1] left-[10%] h-[400px] w-[70%] m-auto items-center inset-0'>
					<div className='w-[350px] rounded-2xl bg-[#262626] h-[400px]'>
						<div className='bg-black h-[50px] rounded-t-2xl text-center text-[#fff] flex items-center justify-center font-bold'>
							Создание ПУБЛИКАЦИИ
						</div>
						<div className='flex flex-col gap-[20px] justify-center items-center'>
							<img src={images} alt='' />
							<h1 className='text-[#fff] font-bold text-[20px]'>
								Перетащите сюда фото и видео
							</h1>
							<button className='bg-blue-400 cursor-pointer px-[10px] py-[5px] rounded-md text-[#fff] font-bold'>
								Выбрать на компютере
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Layout
