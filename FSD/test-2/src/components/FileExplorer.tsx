import { useState } from 'react';

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

interface FileTreeProps {
  node: FileNode;
}

const FileTree = ({ node }: FileTreeProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const isFolder = node.type === 'folder';

  return (
    <div className="file-tree-node">
      <div
        className="node-label"
        onClick={() => isFolder && setIsExpanded(!isExpanded)}
        style={{ cursor: isFolder ? 'pointer' : 'default' }}
      >
        <span className="icon">
          {isFolder ? (isExpanded ? '📂' : '📁') : '📄'}
        </span>
        <span>{node.name}</span>
      </div>
      
      {isFolder && isExpanded && node.children && (
        <div className="children" style={{ marginLeft: '20px' }}>
          {node.children.map((child, index) => (
            <FileTree key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

interface FileExplorerProps {
  data: FileNode;
}

export default function FileExplorer({ data }: FileExplorerProps) {
  return (
    <div className="file-explorer">
      <FileTree node={data} />
    </div>
  );
}
