type ICreateOptions = {
	/**
	 * @description If true, the queue will be started when the first data is added
	 * @default false
	 */
	autoStart: boolean;

	/**
	 * @description The maximum number of concurrent executions
	 * @default 4
	 */
	maxConcurrency: number;

	/**
	 * @description If true, the instance will be destructed when the queue is empty
	 * @default true
	 */
	autoDestruct: boolean;

	/**
	 * @description Configure the Rate Limit in a Specified Time Range
	 * @default null
	 */
	rateLimit: { msTimeRange: number; maxCalls: number } | null;
};

export default ICreateOptions;
