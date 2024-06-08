import CardWrapper from "./card-wrapper"

const LoginForm = () => {
    return (
        <CardWrapper
            headrLable="Welcome back"
            backButtonLabel="Don't have an account"
            backButtonHref="/auth/register"
            showSocial
        >
            Login Form
        </CardWrapper>
    )
}

export default LoginForm