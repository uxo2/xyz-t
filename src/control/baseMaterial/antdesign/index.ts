import baseButton from './baseButton'
import baseText from './baseText'
import buttonGroup from './buttonGroup'

const groupComp: { children?: any[], groupName?: string }[] = []
const antdComp = [baseButton, baseText, buttonGroup]

antdComp.forEach(item => {
  const index = groupComp.findIndex(p => p.groupName === item.groupName)
  if (index === -1) {
    groupComp.push({
      groupName: item.groupName,
      children: [item]
    })
  } else {
    groupComp[index].children?.push(item)
  }
})

export default groupComp