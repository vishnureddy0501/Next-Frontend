"use client";

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
  