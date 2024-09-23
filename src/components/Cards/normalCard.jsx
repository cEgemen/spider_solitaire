

export default function NormalCard({children,className="",style={},onClick=() => {} , onMouseEnter=() => {} , onMouseLeave=() => {}}){
               
      const styleClass = " w-6rem md:w-8rem h-10rem  md:h-13rem  border-round-xl " +  className      

      return <div className={styleClass} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={style}>
                       {children}
            </div>

}