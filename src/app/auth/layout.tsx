import exp from "constants";

const AuthLayout = ({ 
    children 
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-secondary">
            <div className="bg-secondary rounded">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;