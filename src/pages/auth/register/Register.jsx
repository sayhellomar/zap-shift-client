import { Button } from "#components/ui/button";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "#components/ui/field";
import { Input } from "#components/ui/input";
import { Link } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <title>Register - A parcel delivery application</title>
            <div className="w-full">
                <div className="mb-10">
                    <h2 className="text-5xl font-extrabold text-black">
                        Welcome Back
                    </h2>
                    <p className="text-base text-black mt-1">
                        Register with ZapShift
                    </p>
                </div>
                <form className="max-w-md" onSubmit={handleSubmit(onSubmit)}>
                    <FieldSet>
                        <FieldGroup className="gap-4">
                            <Field>
                                <FieldLabel
                                    htmlFor="name"
                                    className="font-medium text-sm text-text-thriteen"
                                >
                                    Name
                                </FieldLabel>
                                <Input
                                    id="name"
                                    type="name"
                                    placeholder="Name"
                                    className="py-5 w-full"
                                    {...register("name", {
                                        required:
                                            "Please enter your name to continue",
                                    })}
                                    aria-invalid={
                                        errors.name ? "true" : "false"
                                    }
                                />
                            </Field>
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
                                {/* {errors.email && (
                                    <FieldDescription className="text-red-500 text-sm mt-0">
                                        {errors.email.message}
                                    </FieldDescription>
                                )} */}
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
                                        errors.password ? "true" : "false"
                                    }
                                />
                                {errors.password && (
                                    <FieldDescription className="text-red-500 text-sm mt-0">
                                        Password must be at least 6 characters
                                        long and include at least one uppercase
                                        letter, one lowercase letter, and one
                                        special character.
                                    </FieldDescription>
                                )}
                            </Field>
                            <Field>
                                <FieldLabel
                                    htmlFor="picture"
                                    className="font-medium text-sm text-text-thriteen"
                                >
                                    Picture
                                </FieldLabel>
                                <Input
                                    className="h-12 pt-3"
                                    id="picture"
                                    type="file"
                                />
                            </Field>
                            <Field>
                                <p className="text-gray-500 text-base mt-2">
                                    Already have an account?{" "}
                                    <Link
                                        to="/auth/login"
                                        className="text-primary"
                                    >
                                        Login
                                    </Link>
                                </p>
                            </Field>
                            <Button
                                type="submit"
                                className="px-6 py-5 text-base text-text-twelve cursor-pointer mt-4"
                            >
                                Register
                            </Button>
                            <Field>
                                <p className="text-center text-gray-500 text-base mt-2">
                                    Or
                                </p>
                            </Field>
                            <Button className="px-6 py-5 text-base text-text-twelve cursor-pointer mt-2 bg-gray-200 hover:bg-gray-300">
                                <FaGoogle /> Register with Google
                            </Button>
                        </FieldGroup>
                    </FieldSet>
                </form>
            </div>
        </>
    );
}
