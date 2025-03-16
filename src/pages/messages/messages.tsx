import message from '$/message.png'
const messages = [
	{
		id: 1,
		name: 'Soft Club',
		lastMessage: 'Вы отправили вложение.',
		time: '9 ч.',
		avatar:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKSu72K8l9K5TlK7U3B5bYsrsg0xYw-9g8g&s',
	},
	{
		id: 2,
		name: 'Maks_DOnfort',
		lastMessage: 'Вы отправили вложение.',
		time: '9 ч.',
		avatar:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKSu72K8l9K5TlK7U3B5bYsrsg0xYw-9g8g&s',
	},
	{
		id: 3,
		name: 'Ilon Mask',
		lastMessage: 'В сети 1 дн. назад',
		avatar:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKSu72K8l9K5TlK7U3B5bYsrsg0xYw-9g8g&s',
	},
	{
		id: 4,
		name: 'Eraj Akhmetov',
		lastMessage: 'В сети сегодня: 3',
		avatar:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKSu72K8l9K5TlK7U3B5bYsrsg0xYw-9g8g&s',
	},
]

const notifications = [
	{
		id: 1,
		username: 'ab.durakhmon2794',
		message: 'подписался(-ась) на ваши обновления.',
		time: '6 нед.',
		avatar: 'https://media.tenor.com/HmFcGkSu58QAAAAM/silly.gif',
	},
	{
		id: 2,
		username: '_1smoil_210',
		message: 'подписался(-ась) на ваши обновления.',
		time: '6 нед.',
		avatar: 'https://media.tenor.com/HmFcGkSu58QAAAAM/silly.gif',
	},
	{
		id: 3,
		username: 'umarw0o__',
		message: 'подписался(-ась) на ваши обновления.',
		time: '7 нед.',
		avatar: 'https://media.tenor.com/HmFcGkSu58QAAAAM/silly.gif',
	},
]

export const NotificationModal = ({
	isOpen,
}: {
	isOpen: boolean
	onClose: () => void
}) => {
	if (!isOpen) return null

	return (
		<div className='fixed flex items-center justify-center z-20  left-[20%]'>
			<div className='bg-black text-white p-6 rounded-lg h-[100vh] w-[400px] shadow-lg'>
				<h2 className='text-xl font-semibold mb-4'>Уведомления</h2>
				<div className='space-y-4 max-h-80 overflow-y-auto'>
					{notifications.map(notif => (
						<div key={notif.id} className='flex items-center space-x-3'>
							<img
								src={notif.avatar}
								alt={notif.username}
								className='w-12 h-12 rounded-full'
							/>
							<div className='flex-1'>
								<p className='font-medium'>{notif.username}</p>
								<p className='text-gray-400 text-sm'>{notif.message}</p>
								<p className='text-gray-500 text-xs'>{notif.time}</p>
							</div>
							<button className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded'>
								Подписаться
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

const MessagesPage = () => {
	return (
		<div className='flex h-screen ml-[300px] bg-black text-white'>
			{/* Sidebar */}
			<div className='w-1/3 p-4 border-r border-gray-700'>
				<h2 className='text-xl font-semibold mb-4'>Сообщения</h2>
				<div className='h-[calc(100vh-100px)] overflow-y-auto'>
					{messages.map(msg => (
						<div
							key={msg.id}
							className='flex items-center p-2 hover:bg-gray-800 rounded-lg cursor-pointer'
						>
							<img
								src={msg.avatar}
								alt={msg.name}
								className='w-12 h-12 mr-3 rounded-full'
							/>
							<div>
								<p className='font-medium'>{msg.name}</p>
								<p className='text-sm text-gray-400'>{msg.lastMessage}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Chat Window */}
			<div className='flex-1 flex flex-col text-center items-center justify-center	 '>
				<div className='text-gray-400'>
					<img src={message} className='w-[230px] m-auto' alt='' />
					<p className='text-lg'>Ваши сообщения</p>
					<p className='text-gray-500 mb-4'>
						Отправляйте личные фото и сообщения другу или группе
					</p>
					<button className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded'>
						Отправить сообщение
					</button>
				</div>
			</div>
		</div>
	)
}

export default MessagesPage
