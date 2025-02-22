import React from 'react'
import Button from './Button'

const AddAnnouncement = () => {
    return (
        <section className='containerWrapper pt-32'>
            <div className='bg-white px-9 py-8'>
                <div className='flex items-center justify-between mb-8'>
                    <div className='w-full'>
                        <h3 className='font-bold text-xl w-full'>Add a car</h3>
                        <div className='size-[14px] w-full text-darkGreyColor'>Renting out your car</div>
                    </div>

                    <Button text='Add' type="submit" />
                </div>
                <form action="" className='grid grid-cols-3'>
                    <div className='mb-6'>
                        <label htmlFor="" className='block text-xl font-bold w-full'>
                            Car brand
                        </label>
                        <input type="text" placeholder='Your name' className='bg-gray-100 px-8 py-4 mt-4 rounded-xl focus: border-gray-400 outline-none' />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="" className='block text-xl font-bold w-full'>
                            Car brand
                        </label>
                        <input type="text" placeholder='Phone number' className='bg-gray-100 px-8 py-4 mt-4 rounded-xl focus: border-gray-400 outline-none' />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="" className='block text-xl font-bold w-full'>
                            Fuel consumption
                        </label>
                        <input type="text" placeholder='Phone number' className='bg-gray-100 px-8 py-4 mt-4 rounded-xl focus: border-gray-400 outline-none' />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="" className='block text-xl font-bold w-full'>
                            Url Image
                        </label>
                        <input type="text" placeholder='Address' className='bg-gray-100 px-8 py-4 mt-4 rounded-xl focus: border-gray-400 outline-none' />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="" className='block text-xl font-bold w-full'>
                            Price per day
                        </label>
                        <input type="text" placeholder='Town or city' className='bg-gray-100 px-8 py-4 mt-4 rounded-xl focus: border-gray-400 outline-none' />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="" className='block text-xl font-bold w-full'>
                            Car capacity
                        </label>
                        <input type="text" placeholder='Town or city' className='bg-gray-100 px-8 py-4 mt-4 rounded-xl focus: border-gray-400 outline-none' />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddAnnouncement
