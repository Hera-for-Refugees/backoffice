<template>
  <div>
    <a-row type="flex" align="middle">
      <a-col :span="12" justify="end">
        <h1>Members</h1>
      </a-col>
      <a-col :span="12" style="text-align: right">
        <a-button type="primary">New Members</a-button>
      </a-col>
    </a-row>

    <div style="background-color: #fff; padding: 16px; margin-top: 16px">
      <a-table
        :columns="columns"
        rowKey="id"
        :dataSource="rows"
        :pagination="pagination"
        :loading="$wait.is(waiter)"
        @change="handleTableChange"
      >
        <template slot="birthDate" slot-scope="birthDate">
          {{ birthDate }}
          {{ $moment(record).format('DD MMMM YYYY') }}
          ({{ $moment().diff($moment(record, 'YYYY-MM-DD'), 'years') }})
        </template>
        <!--        <template slot="fullName" slot-scope="record">-->
        <!--          <b>{{ record }}</b>-->
        <!--        </template>-->
        <!--        <template slot="birthDate" slot-scope="text, birthDate">-->
        <!--          {{ text }}-->
        <!--          {{ $moment(birthDate).format('DD MMMM YYYY') }}-->
        <!--          ({{ $moment().diff($moment(birthDate, 'YYYY-MM-DD'), 'years') }})-->
        <!--        </template>-->
      </a-table>
    </div>
  </div>
</template>

<script>
import Service from '@/utils/service'

export default {
  name: 'members',

  data() {
    return {
      waiter: 'wait-member-fetch',
      rows: [],
      pagination: { page: 1, limit: 1, total: 0 },
      sorter: ['id DESC'],
      columns: [
        { title: 'id', dataIndex: 'id' },
        { title: 'firstName', dataIndex: 'firstName' },
        { title: 'lastName', dataIndex: 'lastName' },
        { title: 'birthDate', dataIndex: 'birthDate' },
        { title: 'email', dataIndex: 'email' },
        { title: 'phoneNumber', dataIndex: 'phoneNumber' },
        { title: 'authyId', dataIndex: 'authyId' },
        { title: 'acceptedLicense', dataIndex: 'acceptedLicense' },
        { title: 'createdAt', dataIndex: 'createdAt' },
        { title: 'gender', dataIndex: 'gender' },
        { title: 'lastPeriodDate', dataIndex: 'lastPeriodDate' }
      ]
    }
  },

  mounted() {
    this.fetch()
  },

  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination, filters, sorter)
      this.pagination.current = pagination.current
      this.fetch()
    },

    async fetch() {
      try {
        this.$wait.start(this.waiter)
        const { data } = await Service.get('/users', {
          params: {
            page: this.pagination.page,
            limit: this.pagination.limit,
            order: this.sorter,
            attributes: [
              'acceptedLicense',
              'authyId',
              'birthDate',
              'createdAt',
              'updatedAt',
              'email',
              'firstName',
              'gender',
              'id',
              'lastName',
              'lastPeriodDate',
              'phoneNumber'
            ]
          }
        })
        this.pagination.total = data.count
        this.rows = data.rows
      } catch (err) {
        console.log(err)
      } finally {
        this.$wait.end(this.waiter)
      }
    }
  }
}
</script>
