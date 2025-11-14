// RouteLink.tsx
import * as React from "react";
import { useNavigate } from "react-router-dom";


type RouteLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export const RouteLink: React.FC<RouteLinkProps> = ({ to, children, className }) => {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};
