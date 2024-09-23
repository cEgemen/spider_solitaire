import BackgroundImgCard from "./backgroundImgCard";


export default function BorderEffecetBackgroundImgCard({src="",borderColor="white",isSelected=false,className="",onClick=() => {}}){
     
    const border = !isSelected ? "" : `border-3 border-${borderColor} shadow-5`
 

    return <BackgroundImgCard src={src} className={`${border} ${className}`} onClick={onClick} />

}