import './tools.css';
import RenderContent from './RenderContent';

function DeveloperTools() {
    return (
        <div className='content_skills'>
            <RenderContent type={'programming'} />
            <RenderContent type={'design'} />
        </div>
    );
}
export default DeveloperTools;
