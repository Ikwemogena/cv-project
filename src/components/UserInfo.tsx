import { useState } from 'react'
import Cv from './Cv'


function UserInfo() {
    const [info, setinfo] = useState('Ikwemogena Abdulai')
    const [email, setEmail] = useState('abdulaimogena@gmail.com')
    const [phone, setPhone] = useState('+234 708 000 0000')
    const [school, setSchool] = useState('Babcock University, Ilishan - Remo')
    const [title, setTitle] = useState('Bsc. Computer Science')
    const [date, setDate] = useState('2022-07-16')
    const [company, setCompany] = useState('Check DC')
    const [position, setPosition] = useState('Frontend Engineer')
    const [role, setRole] = useState('')
    const [startDate, setStartDate] = useState('2023-08-01')
    const [endDate, setEndDate] = useState('Present')

    const userDetails = {
        name: info,
        email: email,
        phone: phone,
        school: school,
        title: title,
        date: date,
        company: company,
        position: position,
        role: role,
        startDate: startDate,
        endDate: endDate
    };

    return (
        <>
            <div className='flex gap-4'>
                <div className=''>
                    <div className='rounded-lg p-4 m-4 bg-white flex flex-col justify-center items-center shadow-sm'>
                        <h1 className='text-3xl font-semibold'>General Information</h1>
                        <form className='w-[25rem]'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input onChange={(event) => setinfo(event.target.value)} type="text" placeholder="Type here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Type here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input onChange={(event) => setPhone(event.target.value)} type="text" placeholder="Type here" className="input input-bordered" />
                            </div>
                        </form>
                    </div>
                    <div className='rounded-lg p-4 m-4 bg-white flex flex-col justify-center items-center shadow-sm'>
                        <h1 className='text-3xl font-semibold'>Education</h1>
                        <div className='w-[25rem]'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">School Name</span>
                                </label>
                                <input onChange={(event) => setSchool(event.target.value)} type="text" placeholder="Babcock University" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Degree</span>
                                </label>
                                <input onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Type here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date of Study</span>
                                </label>
                                <input onChange={(event) => setDate(event.target.value)} type="date" placeholder="Type here" className="input input-bordered" />
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg p-4 m-4 bg-white flex flex-col justify-center items-center shadow-sm'>
                        <h1 className='text-3xl font-semibold'>Practical Experience</h1>
                        <div className='w-[25rem]'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Name</span>
                                </label>
                                <input onChange={(event) => setCompany(event.target.value)} type="text" placeholder="Type here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Position</span>
                                </label>
                                <input onChange={(event) => setPosition(event.target.value)} type="text" placeholder="Type here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Responsibilities</span>
                                </label>
                                <input onChange={(event) => setRole(event.target.value)} type="text" placeholder="Type here" className="input input-bordered" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <div className="flex gap-3">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Start Date</span>
                                        </label>
                                        <input onChange={(event) => setStartDate(event.target.value)} type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">End Date</span>
                                        </label>
                                        <input onChange={(event) => setEndDate(event.target.value)} type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='mt-4 mb-4 mr-5 w-full shadow-md'>
                    <Cv information={userDetails} />
                </div>
            </div>
        </>
    )
}

export default UserInfo