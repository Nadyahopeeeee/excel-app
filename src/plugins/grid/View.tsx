import React from "react";
import EditableGrid from "../../lib/editableGrid/EditableGrid";


/**
 * @class plugins.grid.View
 * to show the Editable Grid with special parameters
 */
export default class View extends React.Component {
  public static defaultProps = {

  };


  render() {
    return (
      <>
        <EditableGrid />
      </>
    )
  }
}
