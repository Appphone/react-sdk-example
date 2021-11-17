// TODO specify types
const logMiddleware = () => (next: any) => (action: any) => {
    next(action);
};

export default logMiddleware;
