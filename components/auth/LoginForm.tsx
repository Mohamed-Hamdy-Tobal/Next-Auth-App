import React from 'react'
import CardWrapper from '@/components/auth/CardWrapper'

const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel={'Welcome back!'}
            backBtnLabel={"Don't have an account?"}
            backBtnHref={'/auth/register'}
            showSocial={true}
        >
            Login Form!
        </CardWrapper>
    )
}

export default LoginForm