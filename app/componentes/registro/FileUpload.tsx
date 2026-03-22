// FileUpload.tsx
import React, { useState, useRef } from "react";

interface FileUploadProps {
    label: string;
    required?: boolean;
    onFileChange?: (file: File | null) => void;
    accept?: string;
}

const FileUpload = ({ label, required = true, onFileChange, accept = ".pdf,application/pdf" }: FileUploadProps) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            if (file.type === "application/pdf") {
                setSelectedFile(file);
                onFileChange?.(file);
            } else {
                alert("Por favor, selecciona un archivo PDF válido");
                if (inputRef.current) {
                    inputRef.current.value = "";
                }
            }
        }
    };
    
    const onChooseFile = () => {
        inputRef.current?.click();
    };

    const removeFile = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        setSelectedFile(null);
        onFileChange?.(null);
    };

    return (
        <div className="mt-4">
            <p className="text-white mb-2">
                {label} {required && <span className="text-red-400">*</span>}
            </p>
            
            <input
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
                style={{display: "none"}}
                accept={accept}
            />

            {!selectedFile && (
                <button
                    type="button"
                    onClick={onChooseFile}
                    className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-md transition-all duration-200 border-2 border-dashed border-white/30 hover:border-white/50"
                >
                    <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                        Seleccionar archivo PDF
                    </span>
                </button>
            )}

            {selectedFile && (
                <div className="bg-white/10 rounded-md p-4 border border-white/20">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-red-500/20 rounded-lg">
                                    <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-white truncate max-w-[200px]">
                                        {selectedFile.name}
                                    </p>
                                    <p className="text-xs text-white/60">
                                        {(selectedFile.size / 1024).toFixed(2)} KB
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={removeFile}
                            className="text-white/60 hover:text-red-400 transition-colors"
                            title="Eliminar archivo"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileUpload;