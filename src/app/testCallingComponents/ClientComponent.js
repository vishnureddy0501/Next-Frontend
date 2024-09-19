"use client";
const ClientComponent = ({children}) => {
    return (
        <div>
            <div>This is Client Component</div>
            {children}
        </div>
    );
  }
export default ClientComponent;