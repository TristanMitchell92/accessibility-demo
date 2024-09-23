"use client";

import { useState } from "react";
import { ToastNotification, Tile, Button, ButtonSet, Accordion, AccordionItem, CodeSnippet, InlineNotification } from "@carbon/react";
import styles from './_no-role.module.scss'


export default function NoRolePage() {

    const [showNotification, setShowNotification] = useState(false)
    const [selectedLink, setSelectedLink] = useState('')
    const [links, setLinks] = useState(['Example 1', 'Example 2', 'Example 3'])

    const handleLinkClick = (linkName: string) => {
        setSelectedLink(linkName)
        setShowNotification(true)
    }

    const handleKeyDown = (event: any) => {
        console.log(event)
        if (event.key === 'Enter' || event.key === ' ') {
            handleLinkClick(event.target.firstChild.data)
        }
    }

    const noAttributesCode = `
    <ul>
        <li tabIndex={0} onClick={handleLinkClick('Example 1')}>Example 1</li>
        <li tabIndex={0} onClick={handleLinkClick('Example 2')>Example 2</li>
        <li tabIndex={0} onClick={handleLinkClick('Example 3')>Example 3</li>
    </ul>
    `

    const onKeyDownCode = `
    const handleKeyDown = (event: any) => {
        console.log(event)
        if (event.key === 'Enter' || event.key === ' ') {
            handleLinkClick(event.target.firstChild.data)
        }
    }

    <ul>
        <li 
        role="button" 
        className={styles.interactableLi} 
        aria-label="open notification" 
        onKeyDown={handleKeyDown} 
        tabIndex={0} 
        key={index} onClick={() => handleLinkClick(Example 1)>
            Example 1
        </li>
    </ul>
    `
    const buttonSetCode = `
    <ButtonSet>
        <Button onClick={() => handleLinkClick('Example 1')}>
            'Example 1'
        </Button>
        <Button onClick={() => handleLinkClick('Example 2')}>
            'Example 2'
        </Button>
        <Button onClick={() => handleLinkClick('Example 3')}>
            'Example 3'
        </Button>
    </ButtonSet>
    `

    return <div>
        <h2>Tab Index and Key Press</h2>
        <br />
        <Tile>
            <h3>No Aria Attributes - Bad</h3>
            <br />
            <ul>
                {links.map((link, index) => (
                    <li tabIndex={0} key={index} onClick={() => handleLinkClick(link)}>{link}</li>
                ))}
            </ul>
            <br />
            <Accordion>
                <AccordionItem title="Code">
                    <CodeSnippet type="multi">
                        {noAttributesCode}
                    </CodeSnippet>
                </AccordionItem>
            </Accordion>
        </Tile>
        <br />
        <Tile>
            <h3>onKeyDown and CSS - Better</h3>
            <br />
            <ul>
                {links.map((link, index) => (
                    <li role="button" className={styles.interactableLi} aria-label="open notification" onKeyDown={handleKeyDown} tabIndex={0} key={index} onClick={() => handleLinkClick(link)}>{link}</li>
                ))}
            </ul>
            <br />
            <Accordion>
                <AccordionItem title="Code">
                    <CodeSnippet type="multi">
                        {onKeyDownCode}
                    </CodeSnippet>
                </AccordionItem>
            </Accordion>
        </Tile>
        <br />
        <Tile>
            <h3>Using Button - Best </h3>
            <br />
            <ButtonSet>
                {links.map((link, index) => (
                    <Button key={index} onClick={() => handleLinkClick(link)}>
                        {link}
                    </Button>
                ))}
            </ButtonSet>
            <br />
            <Accordion>
                <AccordionItem title="Code">
                    <CodeSnippet type="multi">
                        {buttonSetCode}
                    </CodeSnippet>
                </AccordionItem>
            </Accordion>
        </Tile >
        <br />
        {
            showNotification && <InlineNotification
                aria-label="closes notification"
                kind="info"
                onClose={() => setShowNotification(false)}
                onCloseButtonClick={() => setShowNotification(false)}
                role="status"
                statusIconDescription="notification"
                subtitle={selectedLink}
                title="Action Clicked"
            />
        }

    </div >;
}
