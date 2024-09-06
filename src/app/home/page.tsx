`use client`;

import { Link } from '@carbon/react'
import { Launch } from '@carbon/icons-react'

export default function LandingPage() {
  return <div>
    <h2>Purpose</h2>
    <p>
      This project has been created to show practical examples of poor accessibility practices.
    </p>
    <p>
      To identify accessibility violations the IBM Equal Access Checker browser extension can be used.
    </p>
    <Link target='_blank' href='https://www.ibm.com/able/toolkit/tools' renderIcon={() => <Launch aria-label="External Link" />}>IBM Equal Access Toolkit</Link>
  </div>;
}
