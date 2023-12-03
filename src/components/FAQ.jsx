import React from 'react'

const FAQ = () => {
    return (
        <div className='bg-white pt-[200px]'>
            <div className='flex justify-center'>
                {/* FAQ wali backchodi */}
                <div className='flex flex-col max-w-[300px] box-border'>
                    <div className=''><p className='flex bg-white px-3 py-1 text-indigo-500 text-[13px] font-outfit sans-serif font-[600] tracking-wide border-2 border-indigo-100 rounded-lg h-[29.6px] w-[77.7px]'><p className='h-[23px] w-[21px] text-[18px] m-[-4px] mr-[8px] mb-[-1px] ml-0p'>🙋‍♀️</p>FAQs</p> </div>

                    <div className='text-[56px] pr-[37px] font-normal  w-[400px] box-border  leading-[56px] pt-4 font-outfit sans-serif tracking-[-1px] font-[500]'>Need <span className='text-[#FE8162]'>Answers?</span></div>

                    <div className='h-[20px] w-[325px]  text-[20px] font-[500] text-[#4A7575] tracking-[-0.5px] my-4'>Check out our most commonly asked questions below to find the information you need.</div>
                </div>
                {/* Accordion */}
                <div className='relative bottom-10 '>
                <div className="max-w-screen-xl mx-[120px] px-5 my-3 bg-white min-h-sceen">
                        <div className="grid divide-y divide-neutral-200 max-w-xl mt-8 bg-[#F7F8FD] rounded-2xl">
                            <div className="py-2">
                                <details className="group">
                                    <summary className="flex  items-center px-21 font-medium cursor-pointer list-none">
                                        <span className='bg-[#F7F8FD] text-[25px] font-[600] tracking-[-0.5px] leading-[32.5px] active:text-indigo-700 px-[17px]'> What is Manage wise and what does it offer? </span>
                                        <span className="transition group-open:rotate-180 duration-300">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn px-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis praesentium cumque dolorum necessitatibus, accusamus natus, debitis fuga neque nam obcaecati quo molestias maiores ea veritatis, dolor placeat libero! Necessitatibus quae autem beatae fugit hic.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-screen-xl mx-[120px] px-5 my-3 bg-white min-h-sceen">
                        <div className="grid divide-y divide-neutral-200 max-w-xl mt-8 bg-[#F7F8FD] rounded-2xl">
                            <div className="py-2">
                                <details className="group">
                                    <summary className="flex justify-center items-center px-21 font-medium cursor-pointer list-none">
                                        <span className='bg-[#F7F8FD] text-[25px] font-[600] tracking-[-0.5px] leading-[32.5px] active:text-indigo-700 px-[17px]'> Can i access managewise from diffrent plateforms and devices </span>
                                        <span className="transition group-open:rotate-180 duration-300">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn px-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis praesentium cumque dolorum necessitatibus, accusamus natus, debitis fuga neque nam obcaecati quo molestias maiores ea veritatis, dolor placeat libero! Necessitatibus quae autem beatae fugit hic.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-screen-xl mx-[120px] px-5 my-3 bg-white min-h-sceen">
                        <div className="grid divide-y divide-neutral-200 max-w-xl mt-8 bg-[#F7F8FD] rounded-2xl">
                            <div className="py-2">
                                <details className="group">
                                    <summary className="flex justify-center items-center font-medium cursor-pointer list-none">
                                        <span className='bg-[#F7F8FD] text-[25px] font-[600] tracking-[-0.5px] leading-[32.5px] active:text-indigo-700 px-[17px]'> Is Managewise suitable for small buisnesses and larger interproces alike  </span>
                                        <span className="transition group-open:rotate-180 duration-300">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn px-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis praesentium cumque dolorum necessitatibus, accusamus natus, debitis fuga neque nam obcaecati quo molestias maiores ea veritatis, dolor placeat libero! Necessitatibus quae autem beatae fugit hic.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-screen-xl mx-[120px] px-5 my-3 bg-white min-h-sceen">
                        <div className="grid divide-y divide-neutral-200 max-w-xl mt-8 bg-[#F7F8FD] rounded-2xl">
                            <div className="py-2">
                                <details className="group">
                                    <summary className="flex justify-center items-center font-medium cursor-pointer list-none">
                                        <span className='bg-[#F7F8FD] text-[25px] font-[600] tracking-[-0.5px] leading-[32.5px] active:text-indigo-700 px-[17px]'> What kind of support do you offers to the user </span>
                                        <span className="transition group-open:rotate-180 duration-300">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn px-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis praesentium cumque dolorum necessitatibus, accusamus natus, debitis fuga neque nam obcaecati quo molestias maiores ea veritatis, dolor placeat libero! Necessitatibus quae autem beatae fugit hic.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-screen-xl mx-[120px] px-5 my-3 bg-white min-h-sceen">
                        <div className="grid divide-y divide-neutral-200 max-w-xl mt-8 bg-[#F7F8FD] rounded-2xl">
                            <div className="py-2">
                                <details className="group">
                                    <summary className="flex justify-center items-center font-medium cursor-pointer list-none">
                                        <span className='bg-[#F7F8FD] text-[25px] font-[600] tracking-[-0.5px] leading-[32.5px] active:text-indigo-700 px-[17px]'> Is Managewise suitable for small buisnesses and larger interproces alike  </span>
                                        <span className="transition group-open:rotate-180 duration-300">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn px-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis praesentium cumque dolorum necessitatibus, accusamus natus, debitis fuga neque nam obcaecati quo molestias maiores ea veritatis, dolor placeat libero! Necessitatibus quae autem beatae fugit hic.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default FAQ