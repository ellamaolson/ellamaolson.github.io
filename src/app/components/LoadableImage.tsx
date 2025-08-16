import Image from 'next/image';
import { useState } from 'react';

interface LoadableImageProps {
  src: any;
  alt: string;
  className: string;
  objectPosition?: string;
  priority?: boolean;
}

export const LoadableImage = ({
  src,
  alt,
  className,
  objectPosition = 'center',
  priority = false,
}: LoadableImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`${className} relative overflow-hidden`}>
      {isLoading && <div className="absolute inset-0 bg-gray-200 bg-opacity-10 rounded-lg"></div>}
      <Image
        alt={alt}
        src={src}
        fill
        sizes="(max-width: 768px) 213px, 33vw"
        priority={priority}
        className={`rounded-lg object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ objectPosition }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
