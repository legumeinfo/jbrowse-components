import { observer } from 'mobx-react'

import { readConfObject } from '../configuration'
import { LogoFull } from './Logo'

import type { AnyConfigurationModel } from '../configuration'

const Logo = observer(function ({
  session,
}: {
  session: { configuration: AnyConfigurationModel }
}) {
  const { configuration } = session
  const logoPath = readConfObject(configuration, 'logoPath')
  return logoPath?.uri ? (
    <img src={logoPath.uri} alt="Custom logo" />
  ) : (
    <LogoFull variant="white" />
  )
})

export default Logo
