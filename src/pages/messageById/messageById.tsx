import { useParams } from 'react-router';
import icons1 from "$/icons-chat-2.png"
import icons2 from "$/icons-chat.png"
import icon from "$/icon-chat.png"
const MessageById = () => {
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
      name: 'Eraj Akhmetov',
      lastMessage: 'Вы отправили вложение.',
      time: '9 ч.',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKSu72K8l9K5TlK7U3B5bYsrsg0xYw-9g8g&s',
    },
    {
      id: 4,
      name: 'Ilon MAsk',
      lastMessage: 'Вы отправили вложение.',
      time: '9 ч.',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKSu72K8l9K5TlK7U3B5bYsrsg0xYw-9g8g&s',
    },
    {
      id: 5,
      name: 'Bill Geits',
      lastMessage: 'Вы отправили вложение.',
      time: '9 ч.',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKSu72K8l9K5TlK7U3B5bYsrsg0xYw-9g8g&s',
    },
    {
      id: 6,
      name: 'Jeff Bezos',
      lastMessage: 'Вы отправили вложение.',
      time: '9 ч.',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKSu72K8l9K5TlK7U3B5bYsrsg0xYw-9g8g&s',
    },
  ];

  const { id } = useParams<{ id: string }>();

  
  const message = messages.find((user) => user.id === parseInt(id!));

  if (!message) {
    return <div>Сообщение не найдено</div>;
  }

  return (
    <div>
      <div className="fixed text-[#fff] bg-black flex lg:ml-[255px] items-center justify-between gap-[10px] lg:w-[80%] w-full border py-[10px]">
			<div className='flex items-center gap-[10px]'>
        <img src={message.avatar} alt={message.name} className="w-12 h-12 rounded-full" />
		  <div className=''>
        <h2>{message.name}</h2>
			</div>
		  </div>
			<img src={icons1}  className='w-[100px]' alt="" />
      </div>
		<div className='w-[95%] py-[2px] border flex items-center fixed bottom-[5%] justify-between rounded-2xl lg:w-[80%] lg:mb-0 mb-[50px] m-auto lg:ml-[255px]'>
			<div className='flex gap-[10px] items-center'>
			<img src={icon} className='w-[50px]' alt="" />
			<input type="text" className='outline-none text-[#fff]' placeholder='Message...' />
			</div>
			<img src={icons2} className='w-[150px]' alt="" />
		</div>
    </div>
  );
};

export default MessageById;
