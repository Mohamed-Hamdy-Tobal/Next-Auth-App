import React from 'react'
import CardWrapper from '@/components/auth/CardWrapper'
import MainRegisterForm from './MainRegisterForm'

const RegisterForm = () => {
    return (
        <CardWrapper
            headerLabel={'Create an account'}
            backBtnLabel={"Already have an account?"}
            backBtnHref={'/auth/login'}
            showSocial={true}
        >
            <MainRegisterForm/>
        </CardWrapper>
    )
}

export default RegisterForm