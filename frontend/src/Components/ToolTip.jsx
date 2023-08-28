import React from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const ToolTip = ({title, id}) => { 

    return (
        <ReactTooltip id={id} place='bottom' content={title} />
    )
}

export default ToolTip