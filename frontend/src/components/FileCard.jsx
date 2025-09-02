import { Copy, Download, Eye, FileIcon, FileText, Globe, Image, Lock, Music, Video, Trash2 } from 'lucide-react';
import React, { useState } from 'react'

const FileCard = ({file}) => {

    const [showAction, setShowAction] = useState();

    const getFileIcon = (file) => {
        const extension = file.name.split('.').pop().toLowerCase();

        if (['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'].includes(extension)) {
        return <Image size={24} className="text-purple-500" />;
        }
        if (['mp4', 'webm', 'mov', 'avi', 'mkv'].includes(extension)) {
        return <Video size={24} className="text-blue-500" />;
        }
        if (['mp3', 'wav', 'ogg', 'flac', 'm4a'].includes(extension)) {
        return <Music size={24} className="text-green-500" />;
        }
        if (['pdf', 'doc', 'docx', 'txt', 'rtf'].includes(extension)) {
        return <FileText size={24} className="text-amber-500" />;
        }
        return <FileIcon size={24} className="text-purple-500" />;
    };

    const formatFileSize = (bytes) => {
        if (bytes < 1024) return bytes + ' B';
        else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
        else return (bytes / 1048576).toFixed(1) + ' MB';
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

  return (
    <div
        onMouseEnter={() => setShowAction(true)}
        onMouseLeave={() => setShowAction(false)}
        className="relative group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
        >
        {/* File preview area */}
        <div className="h-32 bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center p-4">
            {getFileIcon(file)}
        </div>

        {/* Public/private badge */}
        <div className="absolute top-2 right-2">
            <div
            className={`rounded-full p-1.5 ${file.isPublic ? "bg-green-100" : "bg-red-100"}`}
            title={file.isPublic ? "Public" : "Private"}
            >
            {file.isPublic ? (
                <Globe size={14} className="text-green-600" />
            ) : (
                <Lock size={14} className="text-gray-600" />
            )}
            </div>
        </div>

        {/* File info */}
        <div className="p-4">
            <div className="flex justify-between items-start">
                <div className="overflow-hidden">
                    <h3
                    title={file.name}
                    className="font-medium text-gray-900 truncate"
                    >
                    {file.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                    {formatFileSize(file.size)} | {formatDate(file.uploadedAt)}
                    </p>
                </div>
            </div>
        </div>

        {/* Action Button */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent flex items-end justify-center p-4 transition-opacity duration-300 ${showAction ? 'opacity-100':'opacity-0'}`}>
            <div className="flex gap-3 w-full justify-end">
                {file.isPublic && (
                    <button
                    title="Share Link"
                    className="p-2 bg-white rounded-full hover:bg-white transition-colors text-purple-500 hover:text-purple-600 hover:cursor-pointer"
                    >
                    <Copy size={18} />
                    </button>
                )}

                {file.isPublic && (
                    <a
                        href={`/file/${file.id}`}
                        title="View File"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-white transition-colors text-gray-700 hover:text-gray-900 hover:cursor-pointer"
                    >
                        <Eye size={18} />
                    </a>
                )}

                <button
                    title="Download"
                    className="p-2 bg-white rounded-full hover:bg-white transition-colors text-green-600 hover:text-green-700 hover:cursor-pointer"
                    >
                    <Download size={18} />
                </button>

                <button
                    title={file.isPublic ? "Make Private" : "Make Public"}
                    className="p-2 bg-white rounded-full hover:bg-white transition-colors text-amber-600 hover:text-amber-700 hover:cursor-pointer"
                    >
                    {file.isPublic ? <Lock size={18} /> : <Globe size={18} />}
                </button>

                <button
                    title="Delete"
                    className="p-2 bg-white rounded-full hover:bg-white transition-colors text-red-600 hover:text-red-700 hover:cursor-pointer"
                    >
                    <Trash2 size={18} />
                </button>

            </div>
        </div>
    </div>

  )
}

export default FileCard