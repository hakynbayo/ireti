import Image, { StaticImageData } from 'next/image';
import React from 'react';

import adeyemo from '../../../public/images/adeyemo.png';
import eric from '../../../public/images/eric.png';
import ikponmwosa from '../../../public/images/ikponmwosa.png';
import lois from '../../../public/images/lois.png';
import olusayo from '../../../public/images/olusayo.png';

// Define the props type for the TeamMemberCard component
interface TeamMemberCardProps {
    imageSrc: StaticImageData;
    name: string;
    title: string;
    description: string;
    bgColor: string;
}

// Reusable component for each team member
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
    imageSrc,
    name,
    title,
    description,
    bgColor,
}) => {

    return (
        <div className='relative w-full md:w-[calc(100vw/3.5)] h-[444px] shrink-0'>
            {/* First div (visible by default) */}
            <div className='absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-in-out hover:opacity-0'>
                <Image
                    src={imageSrc}
                    alt={name}
                    width={396}
                    height={444}
                    placeholder='blur'
                    className='object-cover w-[396px] h-[444px]'
                />
                <div className='absolute w-full bottom-0 bg-black text-white text-center py-4'>
                    <p className='text-xl font-semibold'>{name}</p>
                    <p className='text-lg font-normal'>{title}</p>
                </div>
            </div>

            {/* Second div (visible on hover) */}
            <div className='absolute top-0 left-0 bg-white w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                <div className='flex flex-col justify-between h-full'>
                    <div className='p-6 flex text-center'>
                        <p className='text-base font-normal text-center'>{description}</p>
                    </div>
                    <div className={`bg-[${bgColor}] text-white text-center py-4`}>
                        <p className='text-xl font-semibold'>{name}</p>
                        <p className='text-lg font-normal'>{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TeamDescription: React.FC = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4 flex-nowrap w-full'>
            <TeamMemberCard
                imageSrc={lois}
                name="Lois Chizi-Boms"
                title="Communications and Volunteer Manager"
                description="Lois is a passionate law student with a focus on IP law. As a versatile virtual assistant, she has excelled across various roles. In addition to her professional pursuits, Lois volunteers as a volunteer coordinator and is a dedicated children's teacher."
                bgColor="#00365E"
            />
            <TeamMemberCard
                imageSrc={eric}
                name="Eric Thomas"
                title="Operations and Tech Lead"
                description="Eric Thomas is an experienced Operations Lead known for optimizing processes and improving efficiency in dynamic work environments. With a strong background in managing teams, streamlining workflows, and driving operational success, he plays a key role in ensuring smooth day-to-day business functions."
                bgColor="#00365E"
            />
            <TeamMemberCard
                imageSrc={ikponmwosa}
                name="Ikponmwosa Osemwota"
                title="Lead Designer"
                description="Ik Osemwota is a project manager with a passion for changing lives. Armed with a knowledge of delivering diverse projects, IK brings a fresh passion and drive to see the underprivileged gain access to basic amenities lacking in so many Nigerian communities. In her spare time, IK loves to watch crime shows and enjoys the occasional binge watching." bgColor="#00365E"
            />
            <TeamMemberCard
                imageSrc={adeyemo}
                name="Folashade Adeyemo"
                title="Executive Director and Founder"
                description="Folashade Adeyemo is a dedicated Change Manager with five years of professional experience, committed to making a difference in society. Passionate about helping the underprivileged and homeless, she uses her skills to drive change in both professional and community settings. Folashade is also deeply invested in mentoring and supporting the mental well-being of children, inspiring the next generation."
                bgColor="#00365E"
            />
            <TeamMemberCard
                imageSrc={olusayo}
                name="Oluwasayo Oyenuga"
                title="Finance and Welfare Manager"
                description="Sayo is a dedicated Change Manager with 3-4 years of professional experience. Outside of her role, she enjoys exploring her creative side by crafting unique scents, planning memorable events, and experimenting with innovative drink recipes. Sayo’s diverse passions drive her to bring a fresh perspective to everything she does."
                bgColor="#00365E"
            />
        </div>
    );
};

export default TeamDescription;
