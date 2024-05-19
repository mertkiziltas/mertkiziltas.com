/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Remarkable } from 'remarkable';


const MarkdownViewer = ({ post }) => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const markdownFile = await fetch(post);
                if (!markdownFile.ok) {
                    throw new Error('Markdown dosyası alınamadı.');
                }
                const markdownText = await markdownFile.text();
                const md = new Remarkable();
                const html = md.render(markdownText);
                setMarkdown(html);
            } catch (error) {
                console.error('Markdown dosyası alınırken bir hata oluştu:', error);
            }
        };

        fetchData();
    }, [post]);

    return (
        <div dangerouslySetInnerHTML={{ __html: markdown }} />
    );
};

export default MarkdownViewer;
