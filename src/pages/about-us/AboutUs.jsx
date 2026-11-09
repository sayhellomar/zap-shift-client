import { Tabs, TabsContent, TabsList, TabsTrigger } from "#components/ui/tabs";
const tabs = [
    {
        id: 1,
        title: "Story",
        description: [
            "We started with a simple vision: to make a meaningful difference through creativity, innovation, and dedication. What began as a small initiative has grown into an opportunity to connect with people, solve real-world challenges, and create lasting value.",
            "Throughout our journey, we've embraced new ideas, learned from every experience, and continuously pushed ourselves to do better. Today, we remain committed to building meaningful relationships and delivering solutions that make a difference.",
        ],
    },
    {
        id: 2,
        title: "Mission",
        description: [
            "Our mission is to empower individuals and businesses with reliable, effective, and forward-thinking solutions. We believe in putting people first, maintaining high standards, and creating opportunities for growth.",
            `We strive to:
- Deliver quality in everything we do.
- Build lasting relationships based on trust.
- Embrace innovation and continuous improvement.
- Create meaningful value for our community.
- Turn ideas into impactful results.`,
        ],
    },
    {
        id: 3,
        title: "Success",
        description: [
            "Our success is built on dedication, teamwork, and the trust of the people we serve. Every milestone represents the hard work, commitment, and collaboration that drive us forward.",
            "We don't measure success only by numbers. We measure it through the relationships we've built, the challenges we've overcome, and the positive impact we've created along the way.",
        ],
    },
    {
        id: 4,
        title: "Team & Others",
        description: [
            "Behind every successful achievement is a team of passionate people who share a common vision. Our team brings together different skills, experiences, and perspectives to turn challenges into opportunities.",
            "We believe in collaboration, creativity, and mutual respect. By supporting one another and working toward shared goals, we create an environment where everyone can contribute, grow, and succeed.",
        ],
    },
];
export default function AboutUs() {
    return (
        <>
            <title>About Us - Zap Shift</title>
            <section className="about-us mb-20 mt-2">
                <div className="container mx-auto">
                    <div className="about-us-inner py-20 px-25 bg-white rounded-xl">
                        <div className="max-w-xl">
                            <h1 className="text-[56px] font-extrabold text-primary-ten">
                                About Us
                            </h1>
                            <p className="text-base font-normal text-text-six">
                                Enjoy fast, reliable parcel delivery with
                                real-time tracking and zero hassle. From
                                personal packages to business shipments — we
                                deliver on time, every time.
                            </p>
                        </div>
                        <div className="border-t border-t-gray-200 mt-10 pt-10">
                            <Tabs>
                                <TabsList
                                    variant="line"
                                    defaultValue={tabs[0].title}
                                >
                                    {tabs.map((tab) => (
                                        <TabsTrigger
                                            key={`${tab.id}-${tab.title}`}
                                            value={tab.title}
                                            className="text-xl mr-4 cursor-pointer data-active:text-primary-six data-active:after:bg-primary-six first:pl-0"
                                        >
                                            {tab.title}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>

                                {tabs.map((tab) => (
                                    <TabsContent
                                        key={`${tab.id}-${tab.title}`}
                                        value={tab.title}
                                        className="mt-6"
                                    >
                                        {tab.description.map((des) => (
                                            <p
                                                className="text-lg mt-3 font-normal text-text-six"
                                                key={`${tab.id}-${des[0]}`}
                                            >
                                                {des}
                                            </p>
                                        ))}
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
