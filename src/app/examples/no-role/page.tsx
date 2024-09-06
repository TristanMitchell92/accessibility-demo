"use client";

import { useState } from "react";

export default function NoRolePage() {

    const [links, setLinks] = useState(['Example 1', 'Example 2', 'Example 3'])

    const handleLinkClick = (linkName: string) => {
        window.alert(`${linkName} was clicked!`)
    }

    return <div>
        <h3>Test</h3>

        <ul>
            {links.map((link, index) => (
                <li tabIndex={0} key={index} onClick={() => handleLinkClick(link)}>{link}</li>
            ))}
        </ul>

    </div>;
}
