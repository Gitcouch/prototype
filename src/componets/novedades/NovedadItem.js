// @ts-nocheck
import React from 'react'
import { Card } from 'antd'

const { Meta } = Card

const NovedadItem = ({ title, subtitle, imagen, body }) => (
  <Card hoverable cover={<img alt='example' src={imagen} />}>
    <Meta
      title={title}
      description={
        <>
          <div>{subtitle}</div>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </>
      }
    />
  </Card>
)

export default NovedadItem
