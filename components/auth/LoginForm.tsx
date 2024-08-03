import React from 'react'
import CardWrapper from '@/components/auth/CardWrapper'
import MainLoginForm from '@/components/auth/MainLoginForm'

const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel={'Welcome back!'}
            backBtnLabel={"Don't have an account?"}
            backBtnHref={'/auth/register'}
            showSocial={true}
        >
            <MainLoginForm/>
        </CardWrapper>
    )
}

export default LoginForm