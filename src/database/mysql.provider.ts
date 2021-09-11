import { Injectable, Logger } from '@nestjs/common'
import { Connection, createPool, Pool } from 'mysql2/promise'

@Injectable()
export class MySQLProvider {
	private readonly logger: Logger
	private readonly pool: Pool

	constructor() {
		this.logger = new Logger('MySQLProvider')
		this.logger.log('initialized - MySQL Provider')

		this.pool = createPool({
			host: 'localhost',
			user: 'root',
			database: 'cat-products',
			waitForConnections: true,
			connectionLimit: 10,
			queueLimit: 0,
		})
	}

	async getConnection(): Promise<Connection> {
		return await this.pool.getConnection()
	}
}
