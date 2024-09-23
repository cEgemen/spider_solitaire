import NormalCard from "./normalCard";


export default function BackgroundImgCard({src,className,onClick}){


     return <NormalCard  className={className} style={{backgroundImage:`url(${src})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} onClick={onClick}/>

}