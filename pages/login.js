import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import fetch from '../libs/fetch'
import { hasErrors } from '../libs/helper'
import { Row, Col, Form, Icon, Input, Button, Steps, message } from 'antd'

function Index({ form }) {
  const [waitSubmit, setWaitSubmit] = useState(false)

  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched
  } = form

  const emailError = isFieldTouched('email') && getFieldError('email')
  const phoneNumberError =
    isFieldTouched('phoneNumber') && getFieldError('phoneNumber')

  const submit = e => {
    e.preventDefault()
    form.validateFields(async (err, values) => {
      if (err) return

      try {
        setWaitSubmit(true)
        const { data } = await fetch.post('users/login/', {
          ...values,
          LanguageId: 1
        })
        await Router.push({
          pathname: '/verify',
          query: {
            ...values,
            authyId: data.authyId
          }
        })
      } catch (error) {
        if (error.response) {
          message.error(error.response.data.message)
        } else {
          message.error(error.message)
        }
      } finally {
        setWaitSubmit(false)
      }
    })
  }

  useEffect(() => {
    form.validateFields()
  }, [])

  return (
    <div className="login-layout">
      <div className="login-form">
        {/* steps */}
        <Row style={{ marginBottom: 60 }}>
          <Col span={20} offset={2}>
            <Steps current={0}>
              <Steps.Step title="Login" />
              <Steps.Step title="Verify" />
            </Steps>
          </Col>
        </Row>

        {/* form */}
        <Row>
          <Col span={24}>
            <Form onSubmit={submit}>
              <Form.Item
                validateStatus={emailError ? 'error' : ''}
                help={emailError || ''}
              >
                {getFieldDecorator('email', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your email!'
                    },
                    {
                      type: 'email',
                      message: 'The input is not valid Email!'
                    }
                  ]
                })(
                  <Input
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                    prefix={
                      <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                  />
                )}
              </Form.Item>

              <Form.Item
                validateStatus={phoneNumberError ? 'error' : ''}
                help={phoneNumberError || ''}
              >
                {getFieldDecorator('phoneNumber', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your phone number!'
                    }
                  ]
                })(
                  <Input
                    type="tel"
                    autoComplete="tel"
                    placeholder="Phone number"
                    prefix={
                      <Icon
                        type="mobile"
                        style={{ color: 'rgba(0,0,0,.25)' }}
                      />
                    }
                  />
                )}
              </Form.Item>

              <Form.Item style={{ marginBottom: 0 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={hasErrors(getFieldsError())}
                  style={{ width: '100%' }}
                  loading={waitSubmit}
                >
                  Next
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Form.create()(Index)
