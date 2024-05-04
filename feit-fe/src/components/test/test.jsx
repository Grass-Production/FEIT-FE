import React, { useEffect, useState } from 'react';

function SSEListener() {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        const eventSource = new EventSource('/your-sse-endpoint');

        eventSource.onmessage = function (event) {
            const eventData = JSON.parse(event.data);
            setEventData(eventData);
        };

        return () => {
            eventSource.close(); // Đóng kết nối khi component unmount
        };
    }, []);

    return (
        <div>
            {eventData && (
                <div>
                    <h2>{eventData.type}</h2>
                    <p>{eventData.message}</p>
                </div>
            )}
        </div>
    );
}

export default SSEListener;
