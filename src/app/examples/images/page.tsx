"use client";
import { Link, Tile } from '@carbon/react'
import Image from 'next/image'

export default function ImageExamplesPage() {
    return <div>
        <h3>Images</h3>
        <p>Examples of how a screen reader </p>
        <br></br>
        <Tile>
            <h3>No alt text</h3>
            <Image
                tabIndex={0}
                src="/creativity-motivational.jpg"
                width={500}
                height={500}
                quality={50}
                alt=''
            />
        </Tile>
        <br />
        <Tile>
            <h3>With alt text </h3>
            <Image
                tabIndex={0}
                src="/think-outside-box-text.jpg"
                width={800}
                height={500}
                quality={50}
                alt="Quote: Think outside the box"
            />
        </Tile>
        <br />
        <Tile>
            <h3>With aria-labelledby</h3>
            <Image
                tabIndex={0}
                src="/we-all-make-mistakes.jpg"
                width={800}
                height={500}
                quality={50}
                alt="motivational quote"
                aria-labelledby='motivational-quote'
            />
            <blockquote id='motivational-quote'>
                We all make mistakes and that&apos;s ok, we are learning
            </blockquote>
        </Tile>
        <br />
        <Link target='_blank' href='http://www.freepik.com'>Images Designed by Freepik</Link>
    </div>
}
