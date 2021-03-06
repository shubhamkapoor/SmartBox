pragma solidity ^0.4.8;

import "./MaterialSupplier.sol";
import "./ToolSupplier.sol";

contract Box{

    //  TODO: manage confirmation of orders!
    struct Order {
      address orderedBy;
      address suppliedBy;
      bool available;
      bool delivered;
    }

    mapping (address => Order) orders;

    modifier isToolAvailable(address toolAddress) { require(orders[toolAddress].available); _; }
    modifier isMaterialAvailable(address materialAddress) { require(orders[materialAddress].available); _; }

    function orderTool(address toolSupplierAddress, address toolAddress){
        ToolSupplier toolSupplier = ToolSupplier(toolSupplierAddress);
        toolSupplier.lendTool(toolAddress);
        orders[toolAddress] = Order(msg.sender, toolSupplierAddress, true, false);
    }

    function orderMaterial(address materialSupplierAddress, address materialAddress){
        MaterialSupplier materialSupplier = MaterialSupplier(materialSupplierAddress);
        materialSupplier.purchaseMaterial(materialAddress);
        orders[materialAddress] = Order(msg.sender, materialSupplierAddress, true, false);
    }

    function obtainTool(address toolAddress)
    isToolAvailable(toolAddress)
    {
        orders[toolAddress].available = false;
      orders[toolAddress].delivered = true;
    }

    function obtainMaterial(address materialAddress)
    isMaterialAvailable(materialAddress)
    {
        orders[materialAddress].available = false;
      orders[materialAddress].delivered = true;
    }

    function getOrder(address orderAddress) returns (address, address){
        Order order = orders[orderAddress];
        return (order.orderedBy, order.suppliedBy);
    }
}
