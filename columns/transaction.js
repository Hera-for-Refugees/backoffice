import { format } from 'date-fns'
import { Icon, Tag } from 'antd'
import React from 'react'
import Router from 'next/router'

export const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    ellipsis: true,
    sorter: true,
    width: 80,
    fixed: 'left',
    key: 'id'
  },
  {
    title: 'Subscriber Id',
    dataIndex: 'SubscriberID',
    ellipsis: true,
    sorter: true,
    render: (subscriberId, record) => (
      <a onClick={() => Router.push(`/transactions?id=${record.id}`)}>
        {subscriberId}
      </a>
    ),
    width: 200,
    fixed: 'left',
    key: 'SubscriberID'
  },
  {
    title: 'Name',
    dataIndex: 'SubscriptionName',
    ellipsis: true,
    sorter: true
  },
  {
    title: 'Apple Id',
    dataIndex: 'SubscriptionAppleID',
    ellipsis: true,
    sorter: true
  },
  {
    title: 'Group',
    dataIndex: 'SubscriptionGroupID',
    ellipsis: true,
    sorter: true
  },
  {
    title: 'Duration',
    dataIndex: 'StandardSubscriptionDuration',
    ellipsis: true
  },
  {
    title: 'Offer Type',
    dataIndex: 'SubscriptionOfferType',
    ellipsis: true,
    render: i => i || <Tag>Not Available</Tag>
  },
  {
    title: 'Offer Duration',
    dataIndex: 'SubscriptionOfferDuration',
    ellipsis: true,
    render: i => i || <Tag color="blue">Direct Sale</Tag>
  },
  {
    title: 'Event Date',
    dataIndex: 'EventDate',
    render: record => format(new Date(record), 'dd MMM yyyy'),
    ellipsis: true,
    sorter: true,
    defaultSortOrder: 'descend'
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    render: record => format(new Date(record), 'dd MMM yyyy'),
    ellipsis: true,
    sorter: true
  }
]
