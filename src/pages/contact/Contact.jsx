import { Button } from "#components/ui/button";
import { Field } from "#components/ui/field";
import { Input } from "#components/ui/input";

export default function Contact() {
    return (
        <section className="contact-area mb-20">
            <div className="container mx-auto">
                <div className="contact-inner bg-white rounded-xl px-24 py-20">
                    <h3 className="text-[56px] font-extrabold text-primary-ten">
                        We are available in 64 districts
                    </h3>

                    <form className="max-w-sm">
                        <Field orientation="horizontal">
                            <Input type="search" placeholder="Search..." />
                            <Button>Search</Button>
                        </Field>
                    </form>
                </div>
            </div>
        </section>
    );
}
