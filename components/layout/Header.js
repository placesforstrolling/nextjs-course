import React from 'react'
import Link from 'next/link'
import classes from './header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
        <div>
            <Link href='/'>Next Events</Link>
        </div>

        <nav>
            <ul>
                <li>

                    <Link href='/events'>
                        <a>Browse all Events</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header