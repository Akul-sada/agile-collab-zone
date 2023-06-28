import Image from "next/image";
import './../StyledComponentElements/auth-style.css';
import {
  AuthContainer,
  AuthForm,
  AuthHeader,
  EmailLabel,
  InputEmail,
  InputPassword,
  LoginButton,
  PasswordLabel,
} from "../StyledComponentElements/AuthenticationElements";

export default function Authentication() {
  return (
    <>
      <div className="flex justify-center items-center border min-h-screen">
        <AuthContainer>
          <AuthHeader>
            <Image alt="Company logo" src="/107.jpg" width={65} height={65} />
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Start a new organization
            </button>
          </AuthHeader>
          <div className="flex justify-start items-start">
            <h3 className="text-3xl font-bold">Log in</h3>
          </div>
          <div>
            <div className="flex justify-center items-center gap-x-12">
              <button className="flex items-center justify-center gap-4 bg-transparent text-black font-light py-2 px-4 border border-black-500 rounded-full">
                <div>
                  <Image
                    alt="Google sign in logo"
                    src="/search.png"
                    height="20"
                    width="20"
                  ></Image>
                </div>
                <span>Login with Google</span>
              </button>
              <button className="flex items-center justify-center gap-4 bg-transparent  text-black font-light py-2 px-4 border border-black-500 rounded-full">
                <div>
                  <svg
                    className="sc-dkrFOg cPgBxP"
                    aria-hidden="true"
                    role="img"
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.08001 13.0951C3.72827 14.4468 3.72827 16.6384 5.08001 17.9902C6.43174 19.3419 8.62334 19.3419 9.97507 17.9902C11.3268 16.6384 11.3268 14.4468 9.97507 13.0951C8.62334 11.7434 6.43174 11.7434 5.08001 13.0951ZM4.3729 18.6973C2.63064 16.955 2.63064 14.1302 4.3729 12.388C6.11516 10.6457 8.93992 10.6457 10.6822 12.388C12.4244 14.1302 12.4244 16.955 10.6822 18.6973C8.93992 20.4395 6.11516 20.4395 4.3729 18.6973Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.1609 12.9095C9.96566 12.7143 9.96566 12.3977 10.1609 12.2024L19.1676 3.19576C19.3628 3.0005 19.6794 3.0005 19.8747 3.19576C20.07 3.39102 20.07 3.70761 19.8747 3.90287L10.868 12.9095C10.6728 13.1048 10.3562 13.1048 10.1609 12.9095Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.013 4.35045C18.2082 4.15519 18.5248 4.15519 18.7201 4.35045L22.052 7.68234C22.2472 7.8776 22.2472 8.19418 22.052 8.38944C21.8567 8.5847 21.5401 8.58471 21.3449 8.38944L18.013 5.05756C17.8177 4.86229 17.8177 4.54571 18.013 4.35045Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.8316 6.53176C16.0268 6.3365 16.3434 6.3365 16.5387 6.53176L18.8957 8.88879C19.091 9.08405 19.091 9.40063 18.8957 9.59589C18.7004 9.79115 18.3839 9.79115 18.1886 9.59589L15.8316 7.23887C15.6363 7.04361 15.6363 6.72703 15.8316 6.53176Z"
                    ></path>
                  </svg>
                </div>
                <span>Login with SAML</span>
              </button>
            </div>
          </div>
          <div className="line-container">
            <span className="line"></span>
            <span className="text">Or Login With Email</span>
            <span className="line"></span>
          </div>
          <AuthForm>
            <EmailLabel htmlFor="email">Email</EmailLabel>
            <InputEmail id="email" placeholder="Email" />
            <PasswordLabel htmlFor="password">Password</PasswordLabel>
            <InputPassword id="password" placeholder="Password"/>
            <LoginButton>Login</LoginButton>
          </AuthForm>
        </AuthContainer>
      </div>
    </>
  );
}
