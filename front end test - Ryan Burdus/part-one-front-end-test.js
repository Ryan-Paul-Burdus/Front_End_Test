class TreeTraversal
{
    static Flatten(){
        //TODO: make tree into 1D collection (something like the testing array above)
        var arrayOfNodes = [];//this needs to be replaced with the actual json data within a jsonobject 
    }

    static ReturnParent(nodeID){
        //this uses the nodes ID and returns the parent object of the node
        var parentOfNode = arrayOfNodes[nodeID].parentID;
        return arrayOfNodes[parentOfNode];
    }

    static InsertNewChild(nodeID, newNode){
        //TODO: have the new node be inserted into the children collection
        var childArray = arrayOfNodes[nodeID].childrenArray;
    }
}