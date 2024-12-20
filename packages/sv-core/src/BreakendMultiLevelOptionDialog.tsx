import { useState } from 'react'

import { Dialog } from '@jbrowse/core/ui'
import { Button, DialogActions, DialogContent } from '@mui/material'
import { when } from 'mobx'
import { observer } from 'mobx-react'
import { getSnapshot } from 'mobx-state-tree'

import Checkbox2 from './Checkbox2'
import { getBreakendCoveringRegions } from './util'

import type { AbstractSessionModel, Feature } from '@jbrowse/core/util'
import type { LinearGenomeViewModel } from '@jbrowse/plugin-linear-genome-view'

interface Display {
  id: string
  [key: string]: unknown
}
interface Track {
  id: string
  displays: Display[]
  [key: string]: unknown
}

function stripIds(arr: Track[]) {
  return arr.map(({ id, displays, ...rest }) => ({
    ...rest,
    displays: displays.map(({ id, ...rest }) => rest),
  }))
}

const BreakendMultiLevelOptionDialog = observer(function ({
  session,
  handleClose,
  feature,
  assemblyName,
  stableViewId,
  view,
}: {
  session: AbstractSessionModel
  handleClose: () => void
  feature: Feature
  view?: LinearGenomeViewModel
  assemblyName: string
  stableViewId?: string
}) {
  const [copyTracks, setCopyTracks] = useState(true)
  const [mirror, setMirror] = useState(true)

  return (
    <Dialog
      open
      onClose={handleClose}
      title="Multi-level breakpoint split view options"
    >
      <DialogContent>
        <div>Launch multi-level breakpoint split view</div>
        {view ? (
          <>
            <Checkbox2
              checked={copyTracks}
              label="Copy tracks into the new view"
              onChange={event => {
                setCopyTracks(event.target.checked)
              }}
            />

            {copyTracks ? (
              <Checkbox2
                checked={mirror}
                disabled={!copyTracks}
                label="Mirror the copied tracks (only available if copying tracks and using two level)"
                onChange={event => {
                  setMirror(event.target.checked)
                }}
              />
            ) : null}
          </>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            ;(async () => {
              try {
                const { assemblyManager } = session
                const assembly =
                  await assemblyManager.waitForAssembly(assemblyName)
                if (!assembly) {
                  throw new Error(`assembly ${assemblyName} not found`)
                }

                const { refName, pos, mateRefName, matePos } =
                  getBreakendCoveringRegions({
                    feature,
                    assembly: assembly,
                  })

                const viewTracks = view
                  ? (getSnapshot(view.tracks) as Track[])
                  : []

                let viewInStack = session.views.find(
                  f => f.id === stableViewId,
                ) as { views: LinearGenomeViewModel[] } | undefined

                const displayName = `${
                  feature.get('name') || feature.get('id') || 'breakend'
                } split detail`
                if (!viewInStack) {
                  viewInStack = session.addView('BreakpointSplitView', {
                    id: stableViewId,
                    type: 'BreakpointSplitView',
                    displayName,

                    views: [
                      {
                        type: 'LinearGenomeView',
                        hideHeader: true,
                        tracks: stripIds(viewTracks),
                      },
                      {
                        type: 'LinearGenomeView',
                        hideHeader: true,
                        tracks: stripIds(
                          mirror ? [...viewTracks].reverse() : viewTracks,
                        ),
                      },
                    ],
                  }) as unknown as { views: LinearGenomeViewModel[] }
                }
                // @ts-expect-error
                viewInStack.setDisplayName(displayName)
                const r1 = assembly.regions!.find(r => r.refName === refName)
                const r2 = assembly.regions!.find(
                  r => r.refName === mateRefName,
                )
                if (!r1 || !r2) {
                  throw new Error("can't find regions")
                }
                await Promise.all([
                  viewInStack.views[0]!.navToLocations([
                    {
                      refName,
                      start: r1.start,
                      end: pos,
                      assemblyName,
                    },
                    {
                      refName,
                      start: pos + 1,
                      end: r1.end,
                      assemblyName,
                    },
                  ]),
                  viewInStack.views[1]!.navToLocations([
                    {
                      refName: mateRefName,
                      start: r2.start,
                      end: matePos,
                      assemblyName,
                    },
                    {
                      refName: mateRefName,
                      start: matePos + 1,
                      end: r2.end,
                      assemblyName,
                    },
                  ]),
                ])
                await when(
                  () =>
                    viewInStack.views[1]!.initialized &&
                    viewInStack.views[0]!.initialized,
                )
                viewInStack.views[1]!.zoomTo(10)
                viewInStack.views[0]!.zoomTo(10)
                viewInStack.views[1]!.centerAt(matePos, mateRefName)
                viewInStack.views[0]!.centerAt(pos, refName)
              } catch (e) {
                console.error(e)
                session.notifyError(`${e}`, e)
              }
            })()
            handleClose()
          }}
          variant="contained"
          color="primary"
          autoFocus
        >
          OK
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => {
            handleClose()
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
})

export default BreakendMultiLevelOptionDialog
