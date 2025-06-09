// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

declare namespace umami {
	interface umami {
		track(): Promise<string> | undefined;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		track(event_name: string, event_data?: { [key: string]: any }): Promise<string> | undefined;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		track(custom_payload: { website: string; [key: string]: any }): Promise<string> | undefined;
		track(
			callback: (props: {
				hostname: string;
				language: string;
				referrer: string;
				screen: string;
				title: string;
				url: string;
				website: string;
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			}) => { website: string; [key: string]: any }
		): Promise<string> | undefined;
	}
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface Window {
		umami: umami.umami;
	}
}

export {};
