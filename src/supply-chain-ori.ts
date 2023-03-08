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

  useDfs(from: string, to: string) {
    this.dfs(from, to);
  }

  dfs(from: string, to: string, visited: Set<string> = new Set()) {
    console.log('from', from);
    visited.add(from);
    const destinations = this.adjacencyList.get(from) as Array<string>;

    for(const destination of destinations) {
      if(destination == to) {
        console.log('found', to);
        return;
      }

      if(!visited.has(destination) && ((this.adjacencyList.get(destination) as Array<string>).length > 0)) {
        this.dfs(destination, to, visited)
      }
    }
  }
}