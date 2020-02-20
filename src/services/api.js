import axios from 'axios'
import { tabsUrlBuilder, tabTypesMap } from '../utils/strings'
import { validateTabs } from './validators'

export const getTabs = async (pattern, tabType) => {
  try {
    const response = await axios.get(tabsUrlBuilder(pattern))

    const tabs = validateTabs(response)

    if (!tabs) {
      return null
    }

    if (tabType === tabTypesMap.all) {
      return tabs
    }

    const filteredTabs = tabs.filter(tab => tab.tabTypes.includes(tabType))

    if (filteredTabs.length > 0) {
      return filteredTabs
    }

    return null
  } catch (e) {
    return null
  }
}
