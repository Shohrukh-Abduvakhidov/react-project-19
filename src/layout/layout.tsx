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
import { JSX, useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router'
import { motion } from 'framer-motion'
import { NotificationModal } from '../pages/messages/messages'
import images from "$/images.png"
import { Button } from '../components/ui/button'
import MoreModal from '../pages/moreModal/moreModal'


const searchVariants = {
	hidden: { opacity: 0, scale: 0.9, y: -20 },
	visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
	exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.2 } },
}


type RouteKeys = keyof typeof routes

type SidebarItemProps = {
	icon: JSX.Element
	text: RouteKeys
	badge?: number
	hasDot?: boolean
	avatar?: string
	onClick?: () => void
}

const routes = {
	Home: '/layout',
	Search: 'search',
	Explore: 'explore',
	Reels: 'reels',
	Messages: 'direct',
	Notifications: 'notifications',
	Create: 'create',
	Profile: 'profile',
	More: 'more',
} as const


const Layout: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false) 
	const [isOpen,setIsOpen] = useState<boolean>(false)
	const [openK,setOpenK] = useState<boolean>(false)
	const [openM,setOpenM] = useState<boolean>(false)
	const location = useLocation()

	useEffect(() => {
		setOpen(false);
		setIsOpen(false);
		setOpenK(false);
		setOpenM(false);
	},[location])


	const recentSearches = [
		{
			username: 'asmrmurunonkan1',
			name: 'Münür Önkan',
			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEk896s8cu70DkwnoV3uMXJOycpClUS7Hmg&s',
		},
		{
			username: 'wisdom_academy_edu',
			name: 'Wisdom Academy',
			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEk896s8cu70DkwnoV3uMXJOycpClUS7Hmg&s',
		},
		{
			username: 'ke.rya',
			name: 'КЕРЯ',
			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEk896s8cu70DkwnoV3uMXJOycpClUS7Hmg&s',
		},
		{
			username: 'asedit_011',
			name: 'ASedit',
			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEk896s8cu70DkwnoV3uMXJOycpClUS7Hmg&s',
		},
		{
			username: 'zanjabilbro',
			name: 'Azam Narziev',
			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEk896s8cu70DkwnoV3uMXJOycpClUS7Hmg&s',
		},
	]


	const SearchModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
		isOpen,
		onClose,
	}) => {
		const [search, setSearch] = useState('')

		return isOpen ? (
			<div className='fixed z-10 left-[20%]'>
				<motion.div
					className='bg-black text-white h-[100vh] w-96 rounded-lg shadow-lg p-4'
					initial='hidden'
					animate='visible'
					exit='exit'
					variants={searchVariants}
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

					<div className='mt-4'>
						<div className='flex justify-between items-center mb-2'>
							<span className='text-sm text-gray-400'>Недавнее</span>
							<button className='text-blue-500 text-sm'>Очистить все</button>
						</div>
						{recentSearches.map(user => (
							<div
								key={user.username}
								className='flex items-center justify-between p-2 hover:bg-gray-800 rounded-lg'
							>
								<div className='flex items-center space-x-3'>
									<img
										src={user.avatar}
										alt={user.username}
										className='w-10 h-10 rounded-full'
									/>
									<div>
										<p className='text-sm font-medium'>{user.username}</p>
										<p className='text-xs text-gray-400'>{user.name}</p>
									</div>
								</div>
								<button className='text-gray-500 hover:text-white'>
									&times;
								</button>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		) : null
	}

	return (
		<div className='flex gap-[10px]'>
			<aside className='w-64 border fixed border-white h-[110vh] border-t-transparent border-l-transparent bg-black text-white p-[10px]  flex flex-col'>
				<h1 className='text-2xl font-bold mb-6'>Instagram</h1>
				<nav className='space-y-4'>
					{(Object.keys(routes) as RouteKeys[]).map(key => {
						if (key === 'Search') {
							return (
								<div
									key={key}
									className='flex items-center space-x-3 p-[5px] rounded-lg cursor-pointer hover:bg-gray-800'
									onClick={() => setOpen(!open)} 
								>
									<span className='w-6 h-6 flex items-center justify-center'>
										<Search />
									</span>
									<span className='text-lg'>{key}</span>
								</div>
							)
						}
						if (key === 'Notifications') {
							return (
								<div
									key={key}
									className='flex items-center space-x-3 p-[5px] rounded-lg cursor-pointer hover:bg-gray-800'
									onClick={() => setIsOpen(!isOpen)} 
								>
									<span className='w-6 h-6 flex items-center justify-center'>
										<Heart />
									</span>
									<span className='text-lg'>{key}</span>
								</div>
							)
						}
						if (key === 'Create') {
							return (
								<div
									key={key}
									className='flex items-center space-x-3 p-[5px] rounded-lg cursor-pointer hover:bg-gray-800'
									onClick={() => setOpenK(!openK)} 
								>
									<span className='w-6 h-6 flex items-center justify-center'>
										<PlusSquare />
									</span>
									<span className='text-lg'>{key}</span>
								</div>
							)
						}
						if (key === 'More') {
							return (
								<div
									key={key}
									className='flex items-center space-x-3 p-[5px] rounded-lg cursor-pointer hover:bg-gray-800'
									onClick={() => setOpenM(!openM)} 
								>
									<span className='w-6 h-6 flex items-center justify-center'>
										<MoreHorizontal />
									</span>
									<span className='text-lg'>{key}</span>
								</div>
							)
						}

						return (
							<SidebarItem
								key={key}
								icon={getIcon(key)}
								text={key}
								onClick={() => console.log(`${key} clicked`)}
							/>
						)
					})}
				</nav>
			</aside>
			<Outlet />
			{open && (
				<SearchModal isOpen={open} onClose={() => setOpen(false)} />
			)}{' '}
			{isOpen && (
				<NotificationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
			)}{' '}
			{openM && (
				<MoreModal openM={openM} setOpenM={() => setOpenM(false)} />
			)}{' '}
			{openK && (
				<div className='flex fixed justify-center z-[1] left-[10%] w-[70%] m-auto items-center inset-0'>
					<div className='w-[350px] rounded-2xl	top-0 bottom-0 left-0 ri bg-[#262626] h-[400px]'>
						<div className='bg-black h-[50px] rounded-t-2xl text-center text-[#fff] flex items-center justify-center font-bold'>Создание ПУБЛИКАЦИИ</div>
						<div className='flex flex-col gap-[20px] justify-center items-center'>
							<img src={images} alt="" />
							<h1 className='text-[#fff] font-bold text-[20px]'>Перетащите сюда фото и видео</h1>
							<Button className='bg-blue-400 curpo'>Выбрать на компютере</Button>
						</div>
					</div>
				</div>
			)}

			
		</div>
	)
}


const SidebarItem: React.FC<SidebarItemProps> = ({
	icon,
	text,
	badge,
	hasDot,
	avatar,
	onClick,
}) => {
	return (
		<NavLink
			to={routes[text] || '#'}
			className={({ isActive }) =>
				`flex items-center space-x-3 p-[5px] rounded-lg cursor-pointer relative ${
					isActive ? 'bg-gray-700' : 'hover:bg-gray-800'
				}`
			}
			onClick={onClick} 
		>
			{avatar ? (
				<img src={avatar} alt='Profile' className='w-6 h-6 rounded-full' />
			) : (
				<span className='w-6 h-6 flex items-center justify-center'>{icon}</span>
			)}
			<span className='text-lg'>{text}</span>
			{badge && (
				<span className='absolute right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
					{badge}
				</span>
			)}
			{hasDot && (
				<span className='absolute right-2 w-2 h-2 bg-red-500 rounded-full' />
			)}
		</NavLink>
	)
}

const getIcon = (key: RouteKeys): JSX.Element => {
	switch (key) {
		case 'Home':
			return <Home />
		case 'Search':
			return <Search />
		case 'Explore':
			return <Compass />
		case 'Reels':
			return <Clapperboard />
		case 'Messages':
			return <MessageCircle />
		case 'Notifications':
			return <Heart />
		case 'Create':
			return <PlusSquare />
		case 'Profile':
			return <User />
		case 'More':
			return <MoreHorizontal />
		default:
			return <Home />
	}
}

export default Layout
