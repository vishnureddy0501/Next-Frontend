"use client";

 
// export default function ParallelRoutes({ children, analytics, notifications, salesEngagement } : { children: React.ReactNode, analytics: React.ReactNode, notifications: React.ReactNode, salesEngagement: React.ReactNode }) {

export default function ParallelRoutes({ children, analytics, notifications, salesEngagement }) {
    return (
        <div>
            <div>
                { children }
            </div>
            <div>
                {analytics}
            </div>
            <div>
                {notifications}
            </div>
            <div>
                {salesEngagement}
            </div>
        </div>
    );
  }
  