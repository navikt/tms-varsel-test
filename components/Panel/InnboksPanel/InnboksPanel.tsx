import {Button, Panel, Select, Textarea} from '@navikt/ds-react';
import { useState } from "react";
import styles from "./InnboksPanel.module.css";
import {post} from "../../../lib/api/post";

export const InnboksPanel = () => {
  const [tekst, setTekst] = useState("Skriv inn tekst");
  const [lenke, setLenke] = useState("Skriv inn lenke");
  const [eksternVarsling, setEksternVarsling] = useState("false");

  const createInnboks = async () => {
    await post("innboks", {
      tekst: tekst,
      link: lenke,
      eksternVarsling: eksternVarsling,
    });
  };

  return (
    <Panel>
      <div className={styles.content}>
        <Textarea
          label="Tekst"
          value={tekst}
          onChange={e => setTekst(e.target.value)}
          size="small"
        />
      </div>
      <div className={styles.content}>
        <Textarea
          label="Lenke"
          value={lenke}
          onChange={e => setLenke(e.target.value)}
          size="small"
        />
      </div>
      <div className={styles.content}>
        <Select
          label="Ekstern varsling"
          size="medium"
          onChange={(e) => setEksternVarsling(e.target.value)}
        >
          <option value="false">False</option>
          <option value="true">True</option>
        </Select>
      </div>
      <div className={styles.content}>
        <Button variant="secondary" onClick={createInnboks}>Opprett</Button>
      </div>
    </Panel>
  );
};
