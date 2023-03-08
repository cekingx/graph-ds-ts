import { SupplyChainGraph } from "./supply-chain-ori";

export const run = () => {
  const graph = new SupplyChainGraph();
  const nodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const edges = [
    ['a', 'b'],
    ['a', 'c'],
    ['a', 'd'],
    ['b', 'e'],
    ['c', 'e'],
    ['c', 'd'],
    ['d', 'f'],
    ['e', 'g'],
    ['f', 'h']
  ];
  nodes.forEach((node) => graph.addNode(node));
  edges.forEach(([from, to]) => graph.addEdge(from, to));

  graph.useDfs('a', 'e');
}