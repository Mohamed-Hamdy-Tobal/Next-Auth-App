export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="main-bg flex justify-center items-center w-full h-full">
            {children}
        </div>
    )
}