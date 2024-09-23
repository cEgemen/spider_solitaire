import { Button } from "primereact/button";

export default function NormalButton({text="",onClick=() => {},icon="",className="",disabled=false,rounded=false}) {

     return <Button onClick={onClick} icon={icon}  disabled={disabled}  rounded={rounded} className={className} > 
                      <h4>{text}</h4> 
      </Button>

}