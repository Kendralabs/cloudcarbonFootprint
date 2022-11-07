// /*
//  * © 2021 Thoughtworks, Inc.
//  */

// import React, { FunctionComponent } from 'react'
// import { CLOUD_PROVIDER_OPTIONS } from 'common/FilterBar/utils/DropdownConstants'
// import FilterDropdown from 'common/FilterDropdown'
// import { DropdownFilterOptions, DropdownOption, FilterProps } from 'Types'

// const CloudProviderFilter: FunctionComponent<FilterProps> = ({
//   filters,
//   setFilters,
//   options,
// }) => {
//   return (
//     <FilterDropdown
//       id="cloud-provider-filter"
//       displayValue={filters.label(
//         CLOUD_PROVIDER_OPTIONS,
//         DropdownFilterOptions.CLOUD_PROVIDERS,
//       )}
//       options={CLOUD_PROVIDER_OPTIONS}
//       selections={filters.CLOUD_PROVIDER_OPTIONS}
//       selectionToOption={(cloudProvider: DropdownOption) => cloudProvider}
//       updateSelections={(selections: DropdownOption[]) =>
//         setFilters(
//           filters.withDropdownOption(
//             selections,
//             options,
//             DropdownFilterOptions.CLOUD_PROVIDERS,
//           ),
//         )
//       }
//     />
//   )
// }

// export default CloudProviderFilter
// This code is no temp.tsx
/*
 * © 2021 Thoughtworks, Inc.
 */

import React, { FunctionComponent, useState } from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import { DropdownFilterOptions, DropdownOption, FilterProps } from '../../Types'
import useStyles from './monthFilterStyles'
import { CLOUD_PROVIDER_OPTIONS } from '../../common/FilterBar/utils/DropdownConstants'
const MonthFilter: FunctionComponent<FilterProps> = ({
  filters,
  setFilters,
  options,
}) => {
  const classes = useStyles()
  const arr = CLOUD_PROVIDER_OPTIONS
  const object = arr.reduce(
    (obj, item) => Object.assign(obj, { [item.key]: item.name }),
    {},
  )
  const [btnShow, setBtnSow] = useState(0)
  const timeframes: { [label: string]: string } = object
  const handleClick = (e: number) => {
    const obj: DropdownOption[] = [CLOUD_PROVIDER_OPTIONS[e]]
    setBtnSow(e)
    setFilters(
      filters.withDropdownOption(
        obj,
        options,
        DropdownFilterOptions.CLOUD_PROVIDERS,
      ),
    )
  }

  return (
    <>
      <ButtonGroup className={classes.buttonGroup}>
        {Object.keys(timeframes).map((label, i) => {
          return (
            <Button
              disableElevation
              key={i}
              variant={i === btnShow ? 'contained' : undefined}
              color={i === btnShow ? 'primary' : 'default'}
              onClick={() => handleClick(i)}
              className={classes.button}
            >
              {label}
            </Button>
          )
        })}
      </ButtonGroup>
    </>
  )
}

export default MonthFilter
