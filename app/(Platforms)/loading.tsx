import React from 'react';
import { Loader } from 'lucide-react';

const Loading: React.FC = () => {
    return (
        <div 
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh', 
                textAlign: 'center' 
            }}
            aria-busy="true"
            aria-label="Loading content"
        >
            <Loader size={48} className="animate-spin" />
            <p style={{ marginTop: '1rem', fontSize: '1.25rem', color: '#555' }}>
                Loading the downloader, please wait...
            </p>
        </div>
    );
};

export default Loading;