export interface Link {
  readonly sourceAddress: string;
  readonly targetAddress: string;
  readonly status: string;
  readonly tokenAddress: string;
}

export interface Node {
  readonly id: string;
  readonly openChannels: number;
  readonly tokenAddress: string;
}

export interface NetworkGraph {
  readonly nodes: Node[];
  readonly links: Link[];
}