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
        :rowKey="record => record.id"
        :dataSource="data"
        :pagination="pagination"
        :loading="$wait.is(waiter)"
        @change="handleTableChange"
      >
        <template slot="fullName" slot-scope="text, record">
          <b>{{ record.firstName }} {{ record.lastName }}</b>
        </template>
        <template slot="birthDate" slot-scope="birthDate">
          {{ $moment(birthDate).format('DD MMMM YYYY') }}
          ({{ $moment().diff($moment(birthDate, 'YYYY-MM-DD'), 'years') }})
        </template>
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
      data: [],
      pagination: {},
      waiter: 'wait-member-fetch',
      columns: [
        {
          title: 'ID',
          dataIndex: 'id'
        },
        {
          title: 'Full name',
          dataIndex: 'fullName',
          scopedSlots: { customRender: 'fullName' }
        },
        {
          title: 'Gender',
          dataIndex: 'gender'
        },
        {
          title: 'Age',
          dataIndex: 'birthDate',
          scopedSlots: { customRender: 'birthDate' }
        },
        {
          title: 'Phone',
          dataIndex: 'phoneNumber'
        },
        {
          title: 'Email',
          dataIndex: 'email'
        }
      ]
    }
  },

  mounted() {
    this.fetch()
  },

  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination, filters, sorter)
      // const pager = { ...this.pagination }
      // pager.current = pagination.current
      // this.pagination = pager
      // this.fetch({
      //   results: pagination.pageSize,
      //   page: pagination.current,
      //   sortField: sorter.field,
      //   sortOrder: sorter.order,
      //   ...filters
      // })
    },
    async fetch(params = {}) {
      console.log('params:', params)
      // this.$wait(this.waiter)

      try {
        this.$wait.start(this.waiter)
        const { data } = await Service.get('/users', { params })
        console.log(data)
        this.data = data
      } catch (err) {
        console.log(err)
      } finally {
        this.$wait.end(this.waiter)
      }

      //   const pagination = { ...this.pagination }
      //   // Read total count from server
      //   // pagination.total = data.totalCount;
      //   pagination.total = 200
      //   this.loading = false
      //   this.data = data.results
      //   this.pagination = pagination
      // })
    }
  }
}
</script>
