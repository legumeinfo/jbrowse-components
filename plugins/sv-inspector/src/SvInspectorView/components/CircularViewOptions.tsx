import { Checkbox, FormControlLabel, Grid } from '@mui/material'
import { observer } from 'mobx-react'
import { makeStyles } from 'tss-react/mui'

import type { SvInspectorViewModel } from '../model'

const useStyles = makeStyles()(theme => ({
  circularViewOptions: {
    padding: theme.spacing(1),
  },
}))

const CircularViewOptions = observer(function ({
  svInspector,
}: {
  svInspector: SvInspectorViewModel
}) {
  const { classes } = useStyles()

  return (
    <Grid
      container
      className={classes.circularViewOptions}
      style={{ height: svInspector.circularViewOptionsBarHeight }}
    >
      <Grid item>
        <FormControlLabel
          control={
            <Checkbox
              checked={svInspector.onlyDisplayRelevantRegionsInCircularView}
              onChange={e => {
                svInspector.setOnlyDisplayRelevantRegionsInCircularView(
                  e.target.checked,
                )
              }}
            />
          }
          label="show only regions with data"
        />
      </Grid>
    </Grid>
  )
})

export default CircularViewOptions
