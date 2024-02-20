import { type ColorValue, type PointerEvent } from 'react-native'
import { type Pointer } from '../../utils/types'
import { type barDataItem, type stackDataItem } from '../../BarChart/types'

export interface StripAndLabelProps {
  autoAdjustPointerLabelPosition: boolean
  pointerX: number
  pointerLabelWidth: number
  activatePointersOnLongPress: boolean
  yAxisLabelWidth: number
  pointerRadius: number
  pointerWidth: number
  shiftPointerLabelX: number
  pointerLabelHeight: number
  pointerYLocal: number
  pointerStripUptoDataPoint: boolean
  pointerStripHeight: number
  shiftPointerLabelY: number
  pointerItemLocal: barDataItem | stackDataItem
  showPointerStrip: boolean
  pointerStripWidth: number
  containerHeight: number
  xAxisThickness: number
  pointerStripColor: ColorValue
  pointerConfig: Pointer
  pointerLabelComponent: Function
  secondaryPointerItem: barDataItem | stackDataItem
  scrollX: number
  pointerEvents: PointerEvent
  width: number
}
