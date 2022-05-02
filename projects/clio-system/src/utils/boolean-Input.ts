/* eslint-disable @typescript-eslint/ban-ts-comment */
export function BooleanInput(): any {
	return (target: any, propertyKey: string | symbol) => {
		const key = Symbol();
		return {
			get(): boolean {
			// @ts-ignore
				return this[key] || false;
			},
			set(value: boolean | string) {
          		if (typeof value === 'string') {
            	// @ts-ignore
            		this[key] = value !== 'false';
          		} else {
				// @ts-ignore
            		this[key] = value;
          		}
       		}
      	};
	};
}
