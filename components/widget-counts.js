import React, { useState, useEffect } from 'react'
import fetch from '../libs/fetch'
import { Card, message, Col, Skeleton, Statistic, Row } from 'antd'
import dateFormat from 'date-fns/format'

function WidgetCounts({ lastRefreshDate }) {
  const [wait, setWait] = useState(true)
  const [data, setData] = useState({
    applications: 0,
    languages: 0,
    customers: 0,
    lastSubscription: { EventDate: new Date() }
  })

  const getData = async () => {
    try {
      setWait(true)
      const { data } = await fetch.get('statistics/', {
        params: {
          AccountId: accountId || undefined
        }
      })
      setData(data)
    } catch (error) {
      if (error.response) {
        message.error(error.response.data.message)
      } else {
        message.error(error.message)
      }
    } finally {
      setWait(false)
    }
  }

  useEffect(() => {
    getData()
  }, [accountId, lastRefreshDate])

  return (
    <Row type="flex" gutter={20}>
      <Col span={6}>
        <Card>
          <Skeleton
            loading={wait}
            active
            paragraph={{ width: '100%', rows: 1 }}
          >
            <Statistic
              // prefix={<Icon type="appstore" />}
              title="Applications"
              value={data.applications}
            />
          </Skeleton>
        </Card>
      </Col>

      <Col span={6}>
        <Card>
          <Skeleton
            loading={wait}
            active
            paragraph={{ width: '100%', rows: 1 }}
          >
            <Statistic
              // prefix={<Icon type="team" />}
              title="Customers"
              value={data.customers}
            />
          </Skeleton>
        </Card>
      </Col>

      <Col span={6}>
        <Card>
          <Skeleton
            loading={wait}
            active
            paragraph={{ width: '100%', rows: 1 }}
          >
            <Statistic
              // prefix={<Icon type="font-size" />}
              title="Languages"
              value={data.languages}
            />
          </Skeleton>
        </Card>
      </Col>

      <Col span={6}>
        <Card>
          <Skeleton
            loading={wait}
            active
            paragraph={{ width: '100%', rows: 1 }}
          >
            <Statistic
              // prefix={<Icon type="date" />}
              title="Last Subscription"
              value={
                data.lastSubscription
                  ? dateFormat(
                      new Date(data.lastSubscription.EventDate),
                      'dd MMM HH:mm'
                    )
                  : '- '
              }
            />
          </Skeleton>
        </Card>
      </Col>
    </Row>
  )
}

export default WidgetCounts
