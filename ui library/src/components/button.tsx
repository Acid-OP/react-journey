import { ReactElement } from "react";
export interface ButtonInterface {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    title: String;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    
}

const sizeStyles = {
    "lg" : "px-9 py-4 text-xl rounded-xl cursor-pointer",
    "md" : "px-4 py-2 text-md rounded-md cursor-pointer",
    "sm" : "px-2 py-1 text-sm rounded-sm cursor-pointer",
}

const variantStyles = {
    "primary" : "bg-purple-600 hover:bg-purple-700 text-white",
    "secondary" : "bg-purple-400 hover:bg-purple-700 text-purple-600",
}

export function Button(props: ButtonInterface) {
    return <button className = {`${sizeStyles[props.size]} ${variantStyles[props.variant]}`}onClick={props.onClick} >
        
        <div className="flex items-center">
            {props.startIcon}
            <div className="pl-2 pr-2">
                {props.title}
            </div>
            {props.endIcon}
        </div>
    </button>
}