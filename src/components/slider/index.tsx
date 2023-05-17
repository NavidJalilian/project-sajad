import React from 'react'
import { Box } from '@mui/material'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Widget from '..'
import { widgetType } from '../types'

import 'swiper/css'
import 'swiper/css/navigation'

interface SliderPropsType extends widgetType {
  type: 'slider'
  content: Array<widgetType>
}
export default function Slider(props: SliderPropsType) {
  const { content } = props
  const navigationStyles = {
    background: '#FFF',
    color: ({ palette }) => `${palette.grey['200']} !important`,
    pointerEvents: 'none',
    '&:after': {
      fontSize: '16px !important',
    },
    '&.swiper-button-prev': {
      boxShadow: '-10px 0 10px #FFF',
    },
    '&.swiper-button-next': {
      boxShadow: '10px 0 10px #FFF',
    },
    '&.swiper-button-disabled': {
      display: 'none',
    },
  }
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        position: 'relative',
        padding: '8px 0',
      }}
      style={{ direction: 'ltr' }}
    >
      <Box
        component={Swiper}
        sx={{
          width: '90%',
        }}
        slidesPerView={2.5}
        spaceBetween={8}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
        }}
      >
        {content.map((item) => (
          <SwiperSlide key={item.id}>
            <Widget {...item} className="sliderItem" />
          </SwiperSlide>
        ))}
      </Box>
      <Box className="swiper-button-prev" sx={navigationStyles} />
      <Box className="swiper-button-next" sx={navigationStyles} />
    </Box>
  )
}
