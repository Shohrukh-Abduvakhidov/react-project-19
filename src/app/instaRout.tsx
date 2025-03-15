import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../layout/layout'
import HomePage from '../pages/home/home'
import ReelPage from '../pages/reels/reels'
const InstaRouter = () => {
  return (
	 <>
		<BrowserRouter>
		<Routes>
			<Route path='/' element={<Layout/>}>
			<Route index element={<HomePage/>}/>
			<Route path='reels' element={<ReelPage/>}/>
			</Route>
			<Route path='*' element={<div className='text-[50px] text-center font-stretch-200%'>NOT FOUND</div>}/>
		</Routes>
		</BrowserRouter>
	 </>
  )
}

export default InstaRouter
