import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { PenBox } from 'lucide-react'

const Header = () => {
    return (
        <>
            <nav className="py-4 flex justify-between items-center">
                <Link>
                    <img src="/logo.png" alt="HustLr Logo" className="h-35" />
                </Link>
                <div className="flex gap-8">
                    <SignedOut>
                        <Button variant="outline">Login</Button>
                    </SignedOut>
                    <SignedIn>
                        <Link to='/post-job'>
                            <Button variant='destructive' className="rounded-full"><PenBox size={20} className="mr-2" /> Post a Job</Button>
                        </Link>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </>
    )
}

export default Header