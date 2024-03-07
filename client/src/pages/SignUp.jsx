import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side  */}
        <div className="flex-1">
          <Link to="/" className="text-sm sm:text-xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-500 rounded-lg text-white">
              Talip{"'s"}
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            this is a demo transcript You can sign up with your email address or
            use the social media buttons below.
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form method="post" className="flex flex-col gap-4">
            <div>
              <Label value="your username" />
              <TextInput
                type="text"
                name="username"
                placeholder="Username"
                id='username'
              />
            </div>
            <div>
              <Label value="your email" />
              <TextInput
                type="mail"
                name="email"
                placeholder="Email"
                id='mail'
              />
            </div>
            <div>
              <Label value="your password" />
              <TextInput
                type="password"
                name="Password"
                placeholder="Password"
                id='password'
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit">
              Sign Up 
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an Account?</span>
            <Link to='/sign-in' className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
