'use client';

interface IContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
