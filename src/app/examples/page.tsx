"use client";

import { Tabs, TabList, TabPanels, TabPanel, Tab } from '@carbon/react'

import NoRolePage from './no-role/page'
import FontColourContrastPage from './font-contrast/page'

export default function Page() {
    return <div>
        <h2>Accessibility Violation Examples</h2>

        <Tabs>
            <TabList aria-label='list of tabs'>
                <Tab>Aria Roles</Tab>
                <Tab>Colour Contrast</Tab>
            </TabList>
            <TabPanels>
                <TabPanel><NoRolePage /></TabPanel>
                <TabPanel><FontColourContrastPage /></TabPanel>
            </TabPanels>
        </Tabs>

    </div>;
}
