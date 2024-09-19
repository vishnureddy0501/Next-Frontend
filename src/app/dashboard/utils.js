// import "server-only"

export const reusableComponent = () => {
    console.log("this contains some sensitive information that should not be exposed to client");
    return "confidential";
}