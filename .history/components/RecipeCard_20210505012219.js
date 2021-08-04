import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function RecipeCard({ recipe }) {
    const { title, slug, coockingTime, thumbnail } = recipe.fields

    return (
        <div className="card">
            <div className="featured">
                <Image />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>takes approx {coockingTime} mins to make</p>
                </div>
                <div className="actions">
                    <Link href={'/recipes/' + slug}><a>Cook this</a></Link>
                </div>
            </div>
        </div>

    )
}
