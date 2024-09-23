import { useNavigate } from 'react-router-dom';
import spider from "../assets/imgs/spider.png"
import web from "../assets/imgs/web.png"
import background from "../assets/imgs/background.jpg"
import HoverIconWithButton from '../components/Buttons/hoverIconWithButton';
import { useState } from 'react';
import Settings from '../components/settings.jsx';
export default function Home(){
    const [isOpenModals , setOpenModals]  = useState({isOpen:false,type:null})   
    const navigate = useNavigate()
    const handleStartGameClick = () => {
          navigate("/game")
    }
    
    const handleSettingClick = () => {
           setOpenModals(oldState => {
                 return {...oldState,isOpen:true,type:"settings"}
           })
    }

    return <>
                <div className="flex flex-column align-items-center h-full" style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"100% 100%"}}>
                        <div className='flex-initial flex w-full justify-content-end'>
                               <img src={spider} />
                        </div>
                        <div className="flex-initial ">
                                <h1 className='text-5xl md:text-6xl m-0'>SPIDER S<img src={web} />LITAIRE</h1>
                        </div>
                        <div className="flex-1 flex justify-content-evenly align-items-center w-full">
                                <HoverIconWithButton text='Setting' className='bg-purple-900 border-none' onClick={handleSettingClick}/>
                                <HoverIconWithButton text='Start' onClick={handleStartGameClick} className='bg-purple-900 border-none'/>
                                <HoverIconWithButton  text='About' className='bg-purple-900 border-none' />        
                        </div>
                </div>
                  <Settings visible={isOpenModals.isOpen && isOpenModals.type === "settings" } onHidden={() => {
                           setOpenModals(oldState => {
                                 return {isOpen:false,type:null}
                           })
                  }}  />                    
           </>

}