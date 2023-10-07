import React from "react";
import AnalysesSearch from "./analyses.search";
import AnalysesHeaderCard from "./analyses.header.card";

interface AnalysesHeaderProps {
  searchValue?: string | undefined;
}

export default function AnalysesHeader({ searchValue }: AnalysesHeaderProps) {
  return (
    <div className="analyses__header analyses-header">
      <AnalysesSearch defaultValue={searchValue} />
      <AnalysesHeaderCard />
    </div>
  );
}
