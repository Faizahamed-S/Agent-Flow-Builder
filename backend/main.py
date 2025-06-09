from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from collections import defaultdict, deque

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    graph = defaultdict(list) # adjacency list
    indegree = defaultdict(int) # in degree of a node
    node_ids = set()

    for node in pipeline.nodes:
        node_ids.add(node.id)

    for edge in pipeline.edges:
        graph[edge.source].append(edge.target) # append to adjacency list
        indegree[edge.target] += 1

    queue = deque([n for n in node_ids if indegree[n] == 0])
    visited = 0

    while queue: # BFS to visit nodes
        current = queue.popleft()
        visited += 1
        for neighbor in graph[current]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0: # only visit if no other node points to neighbour
                queue.append(neighbor)

    is_dag = visited == len(node_ids) # it is a DAG if all nodes are visited

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }

