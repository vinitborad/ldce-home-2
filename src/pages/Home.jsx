import React from 'react'
import AchievementPhoto from "../assets/images/achievements-photo.jpg"
import LdceLogo from "../assets/images/ldce-logo.png"

const Home = () => {
    return (
        <div className=' min-h-screen'>

            {/* LATER WE CAN WRAP IN NEW COMPONENT */}
            <header className=' absolute top-0 left-0 w-full py-[30px] px-[100px] flex items-center justify-between z-50'>
                {/* <h2 className=' text-white select-none text2 text-4xl font-bold'>LOGO</h2> */}
                <img src={LdceLogo} alt='LDCE Logo' className=' w-[200px] h-[100px] object-contain'/>
                <nav>
                    <a href='#' className=' text-lg font-semibold ml-5 py-[6px] px-4 transition duration-500text-[#333] relative group'>Home<span className=' absolute top-0 left-0 w-full h-full bg-white rounded-3xl -z-10 transition duration-500'></span></a>
                    <a href='#' className=' text-lg text-white font-semibold ml-5 py-[6px] px-4 transition duration-500 hover:text-[#333] relative group'>Acedemics<span className=' absolute top-0 left-0 w-full h-full bg-white rounded-3xl -z-10 transition duration-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100'></span></a>
                    <a href='#' className=' text-lg text-white font-semibold ml-5 py-[6px] px-4 transition duration-500 hover:text-[#333] relative group'>Departments<span className=' absolute top-0 left-0 w-full h-full bg-white rounded-3xl -z-10 transition duration-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100'></span></a>
                    <a href='#' className=' text-lg text-white font-semibold ml-5 py-[6px] px-4 transition duration-500 hover:text-[#333] relative group'>Circulars<span className=' absolute top-0 left-0 w-full h-full bg-white rounded-3xl -z-10 transition duration-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100'></span></a>
                    <a href='#' className=' text-lg text-white font-semibold ml-5 py-[6px] px-4 transition duration-500 hover:text-[#333] relative group'>Contact<span className=' absolute top-0 left-0 w-full h-full bg-white rounded-3xl -z-10 transition duration-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100'></span></a>
                    <a href='#' className=' text-lg text-white font-semibold ml-5 py-[6px] px-4 transition duration-500 hover:text-[#333] relative group'>More<span className=' absolute top-0 left-0 w-full h-full bg-white rounded-3xl -z-10 transition duration-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100'></span></a>
                </nav>
            </header>

            <div className=' min-h-[80vh] flex bg-background bg-fixed bg-cover bg-no-repeat bg-center items-center justify-center'>
                <h1 className=' text-6xl font-bold text-white welcome-heading'>Welcome to LDCE</h1>
            </div>

            {/* ACHIEVEMENTS SECTION */}

            <div className='bg-white flex justify-center mb-16'>
                <div className='w-10/12 flex justify-start flex-col mt-11'>
                    <div className='flex justify-start'>
                        <div className=' h-full w-[3px] bg-blue-200'></div>
                        <h2 className=' text-4xl font-bold ml-3 text-[#070F2B] text-shadow-css'>Achievements</h2>
                    </div>
                    <div className=' mt-7 flex items-center overflow-x-scroll space-x-4 w-full'>
                        {/* Card 1 */}
                        <div className='flex justify-start flex-col min-w-[300px] max-w-[300px] pb-4 box-blue-shadow border-b-4 border-green-800'>
                            {/* Photo */}
                            <img src={AchievementPhoto} alt='Achievement' className='w-[300px] h-[200px] rounded-lg '/>
                            {/* Description */}
                            <div className='flex flex-col justify-start p-1 space-y-2 mt-1'>
                                <h3 className=' text-1xl font-bold text-start text-zinc-700 uppercase leading-5'>International exposure to LDCE startup“Exposit” by RoshanRaval at Startup Turkey 2019</h3>
                                <p className=' text-xs max-h-8 overflow-hidden text-zinc-500'>Hemankshi Ishwar student of computer department and member of National Service Scheme (NSS) LDCE ...</p>
                            </div>
                        </div>
                        {/* Card 1 */}
                        <div className='flex justify-start flex-col min-w-[300px] max-w-[300px] pb-4 box-blue-shadow border-b-4 border-green-800'>
                            {/* Photo */}
                            <img src={AchievementPhoto} alt='Achievement' className='w-[300px] h-[200px] rounded-lg '/>
                            {/* Description */}
                            <div className='flex flex-col justify-start p-1 space-y-2 mt-1'>
                                <h3 className=' text-1xl font-bold text-start text-zinc-700 uppercase leading-5'>International exposure to LDCE startup“Exposit” by RoshanRaval at Startup Turkey 2019</h3>
                                <p className=' text-xs max-h-8 overflow-hidden text-zinc-500'>Hemankshi Ishwar student of computer department and member of National Service Scheme (NSS) LDCE ...</p>
                            </div>
                        </div>
                        {/* Card 1 */}
                        <div className='flex justify-start flex-col min-w-[300px] max-w-[300px] pb-4 box-blue-shadow border-b-4 border-green-800'>
                            {/* Photo */}
                            <img src={AchievementPhoto} alt='Achievement' className='w-[300px] h-[200px] rounded-lg '/>
                            {/* Description */}
                            <div className='flex flex-col justify-start p-1 space-y-2 mt-1'>
                                <h3 className=' text-1xl font-bold text-start text-zinc-700 uppercase leading-5'>International exposure to LDCE startup“Exposit” by RoshanRaval at Startup Turkey 2019</h3>
                                <p className=' text-xs max-h-8 overflow-hidden text-zinc-500'>Hemankshi Ishwar student of computer department and member of National Service Scheme (NSS) LDCE ...</p>
                            </div>
                        </div>
                        {/* Card 1 */}
                        <div className='flex justify-start flex-col min-w-[300px] max-w-[300px] pb-4 box-blue-shadow border-b-4 border-green-800'>
                            {/* Photo */}
                            <img src={AchievementPhoto} alt='Achievement' className='w-[300px] h-[200px] rounded-lg '/>
                            {/* Description */}
                            <div className='flex flex-col justify-start p-1 space-y-2 mt-1'>
                                <h3 className=' text-1xl font-bold text-start text-zinc-700 uppercase leading-5'>International exposure to LDCE startup“Exposit” by RoshanRaval at Startup Turkey 2019</h3>
                                <p className=' text-xs max-h-8 overflow-hidden text-zinc-500'>Hemankshi Ishwar student of computer department and member of National Service Scheme (NSS) LDCE ...</p>
                            </div>
                        </div>
                        {/* Card 1 */}
                        <div className='flex justify-start flex-col min-w-[300px] max-w-[300px] pb-4 box-blue-shadow border-b-4 border-green-800'>
                            {/* Photo */}
                            <img src={AchievementPhoto} alt='Achievement' className='w-[300px] h-[200px] rounded-lg '/>
                            {/* Description */}
                            <div className='flex flex-col justify-start p-1 space-y-2 mt-1'>
                                <h3 className=' text-1xl font-bold text-start text-zinc-700 uppercase leading-5'>International exposure to LDCE startup“Exposit” by RoshanRaval at Startup Turkey 2019</h3>
                                <p className=' text-xs max-h-8 overflow-hidden text-zinc-500'>Hemankshi Ishwar student of computer department and member of National Service Scheme (NSS) LDCE ...</p>
                            </div>
                        </div>
                        {/* Card 1 */}
                        <div className='flex justify-start flex-col min-w-[300px] max-w-[300px] pb-4 box-blue-shadow border-b-4 border-green-800'>
                            {/* Photo */}
                            <img src={AchievementPhoto} alt='Achievement' className='w-[300px] h-[200px] rounded-lg '/>
                            {/* Description */}
                            <div className='flex flex-col justify-start p-1 space-y-2 mt-1'>
                                <h3 className=' text-1xl font-bold text-start text-zinc-700 uppercase leading-5'>International exposure to LDCE startup“Exposit” by RoshanRaval at Startup Turkey 2019</h3>
                                <p className=' text-xs max-h-8 overflow-hidden text-zinc-500'>Hemankshi Ishwar student of computer department and member of National Service Scheme (NSS) LDCE ...</p>
                            </div>
                        </div>
                        {/* Card 1 */}
                        <div className='flex justify-start flex-col min-w-[300px] max-w-[300px] pb-4 box-blue-shadow border-b-4 border-green-800'>
                            {/* Photo */}
                            <img src={AchievementPhoto} alt='Achievement' className='w-[300px] h-[200px] rounded-lg '/>
                            {/* Description */}
                            <div className='flex flex-col justify-start p-1 space-y-2 mt-1'>
                                <h3 className=' text-1xl font-bold text-start text-zinc-700 uppercase leading-5'>International exposure to LDCE startup“Exposit” by RoshanRaval at Startup Turkey 2019</h3>
                                <p className=' text-xs max-h-8 overflow-hidden text-zinc-500'>Hemankshi Ishwar student of computer department and member of National Service Scheme (NSS) LDCE ...</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>

            <div className=' w-full h-[1000px] border border-black'></div>

        </div>
    )
}

export default Home