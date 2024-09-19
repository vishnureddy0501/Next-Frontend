"use client";
import ServerComponent from "./serverComponent";
import ClientComponent from "./ClientComponent";

const TestCallingComponents = () => {
    return (
        <div>
            <ClientComponent>
                <ServerComponent />
            </ClientComponent>
        </div>
    );
  }
export default TestCallingComponents;