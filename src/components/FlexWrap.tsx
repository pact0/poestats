import React, { ReactNode } from 'react'

type Props = {
  children: string | JSX.Element | JSX.Element[] | ReactNode
  col?: boolean
}


export const FlexWrap = ({ children, col }: Props) => {
  return (
    <div className={`${col ? "flex-col" : "flex"} align-middle justify-center`}>
      {children}
    </div>
  )
}
