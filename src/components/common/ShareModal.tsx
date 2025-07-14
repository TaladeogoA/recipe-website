"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { FaFacebook, FaLink, FaTimes, FaTwitter, FaWhatsapp } from "react-icons/fa";

export type ShareModalProps = {
    open: boolean;
    onClose: () => void;
    url: string;
};

export function ShareModal({ open, onClose, url }: ShareModalProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide toast after 2 seconds
    }, [url]);

    const shareOptions = useMemo(
        () => [
            {
                icon: <FaFacebook size={24} />,
                label: "Facebook",
                href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            },
            {
                icon: <FaTwitter size={24} />,
                label: "Twitter",
                href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
            },
            {
                icon: <FaWhatsapp size={24} />,
                label: "WhatsApp",
                href: `https://wa.me/?text=${encodeURIComponent(url)}`,
            },
        ],
        [url]
    );

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            setCopied(false); // Reset toast if modal closes
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    return createPortal(
        <div
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    aria-label="Close share modal"
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    <FaTimes size={20} />
                </button>
                <h2 className="text-lg font-semibold mb-4">Share this recipe</h2>
                <div className="flex flex-col gap-4">
                    {shareOptions.map((option) => (
                        <a
                            key={option.label}
                            href={option.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 transition"
                            aria-label={`Share on ${option.label}`}
                        >
                            {option.icon}
                            <span>{option.label}</span>
                        </a>
                    ))}
                    <button
                        type="button"
                        className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100 transition"
                        onClick={handleCopy}
                        aria-label="Copy link"
                    >
                        <FaLink size={20} />
                        Copy Link
                    </button>
                </div>


            </div>
            {/* Toast message */}
            {copied && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-md">
                    Link copied to clipboard!
                </div>
            )}
        </div>,
        document.body
    );
}
