`use client`;

import { Link } from '@carbon/react'
import { Launch } from '@carbon/icons-react'

export default function LandingPage() {
  return <div>
    <h2>Purpose</h2>
    <p>
      This project has been created to show practical examples of poor accessibility practices.
    </p>
    <br/>
    <h3>Equal Access Toolkit</h3>
    <p>
      To identify accessibility violations the IBM Equal Access Checker browser extension can be used.
    </p>
    <Link target='_blank' href='https://www.ibm.com/able/toolkit/tools' renderIcon={() => <Launch aria-label="External Link" />}>IBM Equal Access Toolkit</Link>
    <br/><br/>
    <h3>Screen reader - JAWS (Job Access With Speech)</h3>
    <p>To test that the pages are accessible with screen readers, JAWS can be used.</p>
    <Link target='_blank' href='https://www.freedomscientific.com/products/software/jaws/' renderIcon={() => <Launch aria-label="External Link" />}>JAWS website</Link>
  </div>;
}
