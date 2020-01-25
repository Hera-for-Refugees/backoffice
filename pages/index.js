import MasterLayout from '../components/layout-master.js'
import { Button } from 'antd'
import PageHeader from '../components/page-header'
import React, { useState } from 'react'

// import WidgetCount from '../components/widget-counts'

function Index() {
  const [lastRefreshDate, updateRefreshDate] = useState(Date.now())
  console.log(lastRefreshDate)

  return (
    <MasterLayout>
      <PageHeader
        title="Dashboard"
        extra={[
          <Button
            key="reload"
            type="ghost"
            icon="reload"
            onClick={() => updateRefreshDate(Date.now())}
          >
            Reload Data
          </Button>
        ]}
      />

      {/*<WidgetCount lastRefreshDate={lastRefreshDate} />*/}
    </MasterLayout>
  )
}

export default Index
