import BorderHoverCard from "./borderAndContentHoverCard";


export default function SelectionCard({content,color,onClick=() => {}}){

     return <BorderHoverCard onClick={onClick} hoverInitData={{isHover:false,color}}>
                          {content}
            </BorderHoverCard>

}