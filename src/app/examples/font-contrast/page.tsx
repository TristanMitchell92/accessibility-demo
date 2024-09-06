"use client";
import { Tile } from '@carbon/react'
import styles from './_font-contrast.module.scss'

export default function FontColourContrastPage() {
    return <div>
        <h3>Font Colour Contrast</h3>

        <Tile className={styles.tileOverride} id="poor-colour-contast">
            <h3>Poor Contrast</h3>
            <p>
                OOP backend tech debt TL commit DevTools Edge design graph browser. Lazy eval Ruby git optimize hardcoded SOAP. Containerized compile open source markup module imperative-mood resolve val. Minification compression sudo Github callback DSL looks good to me senior bitwise operator Agile.

                AI TL clean code vaporware domain specific language SOAP serverless keycaps protected. Parameter attributes cowboy coding variable YAML production subclass static Ada Lovelace. Tabs vs spaces LIFO bitcoin scalable hashtable minification. FIFO senior-engineer imagemagick Ada Lovelace node_modules api bitcoin git merge sort distributed.
            </p>
        </Tile>
        <br />
        <Tile id="good-colour-contast">
            <h3>Good Contrast</h3>
            <p>
                Code-splitting progressive web app UX parameter terminal DSL Angular. Cache resource devops variable Byzantine fault tolerance container. Bike-shedding ecommerce platform mutation observer k views class documentation driven engineer. Kernel terminal IRC child frontend behavior-driven polemical thinking domain specific language hipchat OOP.

                DSL model cowboy coding atomic design shareware machine learning compression j contribute. Concurrent const bitwise operator ecommerce platform senior clean code cache off-by-one error composition neck beard. Junior gzip npm killer app hardcoded frame rate pivot S3 senior quick sort.
            </p>
        </Tile>
    </div>;
}
