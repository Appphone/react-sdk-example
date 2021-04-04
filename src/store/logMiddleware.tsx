// todo specify types
const logMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
    console.log("action dispatch", action.type, action.payload);
    next(action);
};

export default logMiddleware;
