import {
	Settings,
	Moon,
	Bookmark,
	AlertCircle,
	LogOut,
	List,
 } from "lucide-react";
import { useNavigate } from 'react-router'
 
 const MoreModal = ({ openM, setOpenM }: { openM: boolean; setOpenM: (openM: boolean) => void }) => {

	const naviate = useNavigate()
	const handleLogout = () => {
		naviate("/login")
	};
 
	return (
	  <div className="fixed z-20 left-[22%] top-[30%] inline-block text-left">
		 <button
			onClick={() => setOpenM(!openM)}
			className="bg-gray-800 hidden text-white px-4 py-2 rounded-md items-center"
		 >
			<List className="w-5 h-5 mr-2" />
			Меню
		 </button>
 
		 {openM && (
			<div className="absolute right-0 mt-2 w-64 bg-gray-900 text-white rounded-md shadow-lg">
			  <ul className="py-2">
				 <MenuItem icon={<Settings className="w-5 h-5" />} label="Настройки" />
				 <MenuItem icon={<Bookmark className="w-5 h-5" />} label="Ваши действия" />
				 <MenuItem icon={<Bookmark className="w-5 h-5" />} label="Сохраненное" />
				 <MenuItem icon={<Moon className="w-5 h-5" />} label="Переключить режим" />
				 <MenuItem icon={<AlertCircle className="w-5 h-5" />} label="Сообщить о проблеме" />
				 <MenuItem label="Threads" />
				 <hr className="border-gray-700 my-2" />
				 <MenuItem icon={<LogOut className="w-5 h-5" />} label="Выйти" onClick={handleLogout} />
			  </ul>
			</div>
		 )}
	  </div>
	);
 };
 
 const MenuItem = ({
	icon,
	label,
	onClick,
 }: {
	icon?: React.ReactNode;
	label: string;
	onClick?: () => void; 
 }) => (
	<li
	  className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
	  onClick={onClick}  
	>
	  {icon && <span className="mr-2">{icon}</span>}
	  {label}
	</li>
 );
 
 export default MoreModal;
 