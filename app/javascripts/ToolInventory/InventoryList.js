import React, {PropTypes} from "react";
const ToolManager = require('../ToolManager');

class InventoryList extends React.Component {

  componentDidMount() {
    ToolManager.start()
    ToolManager.getNoOfToolsAvailable()
  }

  componentDidUpdate(prevProps, prevState) {
    ToolManager.getNoOfToolsAvailable()
  }

  render() {
    return (
      <div className="card rounded">
      <div className="card-block">
        <h4 className="card-title">There are <span className="text-muted" id="noOfTools"></span> tools in your inventory</h4>
      </div>
      <table className="table table-hover mx-auto w-90">
        <thead>
          <tr>
            <th>#</th>
            <th>Tool Name</th>
            <th>Tool ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Wire (5m)</td>
            <td className>0xac60e905167f51a083f252f36abcdef123456789</td>
            <td className>
              <a href="#" className="btn btn-outline-danger m-0 btn-sm p-1">
                X
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Wire (5m)</td>
            <td>0xac60e905167f51a083f252f36abcdef123456789</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
  }
}

module.exports = InventoryList;
