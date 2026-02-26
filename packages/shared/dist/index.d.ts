export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    timestamp: string;
}
export interface BackendTestResponse {
    message: string;
}
//# sourceMappingURL=index.d.ts.map