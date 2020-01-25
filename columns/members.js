// import { format } from 'date-fns'
// import { Icon, Tag } from 'antd'
import React from 'react'
// import Router from 'next/router'

export const columns = [
  // {
  //   title: 'Id',
  //   dataIndex: 'id',
  //   ellipsis: true,
  //   sorter: true,
  //   width: 80,
  //   fixed: 'left',
  //   key: 'id'
  // },
  // {
  //   title: 'Name',
  //   dataIndex: 'name',
  //   ellipsis: true,
  //   sorter: true,
  //   render: (name, record) => (
  //     <a onClick={() => Router.push(`/applications?id=${record.id}`)}>{name}</a>
  //   ),
  //   width: 220,
  //   fixed: 'left',
  //   key: 'name'
  // },
  // {
  //   title: 'Bundle Id',
  //   dataIndex: 'bundleId',
  //   ellipsis: true,
  //   width: 320,
  //   sorter: true,
  //   render: tag => <Tag>{tag}</Tag>
  // },
  // {
  //   title: 'Created At',
  //   dataIndex: 'createdAt',
  //   render: record => format(new Date(record), 'dd MMM yyyy'),
  //   ellipsis: true,
  //   sorter: true,
  //   defaultSortOrder: 'descend'
  // },
  // {
  //   title: 'AppStore Id',
  //   dataIndex: 'appStoreId',
  //   ellipsis: true,
  //   sorter: true,
  //   render: record =>
  //     record ? (
  //       <Tag color="blue">{record}</Tag>
  //     ) : (
  //       <Tag color="red">Not found</Tag>
  //     )
  // },
  // {
  //   title: 'Latest Version',
  //   dataIndex: 'latestVersion',
  //   ellipsis: true,
  //   sorter: true
  // },
  // {
  //   title: 'Countries',
  //   dataIndex: 'enabledCountries',
  //   render: tags => tags.map(tag => <Tag key={tag}>{tag.toUpperCase()}</Tag>),
  //   ellipsis: true,
  //   sorter: true
  // }
  {
    title: 'acceptedLicense',
    dataIndex: 'acceptedLicense',
    ellipsis: true,
    sorter: true
  },
  { title: 'authyId', dataIndex: 'authyId', ellipsis: true, sorter: true },
  { title: 'birthDate', dataIndex: 'birthDate', ellipsis: true, sorter: true },
  { title: 'createdAt', dataIndex: 'createdAt', ellipsis: true, sorter: true },
  { title: 'updatedAt', dataIndex: 'updatedAt', ellipsis: true, sorter: true },
  { title: 'email', dataIndex: 'email', ellipsis: true, sorter: true },
  { title: 'firstName', dataIndex: 'firstName', ellipsis: true, sorter: true },
  { title: 'gender', dataIndex: 'gender', ellipsis: true, sorter: true },
  { title: 'id', dataIndex: 'id', ellipsis: true, sorter: true },
  { title: 'lastName', dataIndex: 'lastName', ellipsis: true, sorter: true },
  {
    title: 'lastPeriodDate',
    dataIndex: 'lastPeriodDate',
    ellipsis: true,
    sorter: true
  },
  {
    title: 'phoneNumber',
    dataIndex: 'phoneNumber',
    ellipsis: true,
    sorter: true
  }
]
