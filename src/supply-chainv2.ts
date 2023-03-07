export class SupplyChainGraph {
  private adjacencyList: Map<string, Array<{node: string; weight: number}>>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node: string) {
    if(!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, []);
    }
  }

  addEdge(node1: string, node2: string, weight: number) {
    if (this.adjacencyList.has(node1) && this.adjacencyList.has(node2)) {
      const edges = this.adjacencyList.get(node1) as Array<{ node: string, weight: number }> 
      edges.push({node: node2, weight});
    }
  }

  removeNode(node: string) {
    if (this.adjacencyList.has(node)) {
      this.adjacencyList.delete(node);

      for (const [key, edges] of this.adjacencyList) {
        const index = edges.findIndex((edge) => edge.node == node);
        if(index != -1) {
          edges.splice(index, 1);
        }
      }
    }
  }

  removeEdge(node1: string, node2: string) {
    if (this.adjacencyList.has(node1)) {
      const edges = this.adjacencyList.get(node1) as Array<{node: string, weight: number}>;
      const index = edges.findIndex((edge) => edge.node == node2);
      if(index != -1) {
        edges.splice(index, 1);
      }
    }
  }

  getShortestPath(start: string, end: string): string[] {
    const distances: Map<string, number> = new Map();
    const previous: Map<string, string | null> = new Map();
    const nodes: Array<string> =  [];
    let path: Array<string> = [];

    for (const [node, edges] of this.adjacencyList) {
      if (node == start) {
        distances.set(node, 0);
      } else {
        distances.set(node, Infinity);
      }
      previous.set(node, null);
      nodes.push(node);
    }

    while (nodes.length) {
      nodes.sort((a, b) => distances.get(a) as number - (distances.get(b) as number));
      let smallest = nodes.shift() as string;

      if (smallest == end) {
        path = [];
        while (previous.get(smallest)) {
          path.unshift(smallest);
          smallest = previous.get(smallest) as string;
        }
        path.unshift(smallest);
        break;
      }

      if (distances.get(smallest) == Infinity) {
        break;
      }

      const edges = this.adjacencyList.get(smallest) as Array<{ node: string; weight: number }>
      for (const edge of edges) {
        const alt = distances.get(smallest) as number + edge.weight;
        if (alt < (distances.get(edge.node) as number)) {
          distances.set(edge.node, alt);
          previous.set(edge.node, smallest);
        }
      }
    }

    return path;
  }
}