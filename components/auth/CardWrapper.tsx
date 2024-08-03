'use client'

import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from '@/components/ui/card'
import Header from '@/components/auth/Card_Components/Header'
import Social from '@/components/auth/Card_Components/Social'
import BackButton from '@/components/auth/Card_Components/BackButton'

interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backBtnLabel: string,
    backBtnHref: string,
    showSocial: boolean,
}

const CardWrapper = ({
    children,
    headerLabel,
    backBtnLabel,
    backBtnHref,
    showSocial,
}: CardWrapperProps) => {
    return (
        <Card className='w-[400px] shadow-md'>
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton 
                    label={backBtnLabel}
                    href={backBtnHref}
                />
            </CardFooter>
        </Card>
    )
}

export default CardWrapper
