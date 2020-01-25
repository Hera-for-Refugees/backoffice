import React, { useEffect, useState } from 'react'
import {
  Button,
  Drawer,
  Select,
  Form,
  Col,
  Row,
  Input,
  message,
  Skeleton,
  Switch,
  Tabs,
  Icon
} from 'antd'
import { hasErrors } from '../libs/helper'
import { useRouter } from 'next/router'
import fetch from '../libs/fetch'
const { Option } = Select

function Detail({ onSubmit = () => {}, form, waitSubmit, apps }) {
  const router = useRouter()
  const { id } = router.query

  const [show, setShow] = useState(null)
  const [isEncrypted, setEncrypted] = useState(false)

  const [waitData, setWaitData] = useState(false)
  const [data, setData] = useState({})
  const [config, setConfig] = useState([])

  const getData = async () => {
    try {
      setWaitData(true)
      const { data } = await fetch.get(`applications/${id}`)
      setData(data.application)
      setEncrypted(data.application.isEncrypted)
    } catch (error) {
      if (error.response) {
        message.error(error.response.data.message)
      } else {
        message.error(error.message)
      }
    } finally {
      setWaitData(false)
    }
  }

  useEffect(() => {
    form.validateFields(['encryptionKeyIv', 'encryptionKeySecret'], {
      force: true
    })
  }, [isEncrypted])

  useEffect(() => {
    // reset
    setData({})

    setShow(!!id)
    if (id && id !== 'new') getData()
  }, [id])

  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched
  } = form

  const AccountIdError =
    isFieldTouched('AccountId') && getFieldError('AccountId')
  const bundleIdError = isFieldTouched('bundleId') && getFieldError('bundleId')
  const slugError = isFieldTouched('slug') && getFieldError('slug')
  const nameError = isFieldTouched('name') && getFieldError('name')
  const emailError = isFieldTouched('email') && getFieldError('email')
  const latestVersionError =
    isFieldTouched('latestVersion') && getFieldError('latestVersion')
  const encryptionKeyIvError =
    isFieldTouched('encryptionKeyIv') && getFieldError('encryptionKeyIv')
  const encryptionKeySecretError =
    isFieldTouched('encryptionKeySecret') &&
    getFieldError('encryptionKeySecret')

  useEffect(() => {
    form.validateFields()
  }, [])

  const submit = e => {
    e.preventDefault()
    form.validateFields(async (err, values) => {
      if (err) return

      if (values.isEncrypted) {
        values.encryptionKeys = {
          iv: values.encryptionKeyIv,
          secret: values.encryptionKeySecret
        }
      }

      values.config = config.reduce((acc, curr) => {
        if (curr.key === '') return acc
        acc[curr.key] = curr.value === '' ? null : curr.value
        return acc
      }, {})

      // parse
      values.AccountId = parseInt(values.AccountId)
      values.appStoreId = parseInt(values.appStoreId)

      // clear
      delete values.encryptionKeyIv
      delete values.encryptionKeySecret
      onSubmit(values)
    })
  }

  // const getConfig = async () => {
  //   try {
  //     const response = await fetch.get(
  //       `https://${data.enabledDomains[0]}/config?bundle=${data.bundleId}&language=en&version=${data.latestVersion}`,
  //       {}
  //     )
  //     console.log(response)
  //   } catch (error) {
  //     if (error.response) {
  //       message.error(error.response.data.message)
  //     } else {
  //       message.error(error.message)
  //     }
  //   }
  // }

  const close = () => {
    router.push('/applications')
  }

  const addConfig = () => {
    console.log(config)
    setConfig([...config, { id: Date.now(), key: '', value: '' }])
  }

  const removeConfig = id => {
    setConfig(config.filter(_ => _.id !== id))
  }

  const changeConfig = (id, key, value) => {
    setConfig(
      config.map(c => {
        return c.id === id ? { ...c, [key]: value } : c
      })
    )
  }

  return (
    <Drawer
      title="Create application"
      width={640}
      closable={false}
      onClose={close}
      visible={show}
      bodyStyle={{ paddingBottom: 80 }}
    >
      <Skeleton
        loading={waitData}
        active
        paragraph={{ width: '100%', rows: 4 }}
      >
        <Form onSubmit={submit} layout="vertical">
          <Tabs defaultActiveKey="info" animated={false}>
            <Tabs.TabPane tab="Info" key="info">
              <Row gutter={16}>
                {/* AccountId */}
                <Col span={12}>
                  <Form.Item
                    label="Account"
                    validateStatus={AccountIdError ? 'error' : ''}
                    help={AccountIdError || ''}
                  >
                    {getFieldDecorator('AccountId', {
                      initialValue: data.AccountId || '',
                      rules: [
                        { required: true, message: 'Please enter Account Id' }
                      ]
                    })(
                      <Select placeholder="Please select an account">
                        {apps.map(app => (
                          <Option key={app.id} value={app.id}>
                            {app.name}
                          </Option>
                        ))}
                      </Select>
                    )}
                  </Form.Item>
                </Col>

                {/* bundleId */}
                <Col span={12}>
                  <Form.Item
                    label="Bundle ID"
                    validateStatus={bundleIdError ? 'error' : ''}
                    help={bundleIdError || ''}
                  >
                    {getFieldDecorator('bundleId', {
                      initialValue: data.bundleId || '',
                      rules: [
                        { required: true, message: 'Please enter bundleId' }
                      ]
                    })(<Input />)}
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* slug */}
                <Col span={12}>
                  <Form.Item
                    label="Slug"
                    validateStatus={slugError ? 'error' : ''}
                    help={slugError || ''}
                  >
                    {getFieldDecorator('slug', {
                      initialValue: data.slug || '',
                      rules: [{ required: true, message: 'Please enter slug' }]
                    })(<Input />)}
                  </Form.Item>
                </Col>

                {/* name */}
                <Col span={12}>
                  <Form.Item
                    label="Name"
                    validateStatus={nameError ? 'error' : ''}
                    help={nameError || ''}
                  >
                    {getFieldDecorator('name', {
                      initialValue: data.name || '',
                      rules: [{ required: true, message: 'Please enter name' }]
                    })(<Input />)}
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* email */}
                <Col span={12}>
                  <Form.Item
                    label="Email"
                    validateStatus={emailError ? 'error' : ''}
                    help={emailError || ''}
                  >
                    {getFieldDecorator('email', {
                      initialValue: data.email || '',
                      rules: [
                        { required: true, message: 'Please enter email' },
                        {
                          type: 'email',
                          message: 'The input is not valid Email!'
                        }
                      ]
                    })(<Input type="email" />)}
                  </Form.Item>
                </Col>

                {/* latestVersion */}
                <Col span={12}>
                  <Form.Item
                    label="Latest Version"
                    validateStatus={latestVersionError ? 'error' : ''}
                    help={latestVersionError || ''}
                  >
                    {getFieldDecorator('latestVersion', {
                      initialValue: data.latestVersion || '',
                      rules: [
                        {
                          required: true,
                          message: 'Please enter latest version'
                        }
                      ]
                    })(<Input />)}
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* latestVersion */}
                <Col span={12}>
                  <Form.Item label="Domains">
                    {getFieldDecorator('enabledDomains', {
                      initialValue: data.enabledDomains || []
                    })(<Select mode="tags" placeholder="Tags Mode" />)}
                  </Form.Item>
                </Col>

                {/* latestVersion */}
                <Col span={12}>
                  <Form.Item label="Countries">
                    {getFieldDecorator('enabledCountries', {
                      initialValue: data.enabledCountries || []
                    })(<Select mode="tags" placeholder="Tags Mode" />)}
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* appStoreId */}
                <Col span={12}>
                  <Form.Item label="AppStore Id">
                    {getFieldDecorator('appStoreId', {})(<Input />)}
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* isEncrypted */}
                <Col span={12}>
                  <Form.Item label="Encrypted">
                    {getFieldDecorator(
                      'isEncrypted',
                      {}
                    )(
                      <Switch
                        defaultChecked={data.isEncrypted}
                        onChange={event => {
                          setEncrypted(event)
                        }}
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* encryptionKeyIv */}
                <Col span={12}>
                  <Form.Item
                    label="Encryption Key (iv)"
                    validateStatus={encryptionKeyIvError ? 'error' : ''}
                    help={encryptionKeyIvError || ''}
                  >
                    {getFieldDecorator('encryptionKeyIv', {
                      initialValue:
                        (data.encryptionKeys && data.encryptionKeys.iv) || '',
                      rules: [
                        {
                          required: isEncrypted,
                          message: 'Please enter encryption key iv'
                        }
                      ]
                    })(<Input disabled={!isEncrypted} />)}
                  </Form.Item>
                </Col>

                {/* encryptionKeySecret */}
                <Col span={12}>
                  <Form.Item
                    label="Encryption Key (secret)"
                    validateStatus={encryptionKeySecretError ? 'error' : ''}
                    help={encryptionKeySecretError || ''}
                  >
                    {getFieldDecorator('encryptionKeySecret', {
                      initialValue:
                        (data.encryptionKeys && data.encryptionKeys.secret) ||
                        '',
                      rules: [
                        {
                          required: isEncrypted,
                          message: 'Please enter encryption key secret'
                        }
                      ]
                    })(<Input disabled={!isEncrypted} />)}
                  </Form.Item>
                </Col>
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Config" key="config">
              {config.map(c => (
                <Row key={c.id} gutter={16}>
                  <Col span={6}>
                    <Form.Item>
                      <Input
                        placeholder="Key"
                        onChange={e =>
                          changeConfig(c.id, 'key', e.target.value)
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col span={16}>
                    <Form.Item>
                      <Input
                        placeholder="Value"
                        onChange={e =>
                          changeConfig(c.id, 'value', e.target.value)
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col span={2}>
                    <Button
                      type="dashed"
                      shape="circle"
                      icon="minus"
                      onClick={() => removeConfig(c.id)}
                    />
                  </Col>
                </Row>
              ))}
              <Row gutter={16}>
                <Col span={6}>
                  <Form.Item>
                    <Button
                      style={{ width: '100%' }}
                      type="dashed"
                      onClick={addConfig}
                    >
                      <Icon type="plus" /> New key
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Tabs.TabPane>
          </Tabs>

          <div
            style={{
              zIndex: 2,
              backgroundColor: '#fff',
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '16px 24px',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'right'
            }}
          >
            <div
              style={{
                marginRight: 'auto'
              }}
            >
              {getFieldDecorator('isEnabled', {
                initialValue: data.isEnabled
              })(<Switch />)}
            </div>

            <Button onClick={close} style={{ marginRight: 16 }}>
              Cancel
            </Button>
            <Button
              htmlType="submit"
              loading={waitSubmit}
              disabled={hasErrors(getFieldsError())}
              type="primary"
            >
              Save
            </Button>
          </div>
        </Form>
      </Skeleton>
    </Drawer>
  )
}

export default Form.create()(Detail)
