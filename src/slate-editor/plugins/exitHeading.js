function exitHeading () {
  return {
    onKeyDown (e, change) {
      const { value } = change
      const { startBlock } = value
      const isSelectionHeading = Boolean(startBlock.type && startBlock.type.match(/heading_/))
      if (e.key === 'Enter' && isSelectionHeading) {
        return change.insertBlock('paragraph')
      }
      return null
    }
  }
}

export default exitHeading
