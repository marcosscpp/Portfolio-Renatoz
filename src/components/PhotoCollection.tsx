import Photo from "./Photo";
import styled from "styled-components";
import { ReactNode, useMemo } from "react";

const Collection = styled.section<{ align: "right" | "left" }>`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
  width: 100%;

  @media (max-width: 769px) {
    max-width: 50rem;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    grid-template-areas: ${({ align }) =>
      align === "left" ? '"col1 col2"' : '"col2 col1"'};

    grid-template-columns: ${({ align }) =>
      align === "left"
        ? "calc(37.5% - 0.625rem) calc(62.5% - 0.625rem)"
        : "calc(62.5% - 0.625rem) calc(37.5% - 0.625rem)"};
  }
`;

const CollectionInfo = styled.header<{ align: "right" | "left" }>`
  text-align: center;
  padding: 0 1.25rem 1.25rem;

  @media (min-width: 768px) {
    text-align: ${({ align }) => align};
    width: 95%;
  }
`;

const CounterTitle = styled.h1`
  color: var(--gray-100);
  font-family: var(--display-font);
  font-size: 6.25rem;
  font-weight: 400;
  line-height: 0.935;

  @media (max-width: 769px) {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
`;

const Separator = styled.hr`
  margin: 2rem auto;
  width: 100%;

  @media (max-width: 769px) {
    display: none;
  }
`;

const CategoryTitle = styled.h2`
  color: var(--gray-50);
  font-family: var(--primary-font);
  font-size: 4rem;
  font-weight: 400;
  line-height: 1.05;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  color: var(--gray-150);
  font-family: var(--secondary-font);
  font-size: 1.0625rem;
  line-height: 1.35;

  strong {
    color: var(--gray-50);
    font-weight: 600;
  }
`;

const PhotosColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: 768px) {
    &:first-of-type {
      grid-area: col1;
    }

    &:last-of-type {
      grid-area: col2;
    }
  }
`;

const PhotosRows = styled.div`
  display: flex;
  gap: 1.25rem;
`;

interface PhotoData {
  id: number;
  path: string;
  width: number;
  height: number;
  alt: string;
}

export interface PhotoColletcionProps {
  photosList: PhotoData[];
  category: string;
  description: ReactNode;
  counter: number;
  descriptionAlignment: "right" | "left";
}

const PhotoCollection = ({
  photosList,
  category,
  description,
  counter,
  descriptionAlignment = "left",
}: PhotoColletcionProps) => {
  const photosGroup = (photos: PhotoData[]): PhotoData[][] => {
    const photosInFirstColumn = Math.round(photos.length / 2.66);
    const arrayBaiano: PhotoData[][] = [
      photos.slice(0, photosInFirstColumn),
      photos.slice(photosInFirstColumn),
    ];
    return arrayBaiano;
  };

  const photosSeparatedByColumns = useMemo(
    () => photosGroup(photosList),
    [photosList]
  );

  return (
    <Collection align={descriptionAlignment}>
      <PhotosColumn>
        <CollectionInfo align={descriptionAlignment}>
          <CounterTitle>{counter.toString().padStart(2, "0")}.</CounterTitle>
          <Separator />
          <CategoryTitle>{category}</CategoryTitle>
          <Description>{description}</Description>
        </CollectionInfo>
        {photosSeparatedByColumns[0].length > 0 &&
          photosSeparatedByColumns[0].map((photo) => (
            <Photo
              key={photo.id}
              alt={photo.alt}
              src={photo.path}
              width={photo.width}
              height={photo.height}
            />
          ))}
      </PhotosColumn>

      <PhotosColumn>
        {photosSeparatedByColumns[1].length > 0 &&
          photosSeparatedByColumns[1].map((photo, index, arr) => {
            if (index % 3 === 2 && arr.length > 3) {
              return;
            }
            if (index % 3 === 1 && index + 1 < arr.length && arr.length > 3) {
              return (
                <PhotosRows key={`row-${photo.id}-${arr[index + 1].id}`}>
                  <Photo
                    key={photo.id}
                    alt={photo.alt}
                    src={photo.path}
                    width={photo.width}
                    height={photo.height}
                  />
                  <Photo
                    key={arr[index + 1].id}
                    alt={arr[index + 1].alt}
                    src={arr[index + 1].path}
                    width={photo.width}
                    height={photo.height}
                  />
                </PhotosRows>
              );
            } else {
              return <Photo key={photo.id} alt={photo.alt} src={photo.path} />;
            }
          })}
      </PhotosColumn>
    </Collection>
  );
};

export { PhotoCollection };
