import React from 'react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Ooooops! That page cannot be found :(</h2>
            <p>Redurectubg to <Link href="/">Homepage</Link> for more our Products</p>

            <style jsx>{`
            .not-found {
                background: #fff;
                padding: 30px;
                box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                
            }
            h1 {
                font-size: 3em;
            }
            `}</style>
        </div>
    )
}
