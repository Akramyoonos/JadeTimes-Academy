import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    const navItems = [
        { name: 'Tutoring', href: '#' },
        { name: 'Language Partners', href: '#' },
        { name: 'Academic Coaching', href: '#' },
        {
            name: 'Academic Skills Resources',
            href: '#',
            subItems: [
                { name: 'Tips, Tools, and Resources', href: '#' },
                { name: 'Academic Skills Workshops', href: '#', active: true },
                { name: 'Study Halls and Learning Spaces', href: '#' },
                { name: 'Academic Studios', href: '#' },
                { name: 'Peer Learning Consultants', href: '#' },
                { name: 'Academic Skills Self-Assessment', href: '#', external: true },
            ],
        },
        { name: 'Neurodiversity', href: '#' },
    ];

    return (
        <aside className="w-full lg:w-1/4 pr-8">
            <nav className="p-4 lg:p-0">
                <ul>
                    {navItems.map((item, index) => (
                        <li className="mb-2" key={index}>
                            <div className="flex justify-between items-center w-full">
                                <a href={item.href} className="text-gray-700 hover:text-red-700 py-2">
                                    {item.name}
                                </a>
                                {item.subItems && (
                                    <button onClick={() => toggleSubmenu(index)} className="text-gray-500 hover:text-red-700 p-2">
                                        <FontAwesomeIcon icon={faChevronDown} className={`transform transition-transform duration-200 ${ openSubmenu === index ? 'rotate-180' : '' }`} />
                                    </button>
                                )}
                            </div>
                            {item.subItems && openSubmenu === index && (
                                <ul className="pl-4 mt-2 border-l border-gray-200">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li className="py-1" key={subIndex}>
                                            <a
                                                href={subItem.href}
                                                className={`flex items-center justify-between w-full ${
                                                    subItem.active
                                                        ? 'active-link font-bold pl-2 text-red-700'
                                                        : 'text-gray-700'
                                                } hover:text-red-700`}
                                            >
                                                <span>{subItem.name}</span>
                                                {subItem.external && <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-xs" />}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

const Header = () => (
    <header>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Academic Skills Workshops</h1>
        <p className="mb-6 text-gray-700">
            Workshops focus on <span className="font-bold">transferable</span> academic skills. These are skills that
            include many <span className="font-bold">aspects of management</span> such as self-management, stress
            management, time management, project management; presentation and writing skills, test-taking skills, and
            reading and organizing literature information skills. Academic skills also include{' '}
            <span className="font-bold">personal and interpersonal skills</span> ("people skills") like creativity,
            self-motivation, adaptability, listening skills, diplomacy, empathy, honesty, open-mindedness, communication
            (such as with your advisor), being independent but also working effectively in groups, mentoring, and many
            more.
        </p>
    </header>
);

const AcademicStudiosInfo = () => (
    <div className="bg-gray-100 border border-gray-200 p-4 mb-8">
        <p className="text-gray-700">
            Our <span className="font-bold">Academic Studios</span> are currently only offered within the School of
            Engineering and focus on{' '}
            <span className="italic">
                technical skills (how to use citation managers, software to enhance your learning, etc.).
            </span>
        </p>
    </div>
);

const WorkshopRequest = () => (
    <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4">
            Request a Workshop <span className="text-red-700">↗</span>
        </h2>
        <p className="mb-6 text-gray-700">
            Set up a Learning/Academic Skills Workshop for your academic department, dorm, or student group. Academic
            Coaches and Peer Learning Consultants are available to discuss learning skills topics for you.
        </p>
    </section>
);

const Topics = () => {
    const topics = [
        'Time management',
        'Procrastination',
        'Tests (preparation, test anxiety, etc.)',
        'Reading strategies',
        'Writing strategies',
        'Note-taking strategies',
        'Academic resilience',
        'Growth mindset',
        'General learning strategies',
        'Strategies for the student researcher',
        'Problem-solving strategies',
        'Academic Coaching/CTL resources information session',
    ];

    return (
        <section>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Possible Topics</h3>
            <ul className="list-disc list-inside text-gray-700 mb-8">
                {topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                ))}
            </ul>
        </section>
    );
};

const RequestButton = () => (
    <a href="#" className="inline-block bg-red-700 text-white font-bold py-3 px-6 hover:bg-red-800">
        Request a Workshop <span className="font-normal">↗</span>
    </a>
);

const MainContent = () => (
    <main className="w-full lg:w-3/4">
        <Header />
        <AcademicStudiosInfo />
        <WorkshopRequest />
        <Topics />
        <RequestButton />
    </main>
);

const AcademicSkillsWorkshops = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 xl:px-34 py-8">
                <div className="flex flex-col lg:flex-row ">
                    <Sidebar />
                    <MainContent />
                </div>
            </div>
        </div>
    );
};

export default AcademicSkillsWorkshops;