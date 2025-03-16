import img1 from "$/explore-1.jpg"
import img2 from "$/explore-2.jpg"
import img3 from "$/explore-3.jpg"
import img4 from "$/explore-4.jpg"
import img5 from "$/explore-5.jpg"
import ReelsIcon from "$/reelsIcon.png"
const Explore = () => {
  return (
	 <div className='ml-[300px] mt-[50px] flex gap-[10px] items-center'>
		<div className='grid grid-cols-2 gap-[10px] grid-rows-2'>
			<div className='w-[300px] relative cursor-pointer  h-[300px] flex-1/2'>
			<img src={img1} alt="" className="w-full h-full object-cover" />
			<img src={ReelsIcon}	className='absolute z-10 top-0 right-0' alt="" />
			</div>
			<div className='w-[300px] relative cursor-pointer h-[300px] flex-1/2'>
			<img src={img2} alt=""  className="w-full h-full object-cover" />
			<img src={ReelsIcon}	className='absolute z-10 top-0 right-0' alt="" />
			</div>
			<div className='w-[300px] relative cursor-pointer h-[300px] flex-1/2'>
			<img src={img3} alt="" className="w-full h-full object-cover"  />
			<img src={ReelsIcon}	className='absolute z-10 top-0 right-0' alt="" />
			</div>
			<div className='w-[300px] relative cursor-pointer h-[300px] flex-1/2'>
			<img src={img4} alt="" className="w-full h-full object-cover"  />
			<img src={ReelsIcon}	className='absolute z-10 top-0 right-0' alt="" />
			</div>
		</div>
		<div  className='w-[330px] relative cursor-pointer h-[100%]'>
		<img src={img5} alt="" className="w-full h-full object-cover"  />
		<img src={ReelsIcon}	className='absolute z-10 top-0 right-0' alt="" />
		</div>
	 </div>
  )
}

export default Explore
