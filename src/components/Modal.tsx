import React, { ReactNode } from 'react'
import cn from 'classnames'

export type ModalProps = {
    open: boolean,
    onClose: () => void,
    children?: ReactNode
}

const Modal = ({ open, onClose, children }: ModalProps) => {
    return (
        <div onClick={onClose} className={cn(' top-0 bottom-0 right-0 left-0 inset-0 bg-[rgba(128, 128, 128, 0.5)] backdrop-blur-sm fixed items-center justify-center',
            { 'hidden': !open },
            { 'flex': open }
        )}>
            <div onClick={e => e.stopPropagation()} className='p-4 bg-white rounded text-black shadow-md'>
                {children}
            </div>
        </div>
    )
}

export default Modal