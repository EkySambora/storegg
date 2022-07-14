import SignupForm from 'components/organisms/SignupForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const signup = () => {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
            <form action="">
                <div className="pb-50 mx-auto">
                    <Link href="/">
                        <a className="navbar-brand">
                            <Image src="/icon/logo.svg" width={60} height={60} />
                        </a>
                    </Link>
                </div>
                <SignupForm />
            </form>
        </div>
    </section>
  )
}

export default signup