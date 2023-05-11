import { ChildProcess } from 'child_process'
export type ContainerProps = {
    children: ReactNode
}
import React, { ReactNode } from 'react'

const Container = ({ children }: ContainerProps) => {
    return (
        <div className='my-0 mx-auto w-full max-w-[700px]'>{children}</div>
    )
}

export default Container