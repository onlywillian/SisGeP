"use client"

import { toast, ToastContainer } from 'react-toastify';

export const notifySuccess = (message: string, url: string) => {
    toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
        theme: 'colored',
        onClose: () => {
            if (!url){
                window.location.reload()
            }else{
                window.location.href=url;
            }
        }
    })
}

export const notifyError = (message: string) => {
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored' 
    })
}
export const notifyWarn = (message: string) => {
    toast.warn(message, {
        position: toast.POSITION.TOP_RIGHT,
    })
}
export const notifyInfo = (message: string) => {
    toast.info(message, {
        position: toast.POSITION.TOP_RIGHT,
    })
}

export const ToastContainerComponent = ToastContainer;