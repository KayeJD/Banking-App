import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const AuthForm = ( {type}: {type: string}) => {
    const [user, setUser] = useState(null)
    return (
        <section className='auth-form'>
            <header className='flex-col gap-5 md:gap-8'>
            <Link href = '/' className = 'mgap-1 px-4items-center center-pointer gap-1'>
                <Image 
                      src='/icons/logo.svg'
                      width={34}
                      height={34} 
                      alt='Volex Logo'            
                />
                <h1 className = 'text-26 font-ibm-plex-serif font-bold text-black-1'>Volex</h1>
            </Link>

            <div className='flex flex-col gap-1 md:gap-3'>
                <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                    {/* if we have a user, 'Link Account', else */}
                    {user
                    ? 'Link Account'
                    : type === 'sign-in'
                        ? 'Sign In'
                        : 'Sign Up'
                    }
                </h1>
                <p className='text-16 font-normal text-gray-600'>
                    {user
                    ? 'Link Link your account to get started'
                    : 'Please enter your details'
                    }
                </p>
            </div>
            </header>
            {/* If the User is already authenticated. If not, display the form (use shadcn)*/}
            {user ? (
                <div className='flex flex-col gap-4'>
                    {/* Going to put PlaidLink to link to Plaid account ehre */}
                </div>
            ): ( 
                <>
                </>
            )}

        </section>
    )
}

export default AuthForm