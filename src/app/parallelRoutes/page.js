import Analytics from "./@analytics/page";


export default function ParallelRoutes({ children, analytics}) {
    return (
        <div>
            <div>
                { children }
            </div>
            <div>
                {analytics}
            </div>
            <Analytics />
            <div>
                Learning parallel routes
            </div>
        </div>
    );
  }
  