import postImg from "$/postImg.png"
import {Heart , MessageCircle , Send, Bookmark , MoreHorizontal} from "lucide-react"
const HomePage: React.FC = () => {
  return (
    <div className="bg-black ml-[250px] text-white min-h-screen  p-4">
      <div className="flex">
			<div className='w-[550px]'>

        {/* Stories */}
        <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="flex space-x-3 scrollbar-none overflow-x-auto p-2">
          {[...Array(8)].map((_, index) => (
		  <div className=''>
            <div key={index} className="w-[100px] p-[1px] flex justify-center items-center h-[95px] rounded-[50%] bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#515BD4] ">
				<div className="w-[90px] rounded-[50%] h-[90px] bg-black text-white p-4">
				</div>
			 </div>
				<p className='text-center'>User-{index + 1}</p>
		  </div>
			))}
        </div>

        {/* Post */}
        <div className="bg-blackrounded-lg p-4 my-4">
          <div className="flex items-center space-x-2 justify-between">
				<div className='flex items-center gap-[10px]'>
            <div className="w-10 h-10 rounded-full bg-gray-700"></div>
            <span className="text-sm font-bold">master_nosirov</span>
				</div>
				<MoreHorizontal/>
          </div>
          <div className="mt-3">
            <img 
              src={postImg} 
              alt="Post" 
              className="w-full rounded-md"
            />
			 <div className='flex py-[5px] justify-between items-center'>
				<div className='flex gap-[20px] items-center'>
					<Heart className='cursor-pointer'/>
					<MessageCircle className='cursor-pointer'/>
					<Send className='cursor-pointer'/>
				</div>
					<Bookmark className='cursor-pointer'/>
			 </div>
          </div>
        </div>
			</div>

		  {/*recomandations */}
		  <div className='w-[400px] px-[10px]'>
        {/* Recommendations */}
        <div className="mt-4">
          <h3 className="text-lg font-bold">Рекомендации для вас</h3>
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center justify-between p-2">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                <span className="text-sm">User_{index + 1}</span>
              </div>
              <button className="text-blue-400 text-sm">Подписаться</button>
            </div>
          ))}
        </div>
		  </div>
      </div>
    </div>
  );
};

export default HomePage;
