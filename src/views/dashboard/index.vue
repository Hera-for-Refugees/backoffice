<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="6">
        <a-card>
          <a-statistic
            title="Feedback"
            :value="11.28"
            :precision="2"
            suffix="%"
            :valueStyle="{ color: '#3f8600' }"
            style="margin-right: 50px"
          >
            <template v-slot:prefix>
              <a-icon type="arrow-up" />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic
            title="Idle"
            :value="9.3"
            :precision="2"
            suffix="%"
            valueClass="demo-class"
            :valueStyle="{ color: '#cf1322' }"
          >
            <template v-slot:prefix>
              <a-icon type="arrow-down" />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic
            title="Idle"
            :value="9.3"
            :precision="2"
            suffix="%"
            valueClass="demo-class"
            :valueStyle="{ color: '#cf1322' }"
          >
            <template v-slot:prefix>
              <a-icon type="arrow-down" />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic
            title="Idle"
            :value="9.3"
            :precision="2"
            suffix="%"
            valueClass="demo-class"
            :valueStyle="{ color: '#cf1322' }"
          >
            <template v-slot:prefix>
              <a-icon type="arrow-down" />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'dashboard',

  data() {
    return {}
  }
}
</script>
