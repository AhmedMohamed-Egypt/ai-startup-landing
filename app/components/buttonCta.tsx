
import { ReactNode } from "react";

type ButtonCtaProps = {
  classBtn?: string;
  children: ReactNode,
  onClick?:()=>void
};

export default function ButtonCta({classBtn="",children,onClick}:ButtonCtaProps) {
  const classes = `cursor-pointer flex items-center font-mono uppercase font-normal  border-white border-[1.5px] px-3 py-2 rounded-full text-sm`
  return (
     <button className={`${classes} ${classBtn}`} onClick={onClick}>
       {children}
        </button>
  )
}
