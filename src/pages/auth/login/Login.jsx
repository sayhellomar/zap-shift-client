import { Button } from "#components/ui/button";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "#components/ui/field";
import { Input } from "#components/ui/input";
import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Spinner } from "#components/ui/spinner";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { user, loginUser, loading, setLoading, signInWithGoogle } =
        useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    function onSubmit(data) {
        const { email, password } = data;
        loginUser(email, password)
            .then((result) => {
                setLoading(false);
                navigate(location?.state || "/", { replace: true });
            })
            .catch((error) => console.log(error));
    }

    function handleGoogleSignIn() {
        signInWithGoogle()
            .then((result) => {
                navigate(location?.state || "/", { replace: true });
            })
            .catch((error) => {
                setLoading(false);
            });
    }

    return (
        <>
            <title>Login - A parcel delivery application</title>
            <div className="w-full">
                <div className="mb-10">
                    <h2 className="text-5xl font-extrabold text-black">
                        Welcome Back
                    </h2>
                    <p className="text-base text-black mt-1">
                        Login with ZapShift
                    </p>
                </div>

                {loading ? (
                    <>
                        <Spinner className="size-8" />
                        <p className="text-2xl font-normal mt-3">
                            Please wait...
                        </p>
                    </>
                ) : (
                    <>
                        <form
                            className="max-w-md"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <FieldSet>
                                <FieldGroup className="gap-4">
                                    <Field>
                                        <FieldLabel
                                            htmlFor="email"
                                            className="font-medium text-sm text-text-thriteen"
                                        >
                                            Email
                                        </FieldLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            className="py-5"
                                            {...register("email", {
                                                required:
                                                    "Please enter your email to continue",
                                            })}
                                            aria-invalid={
                                                errors.email ? "true" : "false"
                                            }
                                        />
                                    </Field>
                                    <Field>
                                        <FieldLabel
                                            htmlFor="password"
                                            className="font-medium text-sm text-text-thriteen"
                                        >
                                            Password
                                        </FieldLabel>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="••••••••"
                                            className="py-5"
                                            {...register("password", {
                                                required: true,
                                                pattern:
                                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/,
                                            })}
                                            aria-invalid={
                                                errors.password
                                                    ? "true"
                                                    : "false"
                                            }
                                        />
                                        {errors.password && (
                                            <FieldDescription className="text-red-500 text-sm mt-0">
                                                Password must be at least 6
                                                characters long and include at
                                                least one uppercase letter, one
                                                lowercase letter, and one
                                                special character.
                                            </FieldDescription>
                                        )}
                                    </Field>
                                    <Field>
                                        <p className="text-gray-500 text-base underline cursor-pointer">
                                            Forgot Password?{" "}
                                        </p>
                                    </Field>
                                    <Button
                                        type="submit"
                                        className="px-6 py-5 text-base text-text-twelve cursor-pointer"
                                    >
                                        Login
                                    </Button>
                                </FieldGroup>
                            </FieldSet>
                        </form>
                        <div className="max-w-md">
                            <FieldSet>
                                <FieldGroup className="gap-4">
                                    <Field>
                                        <p className="text-gray-500 text-base">
                                            Don't have any account?{" "}
                                            <Link
                                                to="/auth/register"
                                                className="text-primary"
                                                state={location.state}
                                                replace
                                            >
                                                Register
                                            </Link>
                                        </p>
                                    </Field>
                                    <Field>
                                        <p className="text-center text-gray-500 text-base">
                                            Or
                                        </p>
                                    </Field>
                                    <Button
                                        onClick={handleGoogleSignIn}
                                        className="px-6 py-5 text-base text-text-twelve cursor-pointer bg-gray-200 hover:bg-gray-300"
                                    >
                                        <FaGoogle /> Login with Google
                                    </Button>
                                </FieldGroup>
                            </FieldSet>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
