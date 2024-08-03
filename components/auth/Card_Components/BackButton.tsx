'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

interface BackButtonProps {
    label: string,
    href: string,
}


const BackButton = ({label,href}:BackButtonProps) => {

    const router = useRouter()

    return (
        <div className='flex items-center gap-x-2 w-full'>
            <Button
                variant={'link'}
                size={'lg'}
                className='w-full'
                onClick={() => {router.push(href)}}
            >
                {label}
            </Button>   
        </div>
    )
}

export default BackButton
