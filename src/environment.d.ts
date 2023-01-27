declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GITHUB_AUTH_TOKEN: string;
            NODE_ENV: 'development' | 'production';
            PORT?: string;
            PWD: string;
            URL_API: string;
        }
    }
}

export interface ProcessEnv {
    [key: string]: string | undefined
}
