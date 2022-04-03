import React from "react";
import SkillCard from "../skillCard";
import SkillCardStyle from "../skillCard.styled";
import { format, parse } from "date-format-parse";

function OsuUserSkillCard({
  title,
  image,
  accuracy,
  level,
  pp_raw,
  country,
  pp_rank,
  countryRank,
  join_date,
}) {
  return (
    <SkillCard title={title} image={image}>
      <div className="description">Accuracy :- {Math.floor(accuracy)}</div>
      <div className="description">Level :- {Math.floor(level)}</div>
      <div className="description">PP :- {Math.floor(pp_raw)}</div>
      <div className="description">Country :- {country}</div>
      <div className="description">Country Rank :- #{countryRank}</div>
      <div className="description">Global Rank :- #{pp_rank}</div>
      <div className="description">
        Joined on : {format(join_date, "DD MMM YYYY")}
      </div>
    </SkillCard>
  );
}

export default OsuUserSkillCard;
