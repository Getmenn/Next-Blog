import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";

export default async function Signin(){
    return (
        <div className="signin">
            <h1>SignIn</h1>
            <GoogleButton />
            <span>or</span>
            <SignInForm />
        </div>
    )
}