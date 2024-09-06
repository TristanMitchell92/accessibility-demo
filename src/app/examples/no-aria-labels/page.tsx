"use client";

import { Link, Tile, ButtonSet, Button, IconButton } from '@carbon/react'
import { Add, Delete, Edit } from '@carbon/icons-react'
import { useState } from 'react';

export default function NoAriaLabelsPage() {

    const [clickedCount, setClickedCount] = useState(0)

    const handleClick = () => {
        setClickedCount(clickedCount + 1)
    }

    const resetCountClick = () => {
        setClickedCount(0)
    }

    return <div>
        <h3>Missing Aria-labels</h3>
        <p>The <Link target='_blank' href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label">aria-label</Link> attribute defines a string value that labels an interactive element.</p>
        <p>Times Clicked: <b>{clickedCount}</b></p>
        <br />
        <Tile>
            <h4>Icons No Arial-labels</h4>
            <br />
            <Add tabIndex={0} size={24} onClick={handleClick}></Add>
            <Edit tabIndex={0} size={24} onClick={handleClick}></Edit>
            <Delete tabIndex={0} size={24} onClick={resetCountClick}></Delete>
        </Tile>
        <br />
        <Tile>
            <h4>Buttons No Arial-labels</h4>
            <br />
            <ButtonSet>
                <Button kind="primary" onClick={handleClick}>
                    <Add size={24}></Add>
                </Button>
                <Button kind="secondary" onClick={handleClick}>
                    <Edit size={24}></Edit>
                </Button>
                <Button kind="danger" onClick={resetCountClick}>
                    <Delete size={24}></Delete>
                </Button>
            </ButtonSet>
        </Tile>
        <br />
        <Tile>
            <h4>Buttons Arial-labels</h4>

            <IconButton label='Add Item' kind="primary" onClick={handleClick}>
                <Add />
            </IconButton>
            <IconButton label="Edit Item" kind="secondary" onClick={handleClick}>
                <Edit />
            </IconButton>
            <IconButton label="Delete Item" kind="danger" onClick={resetCountClick}>
                <Delete />
            </IconButton>
        </Tile>
    </div>;
}
