"use client";

import { Tabs, TabList, TabPanels, TabPanel, Tab } from '@carbon/react'

import NoRolePage from './no-role/page'
import FontColourContrastPage from './font-contrast/page'
import NoAriaLabelsPage from './no-aria-labels/page';
import ImageExamplesPage from './images/page';

export default function Page() {
    return <div>
        <h2>Accessibility Violation Examples</h2>

        <Tabs>
            <TabList aria-label='list of tabs'>
                <Tab>Tab Index</Tab>
                <Tab>Aria Labels</Tab>
                <Tab>Colour Contrast</Tab>
                <Tab>Images</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <NoRolePage />
                </TabPanel>
                <TabPanel>
                    <NoAriaLabelsPage />
                </TabPanel>
                <TabPanel>
                    <FontColourContrastPage />
                </TabPanel>
                <TabPanel>
                    <ImageExamplesPage />
                </TabPanel>
            </TabPanels>
        </Tabs>

    </div>;
}
