import React from "react";

import { Header } from "../components/header";

export default () => {
  const TextLink = props => (
    <a href={props.url || "/"}>
      <span>
        {props.title}, <em>{props.source}</em>
      </span>
      <span>({props.type})</span>
    </a>
  );

  return (
    <>
      <Header />
      2016
      <ul>
        <li>
          <TextLink title="Our Bodies" source="Aperture Magazine" type="pdf" />
        </li>
        <li>
          <TextLink
            title="The Sun Places in the Abyss"
            source="Artforum.com"
            type="pdf"
          />
        </li>
        <li>
          <TextLink title="The Art of Birth" source="CARLA" type="pdf" />
        </li>
        <li>
          <TextLink title="Mother Mother" source="Mother Mother" type="url" />
        </li>
        <li>
          <TextLink
            title="Yto Barrada: Dinosaur Road"
            source="Aperture Magazine"
            type="url"
          />
        </li>
      </ul>
    </>
  );
};
