class SupplyChainNode {
  name: string;
  type: string;
  quantity: number;
}

class SupplyChainEdge {
  source: number;
  target: number;
  cost: number;
}

export class SupplyChainGraph {
  private nodes: SupplyChainNode[] = [];
  private edges: SupplyChainEdge[] = [];

  addNode(name: string, type: string, quantity: number): number {
    const id = this.nodes.length;
    this.nodes.push({name, type, quantity});
    return id;
  }

  addEdge(source: number, target: number, cost: number): void {
    this.edges.push({source, target, cost});
  }

  getNode(id: number): SupplyChainNode {
    return this.nodes[id];
  }

  getNodes(): SupplyChainNode[] {
    return this.nodes;
  }

  getEdges(): SupplyChainEdge[] {
    return this.edges;
  }

  getNeighbors(id: number): SupplyChainNode[] {
    const neighbors: SupplyChainNode[] = [];

    for(const edge of this.edges) {
      if (edge.source == id) {
        neighbors.push(this.nodes[edge.target])
      }
    }

    return neighbors;
  }
}