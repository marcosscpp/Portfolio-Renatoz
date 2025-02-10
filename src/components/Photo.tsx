import { useState, useRef, useEffect } from "react";
import styles from "./Photo.module.css";
import styled from "styled-components";

interface PhotoProps {
  alt: string;
  src: string;
  title?: string;
  width?: number,
  height?: number,
}

const Placeholder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #292929;
  top: 0;
  left: 0;
`;

const Photo = ({ alt, src, title, width, height }: PhotoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px 400px 0px",
    threshold: 0.1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, [imageRef, observerOptions]);

  return (
    <div className={styles.photoContainer}>
      <img
        onLoad={handleImageLoad}
        ref={imageRef}
        src={isVisible ? src : ""}
        alt={alt}
        title={title || ""}
        className={styles.photoImage}
        height={height}
        width={width}
      />
      {!isLoaded && <Placeholder />}
    </div>
  );
};

export default Photo;
