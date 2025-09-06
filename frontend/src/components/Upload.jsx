import React from "react";
import { UploadCloud, Trash2 } from "lucide-react";

const Upload = ({
  files,
  onFileChange,
  onUpload,
  uploading,
  onRemoveFile,
  remainingCredits,
  isUploadDisabled,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto border-dashed rounded-xl shadow p-6 py-6 flex flex-col gap-4">
      {/* File Input */}
      <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition">
        <div className="flex flex-col items-center justify-center text-center">
          <UploadCloud size={32} className="text-blue-600 mb-2" />
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Click to upload</span> or drag & drop
          </p>
          <p className="text-xs text-gray-500">PNG, JPG, PDF (max 5 files)</p>
          <p className="text-xs text-gray-400 mt-1">
            Remaining credits: {remainingCredits}
          </p>
        </div>
        <input type="file" multiple className="hidden" onChange={onFileChange} />
      </label>

      {/* File Preview */}
      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
            >
              <span className="truncate text-sm">{file.name}</span>
              <button
                type="button"
                onClick={() => onRemoveFile(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Upload Button */}
      <button
        onClick={onUpload}
        disabled={isUploadDisabled || uploading}
        className={`w-full py-2 px-4 rounded-lg text-white ${
          isUploadDisabled || uploading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {uploading ? "Uploading..." : "Upload Files"}
      </button>
    </div>
  );
};

export default Upload;
