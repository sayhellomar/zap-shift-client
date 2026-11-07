import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "#components/ui/accordion";

export default function Faq() {
    return (
        <section className="faq-area pb-20">
            <div className="container mx-auto">
                <div className="faq-inner">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-[32px] font-extrabold text-primary-ten">
                            Frequently Asked Question (FAQ)
                        </h3>
                        <p className="text-base opacity-70 font-light mt-1">
                            Enhance posture, mobility, and well-being
                            effortlessly with Posture Pro. Achieve proper
                            alignment, reduce pain, and strengthen your body
                            with ease!
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto mt-10">
                        <Accordion defaultValue={["item-1"]}>
                            <AccordionItem
                                value="item-1"
                                className="group data-open:border data-open:border-primary-nine data-open:bg-primary-six/15 rounded-xl px-8 py-3 bg-white mb-2"
                            >
                                <AccordionTrigger className="text-base font-bold group-data-open:text-primary-ten group-data-open:border-b group-data-open:border-b-primary-six/50 hover:no-underline rounded-none pb-3 group-data-open:mb-3">
                                    How does this posture corrector work?
                                </AccordionTrigger>
                                <AccordionContent className="text-text-six">
                                    A posture corrector works by providing
                                    support and gentle alignment to your
                                    shoulders, back, and spine, encouraging you
                                    to maintain proper posture throughout the
                                    day. Here’s how it typically functions: A
                                    posture corrector works by providing support
                                    and gentle alignment to your shoulders.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                value="item-2"
                                className="group data-open:border data-open:border-primary-nine data-open:bg-primary-six/15 rounded-xl px-8 py-3 bg-white mb-2"
                            >
                                <AccordionTrigger className="text-base font-bold group-data-open:text-primary-ten group-data-open:border-b group-data-open:border-b-primary-six/50 hover:no-underline rounded-none pb-3 group-data-open:mb-3">
                                    Is it suitable for all ages and body types?
                                </AccordionTrigger>
                                <AccordionContent>
                                    A posture corrector works by providing
                                    support and gentle alignment to your
                                    shoulders, back, and spine, encouraging you
                                    to maintain proper posture throughout the
                                    day. Here’s how it typically functions: A
                                    posture corrector works by providing support
                                    and gentle alignment to your shoulders.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                value="item-3"
                                className="group data-open:border data-open:border-primary-nine data-open:bg-primary-six/15 rounded-xl px-8 py-3 bg-white"
                            >
                                <AccordionTrigger className="text-base font-bold group-data-open:text-primary-ten group-data-open:border-b group-data-open:border-b-primary-six/50 hover:no-underline rounded-none pb-3 group-data-open:mb-3">
                                    Does it really help with back pain and
                                    posture improvement?
                                </AccordionTrigger>
                                <AccordionContent>
                                    A posture corrector works by providing
                                    support and gentle alignment to your
                                    shoulders, back, and spine, encouraging you
                                    to maintain proper posture throughout the
                                    day. Here’s how it typically functions: A
                                    posture corrector works by providing support
                                    and gentle alignment to your shoulders.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
