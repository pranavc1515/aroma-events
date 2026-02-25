/**
 * ImageSkeleton — Loading placeholder for images
 */
const ImageSkeleton = ({ className = '' }) => (
    <div className={`animate-pulse bg-gray-200 dark:bg-charcoal-light rounded-xl ${className}`} aria-hidden />
);

export default ImageSkeleton;
