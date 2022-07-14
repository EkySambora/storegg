import OverviewContent from 'components/organisms/OverviewContent'
import Sidebar from 'components/organisms/Sidebar'
import React from 'react'

const Member = () => {
  return (
    <section className="overview overflow-auto">
        <Sidebar />
        <OverviewContent/>
    </section>
  )
}

export default Member