import React from 'react'
import { Button } from "@/components/ui/button"
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const Social = () => {
    return (
        <div className='flex items-center gap-x-2 w-full'>
            <Button
                variant={'outline'}
                size={'lg'}
                className='w-full'
                onClick={() => {}}
            >
                <FcGoogle className='w-5 h-5'/>
            </Button>   
            <Button
                variant={'outline'}
                size={'lg'}
                className='w-full'
                onClick={() => {}}
            >
                <FaGithub className='w-5 h-5'/>
            </Button>   
        </div>
    )
}

export default Social
