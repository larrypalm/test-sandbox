import { useState } from 'react';
import content from './content';

const ContentParser = () => {
    const [activeContent, setActiveContent] = useState({
        key: '',
        content: null
    });

    const Component = activeContent.content;

    return (
        <div>
            <div>
                {content.map((item) => {
                    return (
                        <button
                            onClick={() => {
                                setActiveContent({
                                    key: item.key,
                                    content: item.content,
                                });
                            }}
                        >
                            {item.key}
                        </button>
                    )
                })}
            </div>
            <div>
                {activeContent.key && <Component />}
            </div>
        </div>
    );
}

export default ContentParser;