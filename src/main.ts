// import { SupplyChainGraph } from './supply-chain';

// const graph = new SupplyChainGraph();
// const supplierA = graph.addNode('Supplier A', 'supplier', 100);
// const supplierB = graph.addNode('Supplier B', 'supplier', 100);
// const manufactureA = graph.addNode('Manufacture A', 'manufacture', 0);
// const manufactureB = graph.addNode('Manufacture B', 'manufacture', 0);
// graph.addEdge(supplierA, manufactureA, 50);
// graph.addEdge(supplierA, manufactureB, 0);
// graph.addEdge(manufactureA, manufactureB, 0);
// const nodes = graph.getNodes();
// console.log('nodes', nodes);

// const edges = graph.getEdges();
// console.log('edges', edges);

// const supplierANeighbors = graph.getNeighbors(supplierA);
// console.log('supplier A neighbors', supplierANeighbors);

// const manufactureBNeighbors = graph.getNeighbors(manufactureB);
// console.log('manufacture B neighbors', manufactureBNeighbors);

// import { SupplyChainGraph } from './supply-chainv2';

// const supplyChain = new SupplyChainGraph();

// supplyChain.addNode("Bahan Baku A");
// supplyChain.addNode("Bahan Baku B");
// supplyChain.addNode("Bahan Baku C");

// supplyChain.addNode("Proses 1");
// supplyChain.addNode("Proses 2");
// supplyChain.addNode("Proses 3");

// supplyChain.addNode("Produk Jadi");

// supplyChain.addEdge("Bahan Baku A", "Proses 1", 2);
// supplyChain.addEdge("Bahan Baku A", "Proses 2", 3);
// supplyChain.addEdge("Bahan Baku B", "Proses 1", 1);
// supplyChain.addEdge("Bahan Baku B", "Proses 2", 2);
// supplyChain.addEdge("Bahan Baku C", "Proses 2", 2);
// supplyChain.addEdge("Proses 1", "Proses 2", 2);
// supplyChain.addEdge("Proses 2", "Proses 3", 1);
// supplyChain.addEdge("Proses 3", "Produk Jadi", 2);

// // supplyChain.removeNode("Bahan Baku C");
// // supplyChain.removeEdge("Proses 1", "Proses 2");

// const shortestPath = supplyChain.getShortestPath("Bahan Baku A", "Produk Jadi");
// console.log("shortest path", shortestPath);

import {run} from './use-supply-chain-ori';
run();