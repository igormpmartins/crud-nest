import { Connection } from 'mysql2/promise';
export declare class MySQLProvider {
    private readonly logger;
    private readonly pool;
    constructor();
    getConnection(): Promise<Connection>;
}
