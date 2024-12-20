import { useRef, useState } from 'react'

import { SanitizedHTML } from '@jbrowse/core/ui'
import BaseTooltip from '@jbrowse/core/ui/BaseTooltip'
import { getContainingView } from '@jbrowse/core/util'
import { BaseLinearDisplayComponent } from '@jbrowse/plugin-linear-genome-view'
import { observer } from 'mobx-react'
import { makeStyles } from 'tss-react/mui'

import LinesConnectingMatrixToGenomicPosition from './LinesConnectingMatrixToGenomicPosition'
import LegendBar from '../../shared/LegendBar'

import type { MultiLinearVariantMatrixDisplayModel } from '../model'
import type { LinearGenomeViewModel } from '@jbrowse/plugin-linear-genome-view'

const useStyles = makeStyles()({
  cursor: {
    pointerEvents: 'none',
    zIndex: 1000,
    position: 'relative',
  },
})

const MultiLinearVariantMatrixDisplayComponent = observer(function (props: {
  model: MultiLinearVariantMatrixDisplayModel
}) {
  const { classes } = useStyles()
  const { model } = props
  const { height, sources, rowHeight } = model
  const ref = useRef<HTMLDivElement>(null)
  const [mouseY, setMouseY] = useState<number>()
  const [mouseX, setMouseX] = useState<number>()
  const { width } = getContainingView(model) as LinearGenomeViewModel

  return (
    <div
      ref={ref}
      onMouseMove={event => {
        const rect = ref.current?.getBoundingClientRect()
        const top = rect?.top || 0
        const left = rect?.left || 0
        setMouseY(event.clientY - top)
        setMouseX(event.clientX - left)
      }}
      onMouseLeave={() => {
        setMouseY(undefined)
        setMouseX(undefined)
      }}
    >
      <div style={{ position: 'relative' }}>
        <LinesConnectingMatrixToGenomicPosition model={model} />
        <div style={{ position: 'absolute', top: 20 }}>
          <LegendBar model={model} />
          <BaseLinearDisplayComponent {...props} />
        </div>
      </div>

      {mouseY &&
      mouseY > 20 &&
      sources?.[Math.floor((mouseY - 20) / rowHeight)] ? (
        <>
          <svg className={classes.cursor} width={width} height={height}>
            <line x1={0} x2={width} y1={mouseY} y2={mouseY} stroke="black" />
            <line x1={mouseX} x2={mouseX} y1={0} y2={height} stroke="black" />
          </svg>
          <BaseTooltip>
            <SanitizedHTML
              html={Object.entries(
                sources[Math.floor((mouseY - 20) / rowHeight)] || {},
              )
                .filter(([key]) => key !== 'color')
                .map(([key, value]) => `${key}:${value}`)
                .join('\n')}
            />
          </BaseTooltip>
        </>
      ) : null}
    </div>
  )
})

export default MultiLinearVariantMatrixDisplayComponent
