export type Rockets = {
    id: number;
    name_rocket: string;   
    year: number;
    image: string;
    type_engine: string;
    
}

export type Launchs = {
    mission_name:string;
    cost_per_launch: number;
    active: boolean;
    faturamento: number;
}