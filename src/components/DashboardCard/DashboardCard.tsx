import { ReactNode } from "react";

interface DashboardCardProps {
  icon: ReactNode;
  mainText: string;
  secondaryText: string;
}

const DashboardCard = ({
  icon,
  mainText,
  secondaryText,
}: DashboardCardProps) => {
  return (
    <div className="flex h-[150px] flex-col items-center justify-center gap-1 rounded-[10px] bg-brand-white">
      <div className="flex items-center gap-2">
        <span>{icon}</span>
        <p className="text-2xl font-semibold text-brand-dark-blue">
          {mainText}
        </p>
      </div>
      <div>{secondaryText}</div>
    </div>
  );
};

export default DashboardCard;
