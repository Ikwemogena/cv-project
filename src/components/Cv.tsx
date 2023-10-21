import { Icon } from '@iconify/react';

type Information = {
    name: string;
    email: string;
    phone: string;
    school: string;
    title: string;
    date: string;
    company: string;
    position: string;
    role: string;
    startDate: string;
    endDate: string;
}

function Cv({ information }: { information: Information }) {
    return (
        <>
            <div className="bg-[#0e374e] text-white p-4 h-28">
                <h1 className="text-5xl text-center font-semibold" >{information?.name}</h1>
                <div className="flex gap-4 justify-center pt-2 text-lg">
                    <p className='flex items-center gap-2'><Icon icon="gg:mail" />{information?.email}</p>
                    <p className='flex items-center gap-2'><Icon icon="gg:phone" />{information?.phone}</p>
                </div>
            </div>
            <div className="m-7">
                <h2 className="text-2xl font-medium text-center bg-gray-200 mt-2 p-1">Education</h2>
                <div className="flex gap-4 items-center">
                    <div className='w-[10rem]'>
                        <p>{information?.date}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-xl">{information?.school}</p>
                        <p className="text-md">{information?.title}</p>
                    </div>
                </div>

                <h2 className="text-2xl font-medium text-center bg-gray-400 mt-2 p-1">Professional Experience</h2>
                <div className="flex gap-4 items-center">
                    <div className='w-[10rem]'>
                        <p>{information?.startDate} - {information?.endDate}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-xl">{information?.company}</p>
                        <p className="text-md">{information?.position}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cv