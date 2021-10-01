export interface IHeaders {
    name: string;
    key?: string,
    sortble?: boolean;
}

export interface IPipeOrder {
    key?: string | null;
    ordering?: 'desc' | 'asc';
}

