export class SupplyChainGraph {
  adjacencyList: Map<string, Array<string>> = new Map();

  addNode(node: string) {
    if(!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, []);
    }
  }

  removeNode(node: string) {
    if(this.adjacencyList.has(node)) {
      this.adjacencyList.delete(node);
    }
  }

  addEdge(from: string, to: string) {
    const edges = this.adjacencyList.get(from) as Array<string>;
    edges.push(to);
  }

  shortestPathDfs = (startNode: string, stopNode: string) => {
    const previous = new Map();
    let shortestDistance = -1;
    const dfs = (currentNode: string, depth: number) => {
      if (currentNode === stopNode) {
        shortestDistance = depth;
      } else {
        for (let neighbour of (this.adjacencyList.get(currentNode) as Array<string>)) {
          previous.set(neighbour, currentNode);
          dfs(neighbour, depth + 1);
        }
      }
    };
    dfs(startNode, 0);
    return { shortestDistance, previous };
  };
}