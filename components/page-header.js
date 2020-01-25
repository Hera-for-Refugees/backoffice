import React from 'react'
import { PageHeader as Header } from 'antd'

function PageHeader({ title, totalData = 0, extra }) {
  return (
    <Header
      style={{ padding: 0, marginBottom: 24 }}
      backIcon={null}
      onBack={null}
      title={title}
      subTitle={totalData ? `${totalData} records found` : undefined}
      extra={extra}
    />
  )
}

export default PageHeader
