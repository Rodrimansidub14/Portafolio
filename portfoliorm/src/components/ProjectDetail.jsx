import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const projectDetails = {
    blog: {
        title: 'Elden Ring Blog and Crud Administrator',
        description: 'Detailed description of the Elden Ring Blog project...',
        github: 'https://github.com/Rodrimansidub14/BlogP1.git',
    },
    chat: {
        title: 'Chat Application with Vanilla JS',
        description: 'Detailed description of the Chat Application with Vanilla JS project...',
        github: 'https://github.com/Rodrimansidub14/Lab5JSOnly.git',
    },
    steamDen: {
        title: 'SteamDen',
        description: 'Detailed description of the SteamDen project...',
        figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FjvfNWeo3MiwYE36lqwBmW4%2FSteamDen%3Fnode-id%3D0-1%26t%3DyJpQ8H6b3j4oqVpD-1',
        },
    blackList: {
        title: 'ListaNegra',
        description: 'Detailed description of the ListaNegra project...',
        figma: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FvAx6pvOQF4v59tAtkJz7IQ%2FProyecto-4%3Fnode-id%3D0-1%26t%3D7TduDPYRvNhG9lOI-1',
    },
    potentials: {
        title: 'Electric Potential Energy Simulation',
        description: 'Detailed description of the Electric Potential Energy Simulation project...',
        github: 'https://github.com/Rodrimansidub14/Energ-a-potencial-y-potencial-electrico-simulaci-n.git',
    },
    currents: {
        title: 'Electric Current Simulation',
        description: 'Detailed description of the Electric Current Simulation project...',
        github: 'https://github.com/Rodrimansidub14/ElectricCurrentSimulator.git',
    },
};

const ProjectDetail = () => {
    const router = useRouter();
    const { project } = router.query;
    const details = projectDetails[project];

    if (!details) {
        return <div>Project not found</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-10 container">
            <h1 className="text-4xl font-sans font-medium text-center mb-4">{details.title}</h1>
            <p className="text-lg mb-6">{details.description}</p>
            <Link href={details.github} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                GitHub Repository
            </Link>
        </div>
    );
};

export default ProjectDetail;
