import { PrerenderedCanvas } from '@jbrowse/core/ui'
import { observer } from 'mobx-react'

const LinearVariantMatrixRendering = observer(function (props: {
  width: number
  height: number
}) {
  return <PrerenderedCanvas {...props} />
})

export default LinearVariantMatrixRendering
